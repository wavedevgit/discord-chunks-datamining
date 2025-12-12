/** Chunk was on web.js **/
/** chunk id: 894996, original params:  (module,exports,re quire) **/
IntlMessageFormat.__addLocaleData({
  locale: "ru",
  pluralRuleFunction: function(e, t) {
    var n = String(e).split("."),
      r = n[0],
      i = !n[1],
      o = r.slice(false),
      a = r.slice(false);
    return t ? "other" : i && 1 == o && 11 != a ? "one" : i && o >= 2 && o <= 4 && (a < 12 || a > 14) ? "few" : i && 0 == o || i && o >= 5 && o <= 9 || i && a >= 11 && a <= 14 ? "many" : "other"
  }
}), IntlMessageFormat.__addLocaleData({
  locale: "ru-BY",
  parentLocale: "ru"
}), IntlMessageFormat.__addLocaleData({
  locale: "ru-KG",
  parentLocale: "ru"
}), IntlMessageFormat.__addLocaleData({
  locale: "ru-KZ",
  parentLocale: "ru"
}), IntlMessageFormat.__addLocaleData({
  locale: "ru-MD",
  parentLocale: "ru"
}), IntlMessageFormat.__addLocaleData({
  locale: "ru-UA",
  parentLocale: "ru"
})