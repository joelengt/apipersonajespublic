var express = require('express')
var fs = require('fs')
var app = express.Router()

app.get('/demo', function (req, res) {
	fs.readFile('./public/demo.html', function (err, data) {
		if(err) {
			return console.log(err)
		}
		res.send(data.toString())
	})
})

app.get('/doc', function (req, res) {
	fs.readFile('./public/doc.html', function (err, data) {
		if(err) {
			return console.log(err)
		}
		res.send(data.toString())
	})
})

module.exports = app