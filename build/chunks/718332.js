/** Chunk was on web.js **/
var r = n(102074),
  i = n(153027),
  o = n(803607),
  a = 1,
  s = 2;

function l(e, t, n, l, c, u) {
  var d = n & a,
    f = e.length,
    _ = t.length;
  if (f != _ && !(d && _ > f)) return !1;
  var p = u.get(e);
  if (p && u.get(t)) return p == t;
  var h = -1,
    g = !0,
    m = n & s ? new r : void 0;
  for (u.set(e, t), u.set(t, e); ++h < f;) {
    var E = e[h],
      v = t[h];
    if (l) var b = d ? l(v, E, h, t, e, u) : l(E, v, h, e, t, u);
    if (void 0 !== b) {
      if (b) continue;
      g = !1;
      break
    }
    if (m) {
      if (!i(t, function(e, t) {
          if (!o(m, t) && (E === e || c(E, e, n, l, u))) return m.push(t)
        })) {
        g = !1;
        break
      }
    } else if (!(E === v || c(E, v, n, l, u))) {
      g = !1;
      break
    }
  }
  return u.delete(e), u.delete(t), g
}
e.exports = l