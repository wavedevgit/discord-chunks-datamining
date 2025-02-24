/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
function t(e) {
  return {
    name: "Node REPL",
    contains: [{
      className: "meta.prompt",
      starts: {
        end: / |$/,
        starts: {
          end: "$",
          subLanguage: "javascript"
        }
      },
      variants: [{
        begin: /^>(?=[ ]|$)/
      }, {
        begin: /^\.\.\.(?=[ ]|$)/
      }]
    }]
  }
}
e.exports = t