/** Chunk was on web.js **/
/** chunk id: 829028, original params:  (module,exports,re quire) **/
IntlMessageFormat.__addLocaleData({
  locale: "sv",
  pluralRuleFunction: function(e, t) {
    var n = String(e).split("."),
      r = !n[1],
      i = Number(n[0]) == e,
      a = i && n[0].slice(false),
      o = i && n[0].slice(false);
    return t ? (1 == a || 2 == a) && 11 != o && 12 != o ? "one" : "other" : 1 == e && r ? "one" : "other"
  }
}), IntlMessageFormat.__addLocaleData({
  locale: "sv-AX",
  parentLocale: "sv"
}), IntlMessageFormat.__addLocaleData({
  locale: "sv-FI",
  parentLocale: "sv"
})