
export default function renderEdit (elemento) {

	var personaje = elemento[0]

	var template = `<div class="Personajes-app__form" id="From_edit">
					      <h2>Editar Personaje</h2>
					      <form action="" id="Formulario_edit">
						        <div>
						          <label>Nombre:</label>
						          <input type="text" id="personaje_name" value="${personaje.name}" placeholder="Nombre del Personaje" name="name" autocomplete="off" required="required"/>
						        </div>
						        <div>
						          <label>Ocupacion del Personaje:</label>
						          <input type="text" id="personaje_occupation" value="${personaje.occupation}" placeholder="El personaje es un..." name="occupation" autocomplete="off" required="required"/>
						        </div>
						        <div>
						          <label>Serie, Pelicula o Grupo:</label>
						          <input type="text" id="personaje_group" value="${personaje.group}" placeholder="El personaje es de..." name="group" autocomplete="off" required="required"/>
						        </div>
						        <div>
					              <label>Edad:</label>
						          <input type="text" id="personaje_age" value="${personaje.age}" placeholder="Edad del Personaje" name="age" autocomplete="off" required="required"/>
						        </div>
						        <div>
						          <label>Url Imagen:</label>
						          <input type="text" id="personaje_photo" value="${personaje.photo}" placeholder="Pega un Enlace/URL de la imagen del Personaje" name="photo" autocomplete="off" required="required"/>
					            </div>
					            <a id="btn_send" href="/update/${personaje._id}" class="btn_update btn-blue">Guardar Cambios</a>
					      </form>
					    </div>`

	$('.Personajes-app__box').append(template)
	console.log('Render Edit2')
}