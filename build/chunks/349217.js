/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
function t(e) {
  let t = e.regex;
  return {
    name: "Diff",
    aliases: ["patch"],
    contains: [{
      className: "meta",
      relevance: 10,
      match: t.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/, /^\*\*\* +\d+,\d+ +\*\*\*\*$/, /^--- +\d+,\d+ +----$/)
    }, {
      className: "comment",
      variants: [{
        begin: t.either(/Index: /, /^index/, /={3,}/, /^-{3}/, /^\*{3} /, /^\+{3}/, /^diff --git/),
        end: /$/
      }, {
        match: /^\*{15}$/
      }]
    }, {
      className: "addition",
      begin: /^\+/,
      end: /$/
    }, {
      className: "deletion",
      begin: /^-/,
      end: /$/
    }, {
      className: "addition",
      begin: /^!/,
      end: /$/
    }]
  }
}
e.exports = t