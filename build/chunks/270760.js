/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
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