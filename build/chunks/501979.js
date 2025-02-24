/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
var r = n(425561),
  i = n(393531),
  o = n(208529),
  a = 1,
  s = 2;

function l(e, t, n, l, c, u) {
  var d = n & a,
    f = e.length,
    p = t.length;
  if (f != p && !(d && p > f)) return !1;
  var _ = u.get(e),
    h = u.get(t);
  if (_ && h) return _ == t && h == e;
  var m = -1,
    g = !0,
    E = n & s ? new r : void 0;
  for (u.set(e, t), u.set(t, e); ++m < f;) {
    var v = e[m],
      b = t[m];
    if (l) var y = d ? l(b, v, m, t, e, u) : l(v, b, m, e, t, u);
    if (void 0 !== y) {
      if (y) continue;
      g = !1;
      break
    }
    if (E) {
      if (!i(t, function(e, t) {
          if (!o(E, t) && (v === e || c(v, e, n, l, u))) return E.push(t)
        })) {
        g = !1;
        break
      }
    } else if (!(v === b || c(v, b, n, l, u))) {
      g = !1;
      break
    }
  }
  return u.delete(e), u.delete(t), g
}
e.exports = l