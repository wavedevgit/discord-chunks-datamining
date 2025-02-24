/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
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