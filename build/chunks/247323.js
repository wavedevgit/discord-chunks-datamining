/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
var t = Object.prototype.hasOwnProperty;

function n(e) {
  var n = e.length,
    r = new e.constructor(n);
  return n && "string" == typeof e[0] && t.call(e, "index") && (r.index = e.index, r.input = e.input), r
}
e.exports = n