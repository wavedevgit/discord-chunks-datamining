/** Chunk was on web.js **/
"use strict";
var r = n(566885),
  i = n(926515),
  o = n(339718),
  a = n(627060),
  s = n(908355),
  l = n(933676),
  c = n(49693),
  u = n(182867),
  d = n(981971),
  f = n(11697),
  _ = Array;
e.exports = function(e) {
  var t, n, p, h, m, g, E = o(e),
    v = l(this),
    b = arguments.length,
    y = b > 1 ? arguments[1] : void 0,
    O = void 0 !== y;
  O && (y = r(y, b > 2 ? arguments[2] : void 0));
  var S = f(E),
    I = 0;
  if (S && !(this === _ && s(S)))
    for (m = (h = d(E, S)).next, n = v ? new this : []; !(p = i(m, h)).done; I++) g = O ? a(h, y, [p.value, I], !0) : p.value, u(n, I, g);
  else
    for (t = c(E), n = v ? new this(t) : _(t); t > I; I++) g = O ? y(E[I], I) : E[I], u(n, I, g);
  return n.length = I, n
}