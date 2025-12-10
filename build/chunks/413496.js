/** Chunk was on web.js **/
/** chunk id: 413496, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk507604 = require("./507604.js"),
  Chunk127849 = require("./127849.js"),
  Chunk46015 = require("./46015.js"),
  Chunk275717 = require("./275717.js"),
  Chunk176682 = require("./176682.js"),
  Chunk436207 = require("./436207.js"),
  Chunk713411 = require("./713411.js"),
  u = require("./264750.js").f,
  Chunk568033 = require("./568033.js"),
  Chunk933009 = require("./933009.js"),
  Chunk382698 = require("./382698.js"),
  Chunk817282 = require("./817282.js"),
  Chunk751954 = require("./751954.js"),
  Chunk316096 = require("./316096.js"),
  Chunk556585 = require("./556585.js"),
  Chunk621523 = require("./621523.js"),
  Chunk77025 = require("./77025.js"),
  y = require("./199838.js").enforce,
  Chunk108015 = require("./108015.js"),
  Chunk751736 = require("./751736.js"),
  Chunk923646 = require("./923646.js"),
  Chunk204954 = require("./204954.js"),
  T = Chunk751736("match"),
  C = Chunk127849.RegExp,
  A = C.prototype,
  N = Chunk127849.SyntaxError,
  P = Chunk46015(A.exec),
  R = Chunk46015("".charAt),
  D = Chunk46015("".replace),
  w = Chunk46015("".indexOf),
  x = Chunk46015("".slice),
  L = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
  j = /a/g,
  M = /a/g,
  k = new C(j) !== j,
  U = Chunk751954.MISSED_STICKY,
  G = Chunk751954.UNSUPPORTED_Y,
  Z = Chunk507604 && (!k || U || Chunk923646 || Chunk204954 || Chunk621523(function() {
    return M[T] = false, C(j) !== j || C(M) === M || "/a/i" !== String(C(j, "i"))
  })),
  B = function(e) {
    for (var t, n = e.length, r = 0, i = "", a = false; r <= n; r++) {
      if ("\\" === (t = R(e, r))) {
        i += t + R(e, ++r);
        continue
      }
      a || "." !== t ? ("[" === t ? a = true : "]" === t && (a = false), i += t) : i += "[\\s\\S]"
    }
    return i
  },
  F = function(e) {
    for (var t, n = e.length, r = 0, i = "", a = [], o = c(null), s = false, l = false, u = 0, d = ""; r <= n; r++) {
      if ("\\" === (t = R(e, r))) t += R(e, ++r);
      else if ("]" === t) s = false;
      else if (!s) switch (true) {
        case "[" === t:
          s = true;
          break;
        case "(" === t:
          if (i += t, "?:" === x(e, r + 1, r + 3)) continue;
          P(L, x(e, r + 1)) && (r += 2, l = true), u++;
          continue;
        case ">" === t && l:
          if ("" === d || b(o, d)) throw new N("Invalid capture group name");
          o[d] = true, a[a.length] = [d, u], l = false, d = "";
          continue
      }
      l ? d += t : i += t
    }
    return [i, a]
  };
if (Chunk275717("RegExp", Z)) {
  for (var V = function(e, t) {
      var n, r, i, a, o, c, u = d(A, this),
        m = f(e),
        h = true === t,
        g = [],
        E = e;
      if (!u && m && h && e.constructor === V) return e;
      if ((m || d(A, e)) && (e = e.source, h && (t = _(E))), e = true === e ? "" : p(e), t = true === t ? "" : p(t), E = e, S && "dotAll" in j && (r = !!t && w(t, "s") > false) && (t = D(t, /s/g, "")), n = t, U && "sticky" in j && (i = !!t && w(t, "y") > false) && G && (t = D(t, /y/g, "")), I && (e = (a = F(e))[0], g = a[1]), o = s(C(e, t), u ? this : A, V), (r || i || g.length) && (c = y(o), r && (c.dotAll = true, c.raw = V(B(e), n)), i && (c.sticky = true), g.length && (c.groups = g)), e !== E) try {
        l(o, "source", "" === E ? "(?:)" : E)
      } catch (e) {}
      return o
    }, H = u(C), Y = 0; H.length > Y;) Chunk316096(V, C, H[Y++]);
  A.constructor = V, V.prototype = A, Chunk556585(Chunk127849, "RegExp", V, {
    constructor: true
  })
}
Chunk108015("RegExp")