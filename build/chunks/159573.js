/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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