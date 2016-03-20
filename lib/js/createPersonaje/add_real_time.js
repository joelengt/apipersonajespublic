var socket = io()

$('#Formulario_create').submit(function () {
	socket.emit('new personaje', {
		id: '',
		name: $('#personaje_name').val(),
		occupation: $('#personaje_occupation').val(),
		group: $('#personaje_group').val(),
		age: $('#personaje_age').val(),
		photo: $('#personaje_photo').val()
	})

	$('#personaje_name').val('')
	$('#personaje_occupation').val('')
    $('#personaje_group').val('')
    $('#personaje_age').val('')
    $('#personaje_photo').val('')
	return false
})

socket.on('new personaje', function (content) {
	var template = `<article class="Personajes-app__read__item">
					        <div class="item__title">
					          <h2>${content.name}</h2>
					        </div>
					        <figure class="item__imagen"><img src=" ${content.photo} "/></figure>
					        <div class="item__data">
						          <div class="item__data--rate">
						            <p class="rate__right"> <span class="icon-heart-on"></span><span id="like-cant">7</span>
						              <p>Likes</p>
						            </p>
						            <p class="rate__left"> <span class="icon-bubbles2"> </span><span id="comment-cant">23</span>
						              <p>Comentarios</p>
						            </p>
						          </div>
						          <div class="item__data--author"><strong>By:</strong>
						            <figure><img src="./images/favicon.ico" width="20"/></figure>
						            <p>@joelengt</p>
						          </div>
					        </div>
					        <div class="item__detalles">
						          <span>
						          	  <strong>Serie/Grupo:</strong>
						              <p>${content.group}</p>
					              </span>
					               <span>
						          	  <strong>Ocupación:</strong>
						              <p>${content.occupation}</p>
					              </span>
					               <span>
						          	  <strong>Edad:</strong>
						              <p>${content.age}</p>
					              </span>
					        </div>
					        <div class="item__action">
						          <div class="action--like"><a href="#" class="btn-like  icon-heart-off  color-gray"></a></div>
						          <div class="action--comment">
					              <input type="text" placeholder="Añade un Comentario..."/>
					          </div>
					          <div class="action--settings">
						          <a href="/detalle/${content.id}" class="icon-settings"></a>
					          </div>
					        </div>
				      </article>`

	$('#pj_item').prepend(template)
})