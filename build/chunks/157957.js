/** Chunk was on web.js **/
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