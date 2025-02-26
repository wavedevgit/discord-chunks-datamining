/** Chunk was on web.js **/
var r = n(821164),
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
  var p = l.get(e);
  if (p && l.get(t)) return p == t;
  var h = !0;
  l.set(e, t), l.set(t, e);
  for (var g = c; ++f < d;) {
    var m = e[_ = u[f]],
      E = t[_];
    if (a) var v = c ? a(E, m, _, t, e, l) : a(m, E, _, e, t, l);
    if (!(void 0 === v ? m === E || s(m, E, n, a, l) : v)) {
      h = !1;
      break
    }
    g || (g = "constructor" == _)
  }
  if (h && !g) {
    var b = e.constructor,
      y = t.constructor;
    b != y && "constructor" in e && "constructor" in t && !("function" == typeof b && b instanceof b && "function" == typeof y && y instanceof y) && (h = !1)
  }
  return l.delete(e), l.delete(t), h
}
e.exports = a