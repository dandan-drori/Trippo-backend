const utilService = require('../../services/util.service')
const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
	query,
	getById,
	getByToyName,
	remove,
	update,
	add,
	addChatMsg,
}

async function query(filterBy = {}) {
	filterBy = JSON.parse(filterBy)
	const criteria = _buildCriteria(filterBy)
	try {
		const collection = await dbService.getCollection('toy')
		var toys = await collection.find(criteria).toArray()
		if (filterBy.sortBy === 'NAME') {
			return toys.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
		} else if (filterBy.sortBy === 'PRICE') {
			return toys.sort((a, b) => (a.price > b.price ? 1 : a.price < b.price ? -1 : 0))
		}
		return toys
	} catch (err) {
		logger.error('cannot find toys', err)
		throw err
	}
}

async function getById(toyId) {
	try {
		const collection = await dbService.getCollection('toy')
		const toy = await collection.findOne({ _id: ObjectId(toyId) })
		return toy
	} catch (err) {
		logger.error(`while finding toy ${toyId}`, err)
		throw err
	}
}
async function getByToyName(toyName) {
	try {
		const collection = await dbService.getCollection('toy')
		const toy = await collection.findOne({ toyName })
		return toy
	} catch (err) {
		logger.error(`while finding toy ${toyName}`, err)
		throw err
	}
}

async function remove(toyId) {
	try {
		const collection = await dbService.getCollection('toy')
		await collection.deleteOne({ _id: ObjectId(toyId) })
	} catch (err) {
		logger.error(`cannot remove toy ${toyId}`, err)
		throw err
	}
}

async function update(toy) {
	try {
		// pick only updatable fields!
		const toyToSave = {
			_id: ObjectId(toy._id),
			name: toy.name,
			price: toy.price,
			type: toy.type,
			inStock: toy.inStock,
			imgUrl: toy.imgUrl,
			chatMsgs: toy.chatMsgs,
		}
		const collection = await dbService.getCollection('toy')
		await collection.updateOne({ _id: toyToSave._id }, { $set: toyToSave })
		return toyToSave
	} catch (err) {
		logger.error(`cannot update toy ${toy._id}`, err)
		throw err
	}
}

async function add(toy) {
	try {
		// pick only updatable fields!
		const toyToAdd = {
			name: toy.name,
			type: toy.type,
			price: toy.price || 0,
			createdAt: Date.now(),
			imgUrl: toy.imgUrl || '',
			chatMsgs: toy.chatMsgs || [],
		}
		const collection = await dbService.getCollection('toy')
		await collection.insertOne(toyToAdd)
		return toyToAdd
	} catch (err) {
		logger.error('cannot insert toy', err)
		throw err
	}
}

async function addChatMsg(msg, toyId) {
	try {
		const collection = await dbService.getCollection('toy')
		await collection.updateOne({ _id: ObjectId(toyId) }, { $push: { chatMsgs: msg } })
		return msg
	} catch (err) {
		logger.error('cannot add chat msg', err)
		throw err
	}
}

function _buildCriteria(filterBy) {
	const criteria = {}
	if (filterBy.name) {
		const txtCriteria = { $regex: filterBy.name, $options: 'i' }
		criteria.$or = [
			{
				name: txtCriteria,
			},
			{
				type: txtCriteria,
			},
		]
	}
	// if (filterBy.minBalance) {
	// 	criteria.balance = { $gte: filterBy.minBalance }
	// }
	if (filterBy.inStock === 'TRUE') {
		criteria.inStock = { $eq: true }
	} else if (filterBy.inStock === 'FALSE') {
		criteria.inStock = { $eq: false }
	}
	if (filterBy.type) {
		criteria.type = { $eq: filterBy.type }
	}
	return criteria
}
