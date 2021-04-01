require('dotenv').config()

const {mongoose} = require('./db/mongoose'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	express = require('express'),
	port = process.env.PORT,
	app = express(),
	server = require('http').Server(app)


//Express configs
app.use(cors())
app.use(bodyParser.json({extended: true, limit: "50mb"}))
app.use(bodyParser.urlencoded({extended: true, limit: "50mb"}))
app.use('/api', express.static(path.join(__dirname, './static')))
//use global router
console.log(`${process.env.PREFIX}`);

app.use(`${process.env.PREFIX}/`, require('./routers/Router'))

server.listen(port, "2a01:4f8:150:6267::8", () => {
	console.log(`Server running on port: ${port}`);
})
