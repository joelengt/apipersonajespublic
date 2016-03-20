var mongoose = require('mongoose')
var Schema = mongoose.Schema

var personajeSchema = new Schema({
	name: String,
	occupation: String,
	group: String,
	age: Number,
	photo: String,
	likes: Number
})

var pj = mongoose.model('personajes', personajeSchema)

module.exports = pj