const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getToy, getToys, deleteToy, updateToy, addReview } = require('./toy.controller')
const router = express.Router()

router.get('/', getToys)
router.get('/:id', getToy)

// middleware that is specific to this router
router.use(requireAuth)

// router.post('/:id/review', requireAuth, addReview)

// middleware that is specific to this router
router.use(requireAdmin)

router.post('/', requireAuth, requireAdmin, updateToy)
router.put('/:id', requireAuth, requireAdmin, updateToy)
router.delete('/:id', requireAuth, requireAdmin, deleteToy)

module.exports = router
