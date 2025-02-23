/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
IntlMessageFormat.__addLocaleData({
  locale: "fi",
  pluralRuleFunction: function(e, t) {
    var n = !String(e).split(".")[1];
    return t ? "other" : 1 == e && n ? "one" : "other"
  }
})