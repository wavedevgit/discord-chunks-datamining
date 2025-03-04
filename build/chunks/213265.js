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
  g = i("".charAt),
  m = i("".indexOf),
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
  var t, n, i, s, l, d, f, S = this,
    I = u(S),
    T = o(e),
    N = I.raw;
  if (N) return N.lastIndex = S.lastIndex, t = r(h, N, T), S.lastIndex = N.lastIndex, t;
  var A = I.groups,
    C = y && S.sticky,
    R = r(a, S),
    P = S.source,
    D = 0,
    w = T;
  if (C && (-1 === m(R = E(R, "y", ""), "g") && (R += "g"), w = v(T, S.lastIndex), S.lastIndex > 0 && (!S.multiline || S.multiline && "\n" !== g(T, S.lastIndex - 1)) && (P = "(?: " + P + ")", w = " " + w, D++), n = RegExp("^(?:" + P + ")", R)), O && (n = RegExp("^" + P + "$(?!\\s)", R)), b && (i = S.lastIndex), s = r(p, C ? n : S, w), C ? s ? (s.input = v(s.input, D), s[0] = v(s[0], D), s.index = S.lastIndex, S.lastIndex += s[0].length) : S.lastIndex = 0 : b && s && (S.lastIndex = S.global ? s.index + s[0].length : i), O && s && s.length > 1 && r(_, s[0], n, function() {
      for (l = 1; l < arguments.length - 2; l++) void 0 === arguments[l] && (s[l] = void 0)
    }), s && A)
    for (l = 0, s.groups = d = c(null); l < A.length; l++) d[(f = A[l])[0]] = s[f[1]];
  return s
}), e.exports = h