/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
var r = n(325008),
  i = n(161581),
  o = n(581031),
  a = n(474180),
  s = n(95948),
  l = n(251069),
  c = n(537443).f,
  u = n(838957),
  d = n(155763),
  f = n(714050),
  p = n(87046),
  _ = n(489412),
  h = n(504559),
  m = n(859209),
  g = n(936940),
  E = n(740362),
  v = n(644659).enforce,
  b = n(930990),
  y = n(641236),
  O = n(973326),
  S = n(440196),
  I = y("match"),
  T = i.RegExp,
  N = T.prototype,
  A = i.SyntaxError,
  C = o(N.exec),
  R = o("".charAt),
  P = o("".replace),
  w = o("".indexOf),
  D = o("".slice),
  x = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
  L = /a/g,
  M = /a/g,
  k = new T(L) !== L,
  j = _.MISSED_STICKY,
  U = _.UNSUPPORTED_Y,
  G = r && (!k || j || O || S || g(function() {
    return M[I] = !1, T(L) !== L || T(M) === M || "/a/i" !== String(T(L, "i"))
  })),
  B = function(e) {
    for (var t, n = e.length, r = 0, i = "", o = !1; r <= n; r++) {
      if ("\\" === (t = R(e, r))) {
        i += t + R(e, ++r);
        continue
      }
      o || "." !== t ? ("[" === t ? o = !0 : "]" === t && (o = !1), i += t) : i += "[\\s\\S]"
    }
    return i
  },
  Z = function(e) {
    for (var t, n = e.length, r = 0, i = "", o = [], a = {}, s = !1, l = !1, c = 0, u = ""; r <= n; r++) {
      if ("\\" === (t = R(e, r))) t += R(e, ++r);
      else if ("]" === t) s = !1;
      else if (!s) switch (!0) {
        case "[" === t:
          s = !0;
          break;
        case "(" === t:
          C(x, D(e, r + 1)) && (r += 2, l = !0), i += t, c++;
          continue;
        case ">" === t && l:
          if ("" === u || E(a, u)) throw new A("Invalid capture group name");
          a[u] = !0, o[o.length] = [u, c], l = !1, u = "";
          continue
      }
      l ? u += t : i += t
    }
    return [i, o]
  };
if (a("RegExp", G)) {
  for (var F = function(e, t) {
      var n, r, i, o, a, c, _ = u(N, this),
        h = d(e),
        m = void 0 === t,
        g = [],
        E = e;
      if (!_ && h && m && e.constructor === F) return e;
      if ((h || u(N, e)) && (e = e.source, m && (t = p(E))), e = void 0 === e ? "" : f(e), t = void 0 === t ? "" : f(t), E = e, O && "dotAll" in L && (r = !!t && w(t, "s") > -1) && (t = P(t, /s/g, "")), n = t, j && "sticky" in L && (i = !!t && w(t, "y") > -1) && U && (t = P(t, /y/g, "")), S && (e = (o = Z(e))[0], g = o[1]), a = s(T(e, t), _ ? this : N, F), (r || i || g.length) && (c = v(a), r && (c.dotAll = !0, c.raw = F(B(e), n)), i && (c.sticky = !0), g.length && (c.groups = g)), e !== E) try {
        l(a, "source", "" === E ? "(?:)" : E)
      } catch (e) {}
      return a
    }, V = c(T), H = 0; V.length > H;) h(F, T, V[H++]);
  N.constructor = F, F.prototype = N, m(i, "RegExp", F, {
    constructor: !0
  })
}
b("RegExp")