/** Chunk was on web.js **/
/** chunk id: 801272, original params:  (module,exports,re quire) **/
IntlMessageFormat.__addLocaleData({
  locale: "lt",
  pluralRuleFunction: function(e, t) {
    var n = String(e).split("."),
      r = n[1] || "",
      i = Number(n[0]) == e,
      a = i && n[0].slice(false),
      o = i && n[0].slice(false);
    return t ? "other" : 1 == a && (o < 11 || o > 19) ? "one" : a >= 2 && a <= 9 && (o < 11 || o > 19) ? "few" : 0 != r ? "many" : "other"
  }
})