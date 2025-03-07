/** Chunk was on web.js **/
"use strict";
var r = n(926515),
  i = n(581031),
  o = n(714050),
  a = n(572609),
  s = n(489412),
  l = n(972277),
  c = n(803938),
  u = n(644659).get,
  d = n(973326),
  f = n(440196),
  _ = l("native-string-replace", String.prototype.replace),
  p = RegExp.prototype.exec,
  h = p,
  m = i("".charAt),
  g = i("".indexOf),
  E = i("".replace),
  v = i("".slice),
  b = function() {
    var e = /a/,
      t = /b*/g;
    return r(p, e, "a"), r(p, t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
  }(),
  y = s.BROKEN_CARET,
  O = void 0 !== /()??/.exec("")[1];
(b || O || y || d || f) && (h = function(e) {
  var t, n, i, s, l, d, f, I = this,
    S = u(I),
    T = o(e),
    N = S.raw;
  if (N) return N.lastIndex = I.lastIndex, t = r(h, N, T), I.lastIndex = N.lastIndex, t;
  var A = S.groups,
    C = y && I.sticky,
    R = r(a, I),
    P = I.source,
    w = 0,
    D = T;
  if (C && (-1 === g(R = E(R, "y", ""), "g") && (R += "g"), D = v(T, I.lastIndex), I.lastIndex > 0 && (!I.multiline || I.multiline && "\n" !== m(T, I.lastIndex - 1)) && (P = "(?: " + P + ")", D = " " + D, w++), n = RegExp("^(?:" + P + ")", R)), O && (n = RegExp("^" + P + "$(?!\\s)", R)), b && (i = I.lastIndex), s = r(p, C ? n : I, D), C ? s ? (s.input = v(s.input, w), s[0] = v(s[0], w), s.index = I.lastIndex, I.lastIndex += s[0].length) : I.lastIndex = 0 : b && s && (I.lastIndex = I.global ? s.index + s[0].length : i), O && s && s.length > 1 && r(_, s[0], n, function() {
      for (l = 1; l < arguments.length - 2; l++) void 0 === arguments[l] && (s[l] = void 0)
    }), s && A)
    for (l = 0, s.groups = d = c(null); l < A.length; l++) d[(f = A[l])[0]] = s[f[1]];
  return s
}), e.exports = h