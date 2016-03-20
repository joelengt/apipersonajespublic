// require model chat
var Personajes = require('../models/personajes')

function time (io) {

	io.on('connection', function (socket) {
		socket.on('new personaje', function (content) {
			// Guardando Personajes
			var pj = new Personajes({
				name: content.name,
				occupation: content.occupation,
				age: content.age,
				group: content.group,
				photo: content.photo
			})
			
			pj.save(function (err) {
				if(err) {
					return res.send('Error al guardar personaje: ' + err)
				}
			})

			content.id = pj._id

			io.emit('new personaje', content)
		})
	})

}

module.exports = time