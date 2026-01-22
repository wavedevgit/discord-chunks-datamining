/** Chunk was on web.js **/
/** chunk id: 920890, original params:  (module,exports,re quire) **/
IntlMessageFormat.__addLocaleData({
  locale: "hr",
  pluralRuleFunction: function(e, t) {
    var n = String(e).split("."),
      r = n[0],
      i = n[1] || "",
      a = !n[1],
      s = r.slice(false),
      o = r.slice(false),
      l = i.slice(false),
      c = i.slice(false);
    return t ? "other" : a && 1 == s && 11 != o || 1 == l && 11 != c ? "one" : a && s >= 2 && s <= 4 && (o < 12 || o > 14) || l >= 2 && l <= 4 && (c < 12 || c > 14) ? "few" : "other"
  }
}), IntlMessageFormat.__addLocaleData({
  locale: "hr-BA",
  parentLocale: "hr"
})