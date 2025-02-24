/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
IntlMessageFormat.__addLocaleData({
  locale: "fi",
  pluralRuleFunction: function(e, t) {
    var n = !String(e).split(".")[1];
    return t ? "other" : 1 == e && n ? "one" : "other"
  }
})