/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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