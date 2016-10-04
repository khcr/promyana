var $localized = $("[data-localize]");

var uri = new URI(window.location.href);
var locale = uri.search(true).locale;
var file = document.body.dataset.i18n;

if(locale !== undefined) {
  setCookie("locale", locale, 365);
} else {
  locale = getCookie("locale");
}

var opts = { pathPrefix: ("./locales/" + locale), language: locale };
if(locale !== undefined) { $localized.localize(file, opts).localize("header", opts).localize("footer", opts); };

document.onclick = function(e) {
  var locale = e.target.dataset.lang;
  if(locale === "bg") {
    window.location.href = uri.removeSearch("locale");
    document.cookie = "locale=; expires=Thu, 01 Jan 1970 00:00:00 UTC"; // delete the cookie
  } else if (locale !== undefined) {
    window.location.href = uri.setSearch("locale", locale);
  };
}
