
<?php 

$destinatario = "francisco.a.arroyo@gmail.com";
$asunto = "Contacto CV"; 
$cuerpo = '<html><head><title>Mensaje desde Mezopanne.com</title></head><body><h1>Este correo llego a traves de CV</h1>';
$cuerpo .= "<p>De: " . $_POST['email'] . " " . $_POST['first_name'] . " " . $_POST['last_name'] . "</p>";
$cuerpo .= "<p>Asunto: " . $_POST['subject'] . " </p>";
$cuerpo .= "<p>Comentarios: " . $_POST['comments'] . "</p>";

$cuerpo .='</p></body></html>'; 


//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=utf-8\r\n"; 

//dirección del remitente 
$headers .= "From: " . $_POST['first_name'] . " " . $_POST['last_name'] . " <" . $_POST['email'] . ">\r\n"; 

//dirección de respuesta, si queremos que sea distinta que la del remitente 
$headers .= "Reply-To: " . $_POST['email'] . " \r\n"; 

//ruta del mensaje desde origen a destino 
$headers .= "Return-path: francisco.arroyo@controlzeta.com.mx \r\n"; 

//direcciones que recibián copia 
$headers .= "Cc: francisco.arroyo@controlzeta.com.mx \r\n"; 

//direcciones que recibirán copia oculta 
$headers .= "Bcc: controlzetapuebla@gmail.com \r\n"; 

mail($destinatario,$asunto,$cuerpo,$headers) 

?>