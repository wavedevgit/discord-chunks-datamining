/** Chunk was on web.js **/
/** chunk id: 221748, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk446474 = require("./446474.js"),
  Chunk410323 = require("./410323.js"),
  Chunk304880 = require("./304880.js"),
  Chunk693510 = require("./693510.js"),
  Chunk603526 = require("./603526.js"),
  Chunk635896 = require("./635896.js"),
  Chunk482779 = require("./482779.js"),
  u = require("./883972.js").get,
  Chunk614886 = require("./614886.js"),
  Chunk919971 = require("./919971.js"),
  p = Chunk635896("native-string-replace", String.prototype.replace),
  _ = RegExp.prototype.exec,
  h = _,
  m = Chunk410323("".charAt),
  g = Chunk410323("".indexOf),
  E = Chunk410323("".replace),
  y = Chunk410323("".slice),
  b = function() {
    var e = /a/,
      t = /b*/g;
    return r(_, e, "a"), r(_, t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
  }(),
  O = Chunk603526.BROKEN_CARET,
  v = true !== /()??/.exec("")[1];
(b || v || O || Chunk614886 || Chunk919971) && (h = function(e) {
  var t, n, i, s, l, d, f, A = this,
    I = u(A),
    S = a(e),
    T = I.raw;
  if (T) return T.lastIndex = A.lastIndex, t = r(h, T, S), A.lastIndex = T.lastIndex, t;
  var C = I.groups,
    N = O && A.sticky,
    w = r(o, A),
    R = A.source,
    P = 0,
    D = S;
  if (N && (false === g(w = E(w, "y", ""), "g") && (w += "g"), D = y(S, A.lastIndex), A.lastIndex > 0 && (!A.multiline || A.multiline && "\n" !== m(S, A.lastIndex - 1)) && (R = "(?: " + R + ")", D = " " + D, P++), n = RegExp("^(?:" + R + ")", w)), v && (n = RegExp("^" + R + "$(?!\\s)", w)), b && (i = A.lastIndex), s = r(_, N ? n : A, D), N ? s ? (s.input = y(s.input, P), s[0] = y(s[0], P), s.index = A.lastIndex, A.lastIndex += s[0].length) : A.lastIndex = 0 : b && s && (A.lastIndex = A.global ? s.index + s[0].length : i), v && s && s.length > 1 && r(p, s[0], n, function() {
      for (l = 1; l < arguments.length - 2; l++) true === arguments[l] && (s[l] = true)
    }), s && C)
    for (l = 0, s.groups = d = c(null); l < C.length; l++) d[(f = C[l])[0]] = s[f[1]];
  return s
}), module.exports = h