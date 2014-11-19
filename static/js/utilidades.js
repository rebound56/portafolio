function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function mensaje(titulo, mensaje)
{
	$('body').append("<section class='Alerta'><div class='Alerta-mensaje'><div class='Alerta-mensajeHeader ui-shadowText'>"+titulo+"</div><div class='Alerta-mensajeBody'>"+mensaje+"</div><div class='Alerta-mensajeFooter'><button class='Alerta-button ui-shadowBox' onclick='removerMensaje()'>Ok</button></div></div></section>");
}
function removerMensaje()
{
	$('.Alerta').fadeOut('slow',function(){
		$('.Alerta').remove();
	});
}

function cargando()
{
	 $('.Cargando').fadeIn('slow',function(){
		$('.Cargando').show();
	});
}

function removerCarga()
{
	 $('.Cargando').fadeOut('slow',function(){
		$('.Cargando').hide();
	});
}
$(window).load(removerCarga());
$(function(){
	$("#Footer-description").html('Powered By Julian M Parra &copy; '+new Date().getFullYear());
});