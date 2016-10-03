/* display a flash message depending on the GET params */
$flash = document.getElementById("flash");
if(window.location.search.indexOf("state=success") === 1) {
  $flash.innerHTML = "Вашето съобщение беше изпратено успешно !";
} else if(window.location.search.indexOf("state=error") === 1) {
  $flash.innerHTML = "Вашето съобщение не може да бъде изпратено. Молим ви да попълните всички полета коректно.";
}
/* autohide the flash message */
if(window.location.search.indexOf("state=") === 1) {
  setTimeout(function () {
    $flash.style.display = "none";
  }, 4000);
}
