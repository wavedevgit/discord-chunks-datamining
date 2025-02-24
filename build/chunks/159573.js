/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
function t(e) {
  return {
    name: "LDIF",
    contains: [{
      className: "attribute",
      match: "^dn(?=:)",
      relevance: 10
    }, {
      className: "attribute",
      match: "^\\w+(?=:)"
    }, {
      className: "literal",
      match: "^-"
    }, e.HASH_COMMENT_MODE]
  }
}
e.exports = t