/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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