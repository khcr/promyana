<?php
$success = false;
if (isset($_POST["contact"])) {
	if (!empty($_POST["email"]) and !empty($_POST["object"]) and !empty($_POST["message"])) {
		$firstname = clean($_POST["firstname"]);
		$lastname = clean($_POST["lastname"]);
		$email = clean($_POST["email"]);
    $phone = clean($_POST["phone"]);
		$object = clean($_POST["object"]);
		$message = clean($_POST["message"]);
		if (is_valid($firstname) AND is_valid($lastname) AND is_email($email) AND is_valid($object) and is_valid($phone)) {
	    $headers	= "From: Promyana <promyana.org@gmail.com>\r\n".
      			      "Reply-To: ".$email."\r\n".
			  		      "MIME-Version: 1.0\r\n".
			  		      "Content-type: text/plain; charset=UTF-8\r\n";
      $content = "Firstname: ".$firstname."\r\n".
                 "Lastname: ".$lastname."\r\n".
                 "Email: ".$email."\r\n".
                 "Phone: ".$phone."\r\n\r\n------------\r\n\r\n".$message;

   	  mail("promyana.org@gmail.com", $object, $content, $headers);
        $success = true;
    	}
	}
}

if($success) {
  header("Location: /contact.html?state=success#contact");
} else {
  header("Location: /contact.html?state=error#contact");
}

function clean($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
function is_email($email) {
  return filter_var($email, FILTER_VALIDATE_EMAIL);
}
function is_valid($str) {
  return strlen($str) < 150;
}
?>
