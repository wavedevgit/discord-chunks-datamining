/** Chunk was on web.js **/
"use strict";
var r = n(154028),
  i = n(77025),
  a = n(436207),
  o = n(568033),
  s = n(769827),
  l = n(190289),
  c = n(316096),
  u = n(176682),
  d = n(759319),
  f = n(179351),
  _ = n(903225),
  p = n(507604),
  h = n(511696);
e.exports = function(e, t, n, m) {
  var g = "stackTraceLimit",
    E = m ? 2 : 1,
    b = e.split("."),
    y = b[b.length - 1],
    v = r.apply(null, b);
  if (v) {
    var O = v.prototype;
    if (!h && i(O, "cause") && delete O.cause, !n) return v;
    var I = r("Error"),
      S = t(function(e, t) {
        var n = d(m ? t : e, void 0),
          r = m ? new v(e) : new v;
        return void 0 !== n && a(r, "message", n), _(r, S, r.stack, 2), this && o(O, this) && u(r, this, S), arguments.length > E && f(r, arguments[E]), r
      });
    if (S.prototype = O, "Error" !== y ? s ? s(S, I) : l(S, I, {
        name: !0
      }) : p && g in v && (c(S, v, g), c(S, v, "prepareStackTrace")), l(S, v), !h) try {
      O.name !== y && a(O, "name", y), O.constructor = S
    } catch (e) {}
    return S
  }
}