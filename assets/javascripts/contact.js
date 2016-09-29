/* display a flash message depending on the GET params */
$flash = document.getElementById("flash");
if(window.location.search.indexOf("state=success") === 1) {
  $flash.innerHTML = "Your message has been sent !";
} else if(window.location.search.indexOf("state=error") === 1) {
  $flash.innerHTML = "Impossible to send the message. Fill the fields correctly.";
}
/* autohide the flash message */
if(window.location.search.indexOf("state=") === 1) {
  setTimeout(function () {
    $flash.style.display = "none";
  }, 4000);
}
