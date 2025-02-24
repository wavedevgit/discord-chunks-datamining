/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
function t(e) {
  return {
    name: "Tagger Script",
    contains: [{
      className: "comment",
      begin: /\$noop\(/,
      end: /\)/,
      contains: [{
        begin: /\\[()]/
      }, {
        begin: /\(/,
        end: /\)/,
        contains: [{
          begin: /\\[()]/
        }, "self"]
      }],
      relevance: 10
    }, {
      className: "keyword",
      begin: /\$[_a-zA-Z0-9]+(?=\()/
    }, {
      className: "variable",
      begin: /%[_a-zA-Z0-9:]+%/
    }, {
      className: "symbol",
      begin: /\\[\\nt$%,()]/
    }, {
      className: "symbol",
      begin: /\\u[a-fA-F0-9]{4}/
    }]
  }
}
e.exports = t