/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
function t(e) {
  return {
    name: "Gherkin",
    aliases: ["feature"],
    keywords: "Feature Background Ability Business Need Scenario Scenarios Scenario Outline Scenario Template Examples Given And Then But When",
    contains: [{
      className: "symbol",
      begin: "\\*",
      relevance: 0
    }, {
      className: "meta",
      begin: "@[^@\\s]+"
    }, {
      begin: "\\|",
      end: "\\|\\w*$",
      contains: [{
        className: "string",
        begin: "[^|]+"
      }]
    }, {
      className: "variable",
      begin: "<",
      end: ">"
    }, e.HASH_COMMENT_MODE, {
      className: "string",
      begin: '"""',
      end: '"""'
    }, e.QUOTE_STRING_MODE]
  }
}
e.exports = t