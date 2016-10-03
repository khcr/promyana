var $localized = $("[data-localize]");

var uri = new URI(window.location.href);
var locale = uri.search(true).locale;
var file = document.body.dataset.i18n;

var opts = { pathPrefix: ("./locales/" + locale), language: locale };
if(locale !== undefined) { $localized.localize(file, opts).localize("header", opts).localize("footer", opts); };

document.onclick = function(e) {
  var locale = e.target.dataset.lang;
  // reload the page if the default language is wanted. Remove the locale param.
  if(locale === "bg") {
    window.location.href = uri.removeSearch("locale");
  } else if (locale !== undefined) {
    window.location.href = uri.setSearch("locale", locale);
  };
}
