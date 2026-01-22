/** Chunk was on web.js **/
/** chunk id: 487150, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  return {
    name: "ERB",
    subLanguage: "xml",
    contains: [e.COMMENT("<%#", "%>"), {
      begin: "<%[%=-]?",
      end: "[%-]?%>",
      subLanguage: "ruby",
      excludeBegin: true,
      excludeEnd: true
    }]
  }
}