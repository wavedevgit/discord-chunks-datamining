/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
function t(e) {
  return {
    name: "Awk",
    keywords: {
      keyword: "BEGIN END if else while do for in break continue delete next nextfile function func exit|10"
    },
    contains: [{
      className: "variable",
      variants: [{
        begin: /\$[\w\d#@][\w\d_]*/
      }, {
        begin: /\$\{(.*?)\}/
      }]
    }, {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE],
      variants: [{
        begin: /(u|b)?r?'''/,
        end: /'''/,
        relevance: 10
      }, {
        begin: /(u|b)?r?"""/,
        end: /"""/,
        relevance: 10
      }, {
        begin: /(u|r|ur)'/,
        end: /'/,
        relevance: 10
      }, {
        begin: /(u|r|ur)"/,
        end: /"/,
        relevance: 10
      }, {
        begin: /(b|br)'/,
        end: /'/
      }, {
        begin: /(b|br)"/,
        end: /"/
      }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
    }, e.REGEXP_MODE, e.HASH_COMMENT_MODE, e.NUMBER_MODE]
  }
}
e.exports = t