const mongoose = require('mongoose'),

    r = require('../utils/response');

exports.stats = async(req, res) => {
    let query = [{}]

	try{
    res.send(req)
	}catch(e){
		console.log(e);
		if(e.message) e = e.message
		res.status(400).send(r('failed', e))
	}
}

exports.notif = async(req, res) => {
	try{
    res.send(req)
	}catch(e){
		console.log(e);
		if(e.message) e = e.message
		res.status(400).send(r('failed', e))
	}
}
