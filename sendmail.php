<?php
	$recaptcha = $_POST["g-recaptcha-response"];
	$url = 'https://www.google.com/recaptcha/api/siteverify';
	$data = array(
		'secret' => 'XXXXXXXXXXX',
		'response' => $recaptcha
	);
	$options = array(
		'http' => array (
			'method' => 'POST',
			'content' => http_build_query($data)
		)
	);
	$context  = stream_context_create($options);
	$verify = file_get_contents($url, false, $context);
	$captcha_success = json_decode($verify);
	if ($captcha_success->success) {
		$to      = 'sistemas.serofca@gmail.com';
		$subject = 'contacto - cursos.serofca.com';
		$name = $_POST['name'];
		$email = $_POST['mail'];
		$cel = $_POST['phone'];
		$country = $_POST['country'];
		$msg = $_POST['msg'];
			
		$message = "de: $name ($email)\n Desde $country\n$cel\n\n$msg";
		$headers = 'From: notificaciones@serofca.com' . "\r\n" .
			'Reply-To: notificaciones@serofca.com' . "\r\n" .
			'X-Mailer: PHP/' . phpversion();
		mail($to, $subject, $message, $headers);
		echo "
			<script>
				alert('mensaje enviado');
				location.href = 'https://curso.serofca.com'
			</script>
		";
	} else {
		echo 'error en autenticación. Posible bot detectado, intente de nuevo.';
	}
?>