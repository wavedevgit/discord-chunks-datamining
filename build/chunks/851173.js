/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
function t(e) {
  return {
    name: "Julia REPL",
    contains: [{
      className: "meta.prompt",
      begin: /^julia>/,
      relevance: 10,
      starts: {
        end: /^(?![ ]{6})/,
        subLanguage: "julia"
      }
    }],
    aliases: ["jldoctest"]
  }
}
e.exports = t