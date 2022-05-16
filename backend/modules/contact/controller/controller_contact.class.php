<?php
	class controller_contact {
		function sendEmail(){
			require ( UTILS . 'mail.inc.php');
			$message = ['type' => 'contact',
						'inputName' => $_POST['name'], 
						'fromEmail' => $_POST['email'], 
						'inputMatter' => $_POST['matter'], 
						'inputMessage' => $_POST['message']];
			$email = json_encode(mail::send_email($message), true);
			if (!empty($email)) {
				echo json_encode("ok");
				exit;  
			}else{echo json_encode('not ok');
				exit;}
			
		}
	}
?>
