const router = require('express').Router(),
	{query} = require('express-validator'),

	controller = require('../controllers/general')


router.get('/statistics', controller.stats)

router.get('/notif', controller.notif)

module.exports = router
