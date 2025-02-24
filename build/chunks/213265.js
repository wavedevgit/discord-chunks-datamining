/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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
  p = l("native-string-replace", String.prototype.replace),
  _ = RegExp.prototype.exec,
  h = _,
  m = i("".charAt),
  g = i("".indexOf),
  E = i("".replace),
  v = i("".slice),
  b = function() {
    var e = /a/,
      t = /b*/g;
    return r(_, e, "a"), r(_, t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
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
    w = 0,
    D = T;
  if (C && (-1 === g(R = E(R, "y", ""), "g") && (R += "g"), D = v(T, S.lastIndex), S.lastIndex > 0 && (!S.multiline || S.multiline && "\n" !== m(T, S.lastIndex - 1)) && (P = "(?: " + P + ")", D = " " + D, w++), n = RegExp("^(?:" + P + ")", R)), O && (n = RegExp("^" + P + "$(?!\\s)", R)), b && (i = S.lastIndex), s = r(_, C ? n : S, D), C ? s ? (s.input = v(s.input, w), s[0] = v(s[0], w), s.index = S.lastIndex, S.lastIndex += s[0].length) : S.lastIndex = 0 : b && s && (S.lastIndex = S.global ? s.index + s[0].length : i), O && s && s.length > 1 && r(p, s[0], n, function() {
      for (l = 1; l < arguments.length - 2; l++) void 0 === arguments[l] && (s[l] = void 0)
    }), s && A)
    for (l = 0, s.groups = d = c(null); l < A.length; l++) d[(f = A[l])[0]] = s[f[1]];
  return s
}), e.exports = h