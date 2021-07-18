const stayService = require('./stay.service')
const socketService = require('../../services/socket.service')
const logger = require('../../services/logger.service')

async function getStay(req, res) {
	try {
		const stay = await stayService.getById(req.params.id)
		res.send(stay)
	} catch (err) {
		logger.error('Failed to get stay', err)
		res.status(500).send({ err: 'Failed to get stay' })
	}
}

async function getStays(req, res) {
	try {
		const stays = await stayService.query(req.query.params)
		res.send(stays)
	} catch (err) {
		logger.error('Failed to get stays', err)
		res.status(500).send({ err: 'Failed to get stays' })
	}
}

async function deleteStay(req, res) {
	try {
		await stayService.remove(req.params.id)
		res.send({ msg: 'Deleted successfully' })
	} catch (err) {
		logger.error('Failed to delete stay', err)
		res.status(500).send({ err: 'Failed to delete stay' })
	}
}

async function updateStay(req, res) {
	try {
		const stay = req.body
		const savedStay = stay._id ? await stayService.update(stay) : await stayService.add(stay)
		res.send(savedStay)
		// TODO:
		// socketService.broadcast({ type: 'stay-updated', data: savedStay, to: savedUser._id })
	} catch (err) {
		logger.error('Failed to update stay', err)
		res.status(500).send({ err: 'Failed to update stay' })
	}
}

module.exports = {
	getStay,
	getStays,
	deleteStay,
	updateStay,
}
