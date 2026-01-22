/** Chunk was on web.js **/
/** chunk id: 525919, original params:  (module,exports,re quire) **/
IntlMessageFormat.__addLocaleData({
  locale: "hi",
  pluralRuleFunction: function(e, t) {
    return t ? 1 == e ? "one" : 2 == e || 3 == e ? "two" : 4 == e ? "few" : 6 == e ? "many" : "other" : e >= 0 && e <= 1 ? "one" : "other"
  }
})