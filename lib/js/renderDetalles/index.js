

export default function renderDetalles (elemento) {

	var personaje = elemento[0]
	
	var template = `<article class="Personajes-app__read__item">
				        <div class="item__title">
				          <h2>${personaje.name}</h2>
				        </div>
				        <figure class="item__imagen"><img src=" ${personaje.photo} "/></figure>
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
					            <figure><img src="../images/favicon.ico" width="20"/></figure>
					            <p>@joelengt</p>
					          </div>
				        </div>
				        <div class="item__detalles">
					          <span>
					          	  <strong>Serie/Grupo:</strong>
					              <p>${personaje.group}</p>
				              </span>
				               <span>
					          	  <strong>Ocupación:</strong>
					              <p>${personaje.occupation}</p>
				              </span>
				               <span>
					          	  <strong>Edad:</strong>
					              <p>${personaje.age}</p>
				              </span>
				        </div>
				        <div class="item__action">
				          <div class="action--comment">
				          	  <a class="btn-blue" href="/edit/${personaje._id}">Editar</a>
				          	  <a class="btn-red" href="/delete/${personaje._id}">Eliminar</a>
				          </div>
				        </div>
			      </article>`

		$('#pj_item').append(template)
	
}