/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
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