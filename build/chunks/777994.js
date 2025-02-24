/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
var t = /\w*$/;

function n(e) {
  var n = new e.constructor(e.source, t.exec(e));
  return n.lastIndex = e.lastIndex, n
}
e.exports = n