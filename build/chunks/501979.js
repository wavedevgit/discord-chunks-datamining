/** Chunk was on web.js **/
var r = n(425561),
  i = n(393531),
  o = n(208529),
  a = 1,
  s = 2;

function l(e, t, n, l, c, u) {
  var d = n & a,
    f = e.length,
    _ = t.length;
  if (f != _ && !(d && _ > f)) return !1;
  var p = u.get(e),
    h = u.get(t);
  if (p && h) return p == t && h == e;
  var g = -1,
    m = !0,
    E = n & s ? new r : void 0;
  for (u.set(e, t), u.set(t, e); ++g < f;) {
    var v = e[g],
      b = t[g];
    if (l) var y = d ? l(b, v, g, t, e, u) : l(v, b, g, e, t, u);
    if (void 0 !== y) {
      if (y) continue;
      m = !1;
      break
    }
    if (E) {
      if (!i(t, function(e, t) {
          if (!o(E, t) && (v === e || c(v, e, n, l, u))) return E.push(t)
        })) {
        m = !1;
        break
      }
    } else if (!(v === b || c(v, b, n, l, u))) {
      m = !1;
      break
    }
  }
  return u.delete(e), u.delete(t), m
}
e.exports = l