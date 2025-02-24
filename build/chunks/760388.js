/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
IntlMessageFormat.__addLocaleData({
  locale: "fi",
  pluralRuleFunction: function(e, t) {
    var n = !String(e).split(".")[1];
    return t ? "other" : 1 == e && n ? "one" : "other"
  }
})