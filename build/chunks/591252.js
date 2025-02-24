/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
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