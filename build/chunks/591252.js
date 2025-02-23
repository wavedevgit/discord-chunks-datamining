/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
function t(e) {
  return {
    name: "Clojure REPL",
    contains: [{
      className: "meta.prompt",
      begin: /^([\w.-]+|\s*#_)?=>/,
      starts: {
        end: /$/,
        subLanguage: "clojure"
      }
    }]
  }
}
e.exports = t