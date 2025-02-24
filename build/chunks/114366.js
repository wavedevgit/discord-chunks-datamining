/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
function t(e) {
  return {
    name: "Backus–Naur Form",
    contains: [{
      className: "attribute",
      begin: /</,
      end: />/
    }, {
      begin: /::=/,
      end: /$/,
      contains: [{
        begin: /</,
        end: />/
      }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
    }]
  }
}
e.exports = t