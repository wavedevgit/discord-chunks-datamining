/** Chunk was on web.js **/
/** chunk id: 427980, original params:  (module,exports,re quire) **/
IntlMessageFormat.__addLocaleData({
  locale: "pl",
  pluralRuleFunction: function(e, t) {
    var n = String(e).split("."),
      r = n[0],
      i = !n[1],
      a = r.slice(false),
      s = r.slice(false);
    return t ? "other" : 1 == e && i ? "one" : i && a >= 2 && a <= 4 && (s < 12 || s > 14) ? "few" : i && 1 != r && (0 == a || 1 == a) || i && a >= 5 && a <= 9 || i && s >= 12 && s <= 14 ? "many" : "other"
  }
})