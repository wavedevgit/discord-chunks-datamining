/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
var r = n(620014),
  i = n(501979),
  o = n(575473),
  a = n(907287),
  s = n(65064),
  l = n(402428),
  c = n(207757),
  u = n(556868),
  d = 1,
  f = "[object Arguments]",
  p = "[object Array]",
  _ = "[object Object]",
  h = Object.prototype.hasOwnProperty;

function m(e, t, n, m, g, E) {
  var v = l(e),
    b = l(t),
    y = v ? p : s(e),
    O = b ? p : s(t);
  y = y == f ? _ : y, O = O == f ? _ : O;
  var S = y == _,
    I = O == _,
    T = y == O;
  if (T && c(e)) {
    if (!c(t)) return !1;
    v = !0, S = !1
  }
  if (T && !S) return E || (E = new r), v || u(e) ? i(e, t, n, m, g, E) : o(e, t, y, n, m, g, E);
  if (!(n & d)) {
    var N = S && h.call(e, "__wrapped__"),
      A = I && h.call(t, "__wrapped__");
    if (N || A) {
      var C = N ? e.value() : e,
        R = A ? t.value() : t;
      return E || (E = new r), g(C, R, n, m, E)
    }
  }
  return !!T && (E || (E = new r), a(e, t, n, m, g, E))
}
e.exports = m