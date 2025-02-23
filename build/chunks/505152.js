/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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