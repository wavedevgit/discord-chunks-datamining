/** Chunk was on web.js **/
/** chunk id: 591487, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk257943 = require("./257943.js"),
  Chunk860511 = require("./860511.js"),
  Chunk410323 = require("./410323.js"),
  Chunk521351 = require("./521351.js"),
  Chunk486724 = require("./486724.js"),
  Chunk706938 = require("./706938.js"),
  Chunk482779 = require("./482779.js"),
  u = require("./855835.js").f,
  Chunk524152 = require("./524152.js"),
  Chunk432663 = require("./432663.js"),
  Chunk304880 = require("./304880.js"),
  Chunk565079 = require("./565079.js"),
  Chunk603526 = require("./603526.js"),
  Chunk878765 = require("./878765.js"),
  Chunk693655 = require("./693655.js"),
  Chunk503628 = require("./503628.js"),
  Chunk210140 = require("./210140.js"),
  b = require("./883972.js").enforce,
  Chunk274574 = require("./274574.js"),
  Chunk380744 = require("./380744.js"),
  Chunk614886 = require("./614886.js"),
  Chunk919971 = require("./919971.js"),
  S = Chunk380744("match"),
  T = Chunk860511.RegExp,
  C = T.prototype,
  N = Chunk860511.SyntaxError,
  R = Chunk410323(C.exec),
  w = Chunk410323("".charAt),
  P = Chunk410323("".replace),
  D = Chunk410323("".indexOf),
  x = Chunk410323("".slice),
  L = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
  j = /a/g,
  M = /a/g,
  k = new T(j) !== j,
  U = Chunk603526.MISSED_STICKY,
  G = Chunk603526.UNSUPPORTED_Y,
  V = Chunk257943 && (!k || U || Chunk614886 || Chunk919971 || Chunk503628(function() {
    return M[S] = false, T(j) !== j || T(M) === M || "/a/i" !== String(T(j, "i"))
  })),
  F = function(e) {
    for (var t, n = e.length, r = 0, i = "", a = false; r <= n; r++) {
      if ("\\" === (t = w(e, r))) {
        i += t + w(e, ++r);
        continue
      }
      a || "." !== t ? ("[" === t ? a = true : "]" === t && (a = false), i += t) : i += "[\\s\\S]"
    }
    return i
  },
  B = function(e) {
    for (var t, n = e.length, r = 0, i = "", a = [], s = c(null), o = false, l = false, u = 0, d = ""; r <= n; r++) {
      if ("\\" === (t = w(e, r))) t += w(e, ++r);
      else if ("]" === t) o = false;
      else if (!o) switch (true) {
        case "[" === t:
          o = true;
          break;
        case "(" === t:
          if (i += t, "?:" === x(e, r + 1, r + 3)) continue;
          R(L, x(e, r + 1)) && (r += 2, l = true), u++;
          continue;
        case ">" === t && l:
          if ("" === d || y(s, d)) throw new N("Invalid capture group name");
          s[d] = true, a[a.length] = [d, u], l = false, d = "";
          continue
      }
      l ? d += t : i += t
    }
    return [i, a]
  };
if (Chunk521351("RegExp", V)) {
  for (var H = function(e, t) {
      var n, r, i, a, s, c, u = d(C, this),
        h = f(e),
        m = true === t,
        g = [],
        E = e;
      if (!u && h && m && e.constructor === H) return e;
      if ((h || d(C, e)) && (e = e.source, m && (t = _(E))), e = true === e ? "" : p(e), t = true === t ? "" : p(t), E = e, A && "dotAll" in j && (r = !!t && D(t, "s") > false) && (t = P(t, /s/g, "")), n = t, U && "sticky" in j && (i = !!t && D(t, "y") > false) && G && (t = P(t, /y/g, "")), I && (e = (a = B(e))[0], g = a[1]), s = o(T(e, t), u ? this : C, H), (r || i || g.length) && (c = b(s), r && (c.dotAll = true, c.raw = H(F(e), n)), i && (c.sticky = true), g.length && (c.groups = g)), e !== E) try {
        l(s, "source", "" === E ? "(?:)" : E)
      } catch (e) {}
      return s
    }, Y = u(T), W = 0; Y.length > W;) Chunk878765(H, T, Y[W++]);
  C.constructor = H, H.prototype = C, Chunk693655(Chunk860511, "RegExp", H, {
    constructor: true
  })
}
Chunk274574("RegExp")