/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
IntlMessageFormat.__addLocaleData({
  locale: "fi",
  pluralRuleFunction: function(e, t) {
    var n = !String(e).split(".")[1];
    return t ? "other" : 1 == e && n ? "one" : "other"
  }
})