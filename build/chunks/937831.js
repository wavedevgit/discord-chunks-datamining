/** Chunk was on web.js **/
function t(e) {
  return {
    aliases: ["pycon"],
    contains: [{
      className: "meta.prompt",
      starts: {
        end: / |$/,
        starts: {
          end: "$",
          subLanguage: "python"
        }
      },
      variants: [{
        begin: /^>>>(?=[ ]|$)/
      }, {
        begin: /^\.\.\.(?=[ ]|$)/
      }]
    }]
  }
}
e.exports = t