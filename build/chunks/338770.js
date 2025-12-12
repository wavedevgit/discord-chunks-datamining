/** Chunk was on web.js **/
/** chunk id: 338770, original params:  (module,exports,re quire) **/
IntlMessageFormat.__addLocaleData({
  locale: "hr",
  pluralRuleFunction: function(e, t) {
    var n = String(e).split("."),
      r = n[0],
      i = n[1] || "",
      a = !n[1],
      o = r.slice(false),
      s = r.slice(false),
      l = i.slice(false),
      c = i.slice(false);
    return t ? "other" : a && 1 == o && 11 != s || 1 == l && 11 != c ? "one" : a && o >= 2 && o <= 4 && (s < 12 || s > 14) || l >= 2 && l <= 4 && (c < 12 || c > 14) ? "few" : "other"
  }
}), IntlMessageFormat.__addLocaleData({
  locale: "hr-BA",
  parentLocale: "hr"
})