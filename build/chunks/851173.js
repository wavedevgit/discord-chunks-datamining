/** Chunk was on web.js **/
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