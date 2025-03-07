/** Chunk was on web.js **/
var r = n(990393),
  i = 1,
  o = Object.prototype.hasOwnProperty;

function a(e, t, n, a, s, l) {
  var c = n & i,
    u = r(e),
    d = u.length;
  if (d != r(t).length && !c) return !1;
  for (var f = d; f--;) {
    var _ = u[f];
    if (!(c ? _ in t : o.call(t, _))) return !1
  }
  var p = l.get(e),
    h = l.get(t);
  if (p && h) return p == t && h == e;
  var m = !0;
  l.set(e, t), l.set(t, e);
  for (var g = c; ++f < d;) {
    var E = e[_ = u[f]],
      v = t[_];
    if (a) var b = c ? a(v, E, _, t, e, l) : a(E, v, _, e, t, l);
    if (!(void 0 === b ? E === v || s(E, v, n, a, l) : b)) {
      m = !1;
      break
    }
    g || (g = "constructor" == _)
  }
  if (m && !g) {
    var y = e.constructor,
      O = t.constructor;
    y != O && "constructor" in e && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof O && O instanceof O) && (m = !1)
  }
  return l.delete(e), l.delete(t), m
}
e.exports = a