/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
var t = /\w*$/;

function n(e) {
  var n = new e.constructor(e.source, t.exec(e));
  return n.lastIndex = e.lastIndex, n
}
e.exports = n