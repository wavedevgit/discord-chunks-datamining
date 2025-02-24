/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
var r = n(565580);

function i(e, t) {
  var n = -1,
    i = e.length,
    o = i - 1;
  for (t = void 0 === t ? i : t; ++n < t;) {
    var a = r(n, o),
      s = e[a];
    e[a] = e[n], e[n] = s
  }
  return e.length = t, e
}
e.exports = i