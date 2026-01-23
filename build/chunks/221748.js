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
  var t, n, i, o, l, d, f, A = this,
    I = u(A),
    S = a(e),
    T = I.raw;
  if (T) return T.lastIndex = A.lastIndex, t = r(h, T, S), A.lastIndex = T.lastIndex, t;
  var C = I.groups,
    N = O && A.sticky,
    w = r(s, A),
    R = A.source,
    P = 0,
    D = S;
  if (N && (false === g(w = E(w, "y", ""), "g") && (w += "g"), D = y(S, A.lastIndex), A.lastIndex > 0 && (!A.multiline || A.multiline && "\n" !== m(S, A.lastIndex - 1)) && (R = "(?: " + R + ")", D = " " + D, P++), n = RegExp("^(?:" + R + ")", w)), v && (n = RegExp("^" + R + "$(?!\\s)", w)), b && (i = A.lastIndex), o = r(_, N ? n : A, D), N ? o ? (o.input = y(o.input, P), o[0] = y(o[0], P), o.index = A.lastIndex, A.lastIndex += o[0].length) : A.lastIndex = 0 : b && o && (A.lastIndex = A.global ? o.index + o[0].length : i), v && o && o.length > 1 && r(p, o[0], n, function() {
      for (l = 1; l < arguments.length - 2; l++) true === arguments[l] && (o[l] = true)
    }), o && C)
    for (l = 0, o.groups = d = c(null); l < C.length; l++) d[(f = C[l])[0]] = o[f[1]];
  return o
}), module.exports = h