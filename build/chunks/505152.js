/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
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