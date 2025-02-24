/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
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