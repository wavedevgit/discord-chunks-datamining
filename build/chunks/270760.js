/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
function t(e) {
  return {
    name: "VBScript in HTML",
    subLanguage: "xml",
    contains: [{
      begin: "<%",
      end: "%>",
      subLanguage: "vbscript"
    }]
  }
}
e.exports = t