var $localized = $("[data-localize]");

var uri = new URI(window.location.href);
var locale = uri.search(true).locale;
var file = document.body.dataset.i18n;

if(locale !== undefined) { $localized.localize(file, { pathPrefix: ("./locales/" + locale), language: locale }); };

document.onclick = function(e) {
  var locale = e.target.dataset.lang;
  // reload the page if the default language is wanted. Remove the locale param.
  if(locale === "bg") {
    window.location.href = uri.removeSearch("locale");
  } else if (locale !== undefined) {
    window.location.href = uri.setSearch("locale", locale);
  };
}
