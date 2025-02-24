/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
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