$formulario = $('#formulario');
$nombre=$('#nombre');
$correo=$('#correo');
$asunto=$('#asunto');

function datosCorrectos()
{
	if($nombre.val().length==0 || validateEmail($correo.val())==false || $asunto.val().length==0)
	{
		return false;
	}
	return true;	
}

function enviarDatos(evento)
{
	evento.preventDefault();
	if(datosCorrectos())
	{
		
		/*
			https://medium.com/@mariusc23/send-an-email-using-only-javascript-b53319616782
			Api: NPd85yHHlHpbaauyYyyJuw
			Host: smtp.mandrillapp.com 
			Port: 587 
			SMTP: Username julian.m.parra@gmail.com 
			SMTP: Password any valid API key
		*/
		cargando();
		$.ajax({
		  type: 'POST',
		  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
		  data: {
		    'key': 'NPd85yHHlHpbaauyYyyJuw',
		    'message': {
		      'from_email': 'julian.m.parra@gmail.com',
		      'to': [
		          {
		            'email': 'julian.m.parra@gmail.com',
		            'name': 'Julian Parra',
		            'type': 'to'
		          }
		        ],
		      'autotext': 'true',
		      'subject': 'Contacto a Julian M Parra',
		      'html': $asunto.val()
		    }
		  }
		 }).done(function(response) {
		   removerCarga();
		   console.log(response); // if you're into that sorta thing
		   mensaje('Envío exitoso', '<p>El mensaje fue enviado con éxito.</p><p>Pronto nos comunicaremos con usted</p><p>Gracias</p>')
		   $asunto.val('');
		   $nombre.val('');
		   $correo.val('');
		   
		 });
	}else{
		mensaje('Atención','<p>Los datos a enviar no son correctos.</p><p>Por favor revisar la información y verificar que no haga falta por digitar ningún dato</p><p>Gracias</p>');
	}
	
	
}


$(function(){

	$formulario.on('submit',enviarDatos);

});

