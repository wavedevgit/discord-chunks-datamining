/** Chunk was on web.js **/
/** chunk id: 217601, original params: e (module,exports,re quire) **/
module.exports = function(e) {
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