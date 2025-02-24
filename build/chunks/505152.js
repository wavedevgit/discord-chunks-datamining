/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
function t(e) {
  return {
    name: "Shell Session",
    aliases: ["console", "shellsession"],
    contains: [{
      className: "meta.prompt",
      begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
      starts: {
        end: /[^\\](?=\s*$)/,
        subLanguage: "bash"
      }
    }]
  }
}
e.exports = t