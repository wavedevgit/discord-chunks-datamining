/** Chunk was on web.js **/
/** chunk id: 16721, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk580983 = require("./580983.js"),
  Chunk46015 = require("./46015.js"),
  Chunk382698 = require("./382698.js"),
  Chunk503463 = require("./503463.js"),
  Chunk751954 = require("./751954.js"),
  Chunk571078 = require("./571078.js"),
  Chunk713411 = require("./713411.js"),
  u = require("./199838.js").get,
  Chunk923646 = require("./923646.js"),
  Chunk204954 = require("./204954.js"),
  p = Chunk571078("native-string-replace", String.prototype.replace),
  _ = RegExp.prototype.exec,
  m = _,
  h = Chunk46015("".charAt),
  g = Chunk46015("".indexOf),
  E = Chunk46015("".replace),
  b = Chunk46015("".slice),
  y = function() {
    var e = /a/,
      t = /b*/g;
    return r(_, e, "a"), r(_, t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
  }(),
  O = Chunk751954.BROKEN_CARET,
  v = true !== /()??/.exec("")[1];
(y || v || O || Chunk923646 || Chunk204954) && (m = function(e) {
  var t, n, i, s, l, d, f, S = this,
    I = u(S),
    T = a(e),
    C = I.raw;
  if (C) return C.lastIndex = S.lastIndex, t = r(m, C, T), S.lastIndex = C.lastIndex, t;
  var A = I.groups,
    N = O && S.sticky,
    P = r(o, S),
    R = S.source,
    w = 0,
    D = T;
  if (N && (false === g(P = E(P, "y", ""), "g") && (P += "g"), D = b(T, S.lastIndex), S.lastIndex > 0 && (!S.multiline || S.multiline && "\n" !== h(T, S.lastIndex - 1)) && (R = "(?: " + R + ")", D = " " + D, w++), n = RegExp("^(?:" + R + ")", P)), v && (n = RegExp("^" + R + "$(?!\\s)", P)), y && (i = S.lastIndex), s = r(_, N ? n : S, D), N ? s ? (s.input = b(s.input, w), s[0] = b(s[0], w), s.index = S.lastIndex, S.lastIndex += s[0].length) : S.lastIndex = 0 : y && s && (S.lastIndex = S.global ? s.index + s[0].length : i), v && s && s.length > 1 && r(p, s[0], n, function() {
      for (l = 1; l < arguments.length - 2; l++) true === arguments[l] && (s[l] = true)
    }), s && A)
    for (l = 0, s.groups = d = c(null); l < A.length; l++) d[(f = A[l])[0]] = s[f[1]];
  return s
}), module.exports = m