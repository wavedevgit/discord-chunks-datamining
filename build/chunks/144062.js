/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
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