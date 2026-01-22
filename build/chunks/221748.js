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
  b = Chunk410323("".slice),
  y = function() {
    var e = /a/,
      t = /b*/g;
    return r(_, e, "a"), r(_, t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
  }(),
  O = Chunk603526.BROKEN_CARET,
  A = true !== /()??/.exec("")[1];
(y || A || O || Chunk614886 || Chunk919971) && (h = function(e) {
  var t, n, i, o, l, d, f, v = this,
    S = u(v),
    I = a(e),
    T = S.raw;
  if (T) return T.lastIndex = v.lastIndex, t = r(h, T, I), v.lastIndex = T.lastIndex, t;
  var C = S.groups,
    N = O && v.sticky,
    R = r(s, v),
    w = v.source,
    P = 0,
    D = I;
  if (N && (false === g(R = E(R, "y", ""), "g") && (R += "g"), D = b(I, v.lastIndex), v.lastIndex > 0 && (!v.multiline || v.multiline && "\n" !== m(I, v.lastIndex - 1)) && (w = "(?: " + w + ")", D = " " + D, P++), n = RegExp("^(?:" + w + ")", R)), A && (n = RegExp("^" + w + "$(?!\\s)", R)), y && (i = v.lastIndex), o = r(_, N ? n : v, D), N ? o ? (o.input = b(o.input, P), o[0] = b(o[0], P), o.index = v.lastIndex, v.lastIndex += o[0].length) : v.lastIndex = 0 : y && o && (v.lastIndex = v.global ? o.index + o[0].length : i), A && o && o.length > 1 && r(p, o[0], n, function() {
      for (l = 1; l < arguments.length - 2; l++) true === arguments[l] && (o[l] = true)
    }), o && C)
    for (l = 0, o.groups = d = c(null); l < C.length; l++) d[(f = C[l])[0]] = o[f[1]];
  return o
}), module.exports = h