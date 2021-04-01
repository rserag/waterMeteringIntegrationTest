const mongoose = require('mongoose')

const MeterSchema = new mongoose.Schema({
	devId: {type: String},
	meterNumber: {type: Number},
	forwardFlow: {type: Number},
	reverseFlow: {type: Number},
	meterTime: {type: Date},
	raw_payload: {type: String},
	createdAt: {type: Date, default: Date.now}
});

const Meter = mongoose.model('Meter', MeterSchema);
module.exports = Meter;
