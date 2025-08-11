/** Chunk was on web.js **/
/** chunk id: 840986, original params: e (module,exports,re quire) **/
module.exports = function(e) {
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