/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
var r = n(292403),
  i = n(539339),
  o = Object.prototype.hasOwnProperty;

function a(e) {
  if (!r(e)) return i(e);
  var t = [];
  for (var n in Object(e)) o.call(e, n) && "constructor" != n && t.push(n);
  return t
}
e.exports = a