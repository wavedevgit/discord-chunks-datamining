/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
var r = n(545576),
  i = n(740362),
  o = n(251069),
  a = n(838957),
  s = n(276321),
  l = n(381740),
  c = n(504559),
  u = n(95948),
  d = n(892725),
  f = n(668788),
  p = n(154154),
  _ = n(325008),
  h = n(992051);
e.exports = function(e, t, n, m) {
  var g = "stackTraceLimit",
    E = m ? 2 : 1,
    v = e.split("."),
    b = v[v.length - 1],
    y = r.apply(null, v);
  if (y) {
    var O = y.prototype;
    if (!h && i(O, "cause") && delete O.cause, !n) return y;
    var S = r("Error"),
      I = t(function(e, t) {
        var n = d(m ? t : e, void 0),
          r = m ? new y(e) : new y;
        return void 0 !== n && o(r, "message", n), p(r, I, r.stack, 2), this && a(O, this) && u(r, this, I), arguments.length > E && f(r, arguments[E]), r
      });
    if (I.prototype = O, "Error" !== b ? s ? s(I, S) : l(I, S, {
        name: !0
      }) : _ && g in y && (c(I, y, g), c(I, y, "prepareStackTrace")), l(I, y), !h) try {
      O.name !== b && o(O, "name", b), O.constructor = I
    } catch (e) {}
    return I
  }
}