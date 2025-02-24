/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
var t = /\w*$/;

function n(e) {
  var n = new e.constructor(e.source, t.exec(e));
  return n.lastIndex = e.lastIndex, n
}
e.exports = n