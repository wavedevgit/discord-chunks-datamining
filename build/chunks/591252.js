/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
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