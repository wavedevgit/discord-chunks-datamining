/** Chunk was on web.js **/
/** chunk id: 106888, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  return {
    name: "Test Anything Protocol",
    case_insensitive: true,
    contains: [e.HASH_COMMENT_MODE, {
      className: "meta",
      variants: [{
        begin: "^TAP version (\\d+)$"
      }, {
        begin: "^1\\.\\.(\\d+)$"
      }]
    }, {
      begin: /---$/,
      end: "\\.\\.\\.$",
      subLanguage: "yaml",
      relevance: 0
    }, {
      className: "number",
      begin: " (\\d+) "
    }, {
      className: "symbol",
      variants: [{
        begin: "^ok"
      }, {
        begin: "^not ok"
      }]
    }]
  }
}