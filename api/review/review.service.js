const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy = {}) {
	if (filterBy.aboutToyId) filterBy.aboutToyId = ObjectId(filterBy.aboutToyId)
	try {
		// const criteria = _buildCriteria(filterBy)
		const collection = await dbService.getCollection('review')
		// const reviews = await collection.find(criteria).toArray()
		var reviews = await collection
			.aggregate([
				{
					$match: filterBy,
				},
				{
					$lookup: {
						localField: 'byUserId',
						from: 'user',
						foreignField: '_id',
						as: 'byUser',
					},
				},
				{
					$unwind: '$byUser',
				},
				{
					$lookup: {
						localField: 'aboutToyId',
						from: 'toy',
						foreignField: '_id',
						as: 'aboutToy',
					},
				},
				{
					$unwind: '$aboutToy',
				},
			])
			.toArray()
		reviews = reviews.map(review => {
			review.byUser = { _id: review.byUser._id, fullname: review.byUser.fullname }
			review.aboutToy = { _id: review.aboutToy._id, name: review.aboutToy.name }
			delete review.byUserId
			delete review.aboutToyId
			return review
		})

		return reviews
	} catch (err) {
		logger.error('cannot find reviews', err)
		throw err
	}
}

async function remove(reviewId) {
	try {
		const store = asyncLocalStorage.getStore()
		const { userId, isAdmin } = store
		const collection = await dbService.getCollection('review')
		// remove only if user is owner/admin
		const query = { _id: ObjectId(reviewId) }
		if (!isAdmin) query.byUserId = ObjectId(userId)
		await collection.deleteOne(query)
		// return await collection.deleteOne({ _id: ObjectId(reviewId), byUserId: ObjectId(userId) })
	} catch (err) {
		logger.error(`cannot remove review ${reviewId}`, err)
		throw err
	}
}

async function add(review) {
	try {
		// peek only updatable fields!
		const reviewToAdd = {
			byUserId: ObjectId(review.byUserId),
			aboutToyId: ObjectId(review.aboutToyId),
			txt: review.txt,
			at: review.at || Date.now(),
		}
		const collection = await dbService.getCollection('review')
		await collection.insertOne(reviewToAdd)
		return reviewToAdd
	} catch (err) {
		logger.error('cannot insert review', err)
		throw err
	}
}

function _buildCriteria(filterBy) {
	const criteria = {}
	return criteria
}

module.exports = {
	query,
	remove,
	add,
}
