var express = require('express')
var app = express.Router()

// Data Base Personajes
var Personajes  = require('../models/personajes')

// GET de todos los personajes
app.get('/personajes', function (req, res) {
	Personajes.find(function (err, personajes) {
		if(err) {
			return res.send(500, {status: 'error 500, No se encontraron los elementos', error: err})
		}
		res.send(personajes)	
	})
})

// GET de un personaje por id
app.get('/personajes/:id', function (req, res) {
	var id = req.params.id
	
	Personajes.find({'_id': id}, function (err, personaje) {
		if(err) {
			return res.send(500, {status: 'error 500, No se encontro al personaje', err: err})
		}
		res.send(personaje)
	})
})

// POST Crear un nuevo personaje

app.post('/personaje', function (req, res) {

	var pj = new Personajes ({
		name: req.body.name,
		occupation: req.body.occupation,
		group: req.body.group,
		age: req.body.age,
		photo: req.body.photo,
		likes: 0
	})

	pj.save(function (err) {
		if(err) {
			return res.send(500, {status: 'error 500, no se guardo el elemento', error: err})
		}
		res.send(200, {status:'Ok', element: pj})
	})
	
})

// DELETE Borrar un personaje

app.delete('/personaje/:id', function (req, res) {
	var id = req.params.id

	// Personajes.find({'_id': id}, function (err, personaje) {
	// 	if(err) {
	// 		return res.send(500, {status: 'error 500, No se encontro al personaje', err: err})
	// 	}

		// if(req.body.name_confirmed == personaje[0].name) {

	Personajes.remove({'_id': id}, function (err) {
		if(err) {
			return res.send(500, {status: 'error 500, No se borro el personaje', error: err})
		}
		res.send(200, {status: 'Personaje Eliminado'})
	})

		// } else {
		// 	res.send(400, {status:'La confirmación no es valida, No Delete'})
		// }

	// })

})

// PUT Actualizar un personaje

app.put('/personaje/:id', function (req, res) {
	var id = req.params.id

	var dataPj = {
		name: req.body.name,
		occupation: req.body.occupation,
		group: req.body.group,
		age: req.body.age,
		photo: req.body.photo
	}

	Personajes.update({'_id': id}, dataPj, function (err) {
		if(err) {
			return res.send(500, {status: 'error 500, No se actualizo el personaje', error: err})
		}
		res.send(200, {status: 'Personaje Actualizado'})
	})

})

module.exports = app