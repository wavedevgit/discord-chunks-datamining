/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
var t = Object.prototype.hasOwnProperty;

function n(e) {
  var n = e.length,
    r = new e.constructor(n);
  return n && "string" == typeof e[0] && t.call(e, "index") && (r.index = e.index, r.input = e.input), r
}
e.exports = n