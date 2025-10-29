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
  _ = Chunk571078("native-string-replace", String.prototype.replace),
  p = RegExp.prototype.exec,
  h = p,
  m = Chunk46015("".charAt),
  g = Chunk46015("".indexOf),
  E = Chunk46015("".replace),
  b = Chunk46015("".slice),
  y = function() {
    var e = /a/,
      t = /b*/g;
    return Chunk580983(p, module, "a"), Chunk580983(p, exports, "a"), 0 !== module.lastIndex || 0 !== exports.lastIndex
  }(),
  O = Chunk751954.BROKEN_CARET,
  v = true !== /()??/.exec("")[1];
(y || v || O || Chunk923646 || Chunk204954) && (h = function(e) {
  var t, n, i, s, l, d, f, I = this,
    T = u(I),
    S = a(e),
    A = T.raw;
  if (A) return A.lastIndex = I.lastIndex, t = r(h, A, S), I.lastIndex = A.lastIndex, t;
  var C = T.groups,
    N = O && I.sticky,
    R = r(o, I),
    P = I.source,
    w = 0,
    D = S;
  if (N && (false === g(R = E(R, "y", ""), "g") && (R += "g"), D = b(S, I.lastIndex), I.lastIndex > 0 && (!I.multiline || I.multiline && "\n" !== m(S, I.lastIndex - 1)) && (P = "(?: " + P + ")", D = " " + D, w++), n = RegExp("^(?:" + P + ")", R)), v && (n = RegExp("^" + P + "$(?!\\s)", R)), y && (i = I.lastIndex), s = r(p, N ? n : I, D), N ? s ? (s.input = b(s.input, w), s[0] = b(s[0], w), s.index = I.lastIndex, I.lastIndex += s[0].length) : I.lastIndex = 0 : y && s && (I.lastIndex = I.global ? s.index + s[0].length : i), v && s && s.length > 1 && r(_, s[0], n, function() {
      for (l = 1; l < arguments.length - 2; l++) true === arguments[l] && (s[l] = true)
    }), s && C)
    for (l = 0, s.groups = d = c(null); l < C.length; l++) d[(f = C[l])[0]] = s[f[1]];
  return s
}), module.exports = h