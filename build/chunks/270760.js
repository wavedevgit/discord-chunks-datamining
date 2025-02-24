/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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