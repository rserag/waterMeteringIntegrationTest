const router = require('express').Router(),
	{query} = require('express-validator'),

	controller = require('../controllers/general')

router.post('/ttn', controller.ttn)

router.get('/statistics', controller.stats)

module.exports = router
