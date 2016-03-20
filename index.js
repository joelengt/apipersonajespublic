var express = require('express')
var app = express()
var mongoose = require('mongoose')
var http = require('http').Server(app)
var io = require('socket.io')(http)

var path = require('path')
var logger = require('morgan')
var favicon = require('serve-favicon')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var methodOverride = require('method-override')

var config = require('./config')

// Connect DataBase
mongoose.connect( config.mongodb.mlab , function (err) {
	if(err) {
		return console.log('Error al conectar la base de datos: ' + err)
	}
	console.log('Exito, base de datos conetada')
})

app.set('port', process.env.PORT || 4000)
app.use(express.static(path.join(__dirname, './public')))

//CORS middleware
var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

	next()
}

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(allowCrossDomain)
app.use(methodOverride('_method'))
app.use(favicon(path.join(__dirname, './public/images/favicon.ico')))

// Controllers
var timereal_pj = require('./controllers/personajes_tiempo_real')

// pasando socket.io al controller
timereal_pj(io)

// routes app
var staticRoutes = require('./routes/static/index')
var ApiData = require('./routes/api')

// User routes
app.use('/', staticRoutes)
app.use('/api', ApiData)

// Error 404
app.use(function (req, res) {
	res.statusCode = 404
	res.send('Error 404, Page Not Found')
})

// Error 500
app.use(function (req, res) {
	res.statusCode = 500
	res.send('Error 500, Sistem Fail, Please Try Late')
})

http.listen(app.set('port'), function (err) {
	if(err) {
		return console.log('Error al iniciar el server en el puerto: ' + err)
	}
	console.log('Server iniciado en el puerto: ' + app.set('port') )
})