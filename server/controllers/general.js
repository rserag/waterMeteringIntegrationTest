const mongoose = require('mongoose'),
	    Meter = require('../models/meter')
      r = require('../utils/response');

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
			if (i % 2)
        newString += str[i-1];
			else
				newString += str[i+1];
    }
    return newString;
}

exports.ttn = async(req, res) => {
	try {
    const devId = req.body.dev_id
    const payload = Buffer.from(req.body.payload_raw, 'base64')
    const forwardFlow = Number(payload.readInt32LE(8))/1000
    const reverseFlow = Number(payload.readInt32LE(12))/1000
    const meterTime = new Date(payload.readUInt16LE(22), payload.readUInt8(21), payload.readUInt8(20), payload.readUInt8(19), payload.readUInt8(18), payload.readUInt8(17), 0)

    const meterNumber = Number(reverseString(payload.slice(1, 8).toString('hex'))).toFixed(0)
    const newMeterObj = {
      devId,
      meterNumber,
      forwardFlow,
      reverseFlow,
      raw_payload: req.body.payload_raw,
      meterTime
    }

    const newMeter = new Meter(newMeterObj)
    await newMeter.save()
    console.log('saved');
    res.send("ok")
	} catch(e) {
		console.log(e);
		if(e.message) e = e.message
		res.status(500).send(r('failed', 'internalError'))
	}
}

exports.stats = async(req, res) => {
  try {
		const stats = await Meter.find({}).sort({createdAt: -1}).limit(500)
		if(!stats[0]) throw 'There\'s no any station in DB'

		res.send(stats)
	} catch(e) {
		console.log(e);
		if(e.message) e = e.message
		res.status(400).send(r('failed', e))
	}
}

exports.notif = async(req, res) => {
	try {
    res.send(req)
	} catch(e) {
		console.log(e);
		if(e.message) e = e.message
		res.status(400).send(r('failed', e))
	}
}
