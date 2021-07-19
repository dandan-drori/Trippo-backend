// const stayService = require('../api/stay/stay.service')
// const orderService = require('../api/stay/stay.service')
const asyncLocalStorage = require('./als.service')
const logger = require('./logger.service')

module.exports = {
	connectSockets,
	emitToAll,
	emitTo,
	broadcast,
}

var gIo = null
var gSocketBySessionIdMap = {}

function connectSockets(http, session) {
	gIo = require('socket.io')(http)

	const sharedSession = require('express-socket.io-session')

	gIo.use(
		sharedSession(session, {
			autoSave: true,
		})
	)
	gIo.on('connection', socket => {
		console.log('New socket - socket.handshake.sessionID', socket.handshake.sessionID)
		gSocketBySessionIdMap[socket.handshake.sessionID] = socket
		// TODO: emitToUser feature - need to tested for CaJan21
		// if (socket.handshake?.session?.user) socket.join(socket.handshake.session.user._id)
		socket.on('disconnect', socket => {
			console.log('Someone disconnected')
			if (socket.handshake) {
				gSocketBySessionIdMap[socket.handshake.sessionID] = null
			}
		})
		socket.on('chat topic', topic => {
			if (socket.myTopic === topic) return
			if (socket.myTopic) {
				socket.leave(socket.myTopic)
			}
			socket.join(topic)
			// logger.debug('Session ID is', socket.handshake.sessionID)
			socket.myTopic = topic
		})
		socket.on('chat newMsg', async ({ msg, toyId }) => {
			// emits to all sockets:
			// gIo.emit('chat addMsg', msg)
			// emits only to sockets in the same room
			await stayService.addChatMsg(msg, toyId)
			gIo.to(socket.myTopic).emit('chat addMsg', msg)
		})
		socket.on('review-added', review => {
			console.log('review', review)
		})
		socket.on('stay-watch', stayId => {
			socket.join(stayId)
		})
		socket.on('order-watch', orderId => {
			socket.join(orderId)
		})
		socket.on('set typing', typingData => {
			gIo.to(socket.myTopic).emit('change typing', typingData)
		})
		socket.on('change store', changeData => {
			gIo.emit('store change', changeData)
		})
	})
}

function emitToAll({ type, data, room = null }) {
	if (room) gIo.to(room).emit(type, data)
	else gIo.emit(type, data)
}

function emitTo({ type, data, label }) {
	if (label) gIo.to('watching:' + label).emit(type, data)
	else gIo.emit(type, data)
}

// TODO: Need to test emitToUser feature
function emitToUser({ type, data, userId }) {
	gIo.to(userId).emit(type, data)
}

// Send to all sockets BUT not the current socket
function broadcast({ type, data, room = null }) {
	const store = asyncLocalStorage.getStore()
	const { sessionId } = store
	if (!sessionId) return logger.debug('Shoudnt happen, no sessionId in asyncLocalStorage store')
	const excludedSocket = gSocketBySessionIdMap[sessionId]
	if (!excludedSocket) return logger.debug('Shouldnt happen, No socket in map')
	if (room) excludedSocket.broadcast.to(room).emit(type, data)
	else excludedSocket.broadcast.emit(type, data)
}
