/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
var r = n(990393),
  i = 1,
  o = Object.prototype.hasOwnProperty;

function a(e, t, n, a, s, l) {
  var c = n & i,
    u = r(e),
    d = u.length;
  if (d != r(t).length && !c) return !1;
  for (var f = d; f--;) {
    var p = u[f];
    if (!(c ? p in t : o.call(t, p))) return !1
  }
  var _ = l.get(e),
    h = l.get(t);
  if (_ && h) return _ == t && h == e;
  var m = !0;
  l.set(e, t), l.set(t, e);
  for (var g = c; ++f < d;) {
    var E = e[p = u[f]],
      v = t[p];
    if (a) var b = c ? a(v, E, p, t, e, l) : a(E, v, p, e, t, l);
    if (!(void 0 === b ? E === v || s(E, v, n, a, l) : b)) {
      m = !1;
      break
    }
    g || (g = "constructor" == p)
  }
  if (m && !g) {
    var y = e.constructor,
      O = t.constructor;
    y != O && "constructor" in e && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof O && O instanceof O) && (m = !1)
  }
  return l.delete(e), l.delete(t), m
}
e.exports = a