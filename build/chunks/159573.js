/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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