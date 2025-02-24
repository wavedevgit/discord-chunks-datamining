/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
function t(e) {
  return {
    name: "ERB",
    subLanguage: "xml",
    contains: [e.COMMENT("<%#", "%>"), {
      begin: "<%[%=-]?",
      end: "[%-]?%>",
      subLanguage: "ruby",
      excludeBegin: !0,
      excludeEnd: !0
    }]
  }
}
e.exports = t