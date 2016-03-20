

var $form_publicar = $('#Formulario_create')
var $btn_publicar = $('#btn_publicar')
var $btn_personajes = $('#btn_personajes')

$btn_publicar.on('click', OpenPublicar)

function OpenPublicar () {
	$form_publicar.slideToggle()
	return false
}

$btn_personajes.on('click', GoPersonajes)

function GoPersonajes() {
	window.location.href = '/demo'
}
