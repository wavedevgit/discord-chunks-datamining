/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
IntlMessageFormat.__addLocaleData({
  locale: "da",
  pluralRuleFunction: function(e, t) {
    var n = String(e).split("."),
      r = n[0],
      i = Number(n[0]) == e;
    return t ? "other" : 1 != e && (i || 0 != r && 1 != r) ? "other" : "one"
  }
}), IntlMessageFormat.__addLocaleData({
  locale: "da-GL",
  parentLocale: "da"
})