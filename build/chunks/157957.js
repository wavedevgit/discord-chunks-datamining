/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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