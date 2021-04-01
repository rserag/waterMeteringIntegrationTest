const router = require('express').Router(),
	{query} = require('express-validator'),

	controller = require('../controllers/general')

router.post('/ttn', controller.ttn)

router.get('/statistics', controller.stats)

router.get('/notif', controller.notif)

module.exports = router
