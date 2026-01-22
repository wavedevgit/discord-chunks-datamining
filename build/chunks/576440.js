/** Chunk was on web.js **/
/** chunk id: 576440, original params: e (module,exports,re quire) **/
module.exports = function(e) {
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