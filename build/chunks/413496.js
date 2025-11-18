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
  S = Chunk751736("match"),
  A = Chunk127849.RegExp,
  C = A.prototype,
  N = Chunk127849.SyntaxError,
  R = Chunk46015(C.exec),
  P = Chunk46015("".charAt),
  D = Chunk46015("".replace),
  w = Chunk46015("".indexOf),
  L = Chunk46015("".slice),
  x = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
  M = /a/g,
  j = /a/g,
  k = new A(M) !== M,
  U = Chunk751954.MISSED_STICKY,
  G = Chunk751954.UNSUPPORTED_Y,
  B = Chunk507604 && (!k || U || Chunk923646 || Chunk204954 || Chunk621523(function() {
    return j[S] = false, A(M) !== M || A(j) === j || "/a/i" !== String(A(M, "i"))
  })),
  Z = function(e) {
    for (var t, n = e.length, r = 0, i = "", a = false; r <= n; r++) {
      if ("\\" === (t = P(e, r))) {
        i += t + P(e, ++r);
        continue
      }
      a || "." !== t ? ("[" === t ? a = true : "]" === t && (a = false), i += t) : i += "[\\s\\S]"
    }
    return i
  },
  F = function(e) {
    for (var t, n = e.length, r = 0, i = "", a = [], o = c(null), s = false, l = false, u = 0, d = ""; r <= n; r++) {
      if ("\\" === (t = P(e, r))) t += P(e, ++r);
      else if ("]" === t) s = false;
      else if (!s) switch (true) {
        case "[" === t:
          s = true;
          break;
        case "(" === t:
          if (i += t, "?:" === L(e, r + 1, r + 3)) continue;
          R(x, L(e, r + 1)) && (r += 2, l = true), u++;
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
if (Chunk275717("RegExp", B)) {
  for (var V = function(e, t) {
      var n, r, i, a, o, c, u = d(C, this),
        h = f(e),
        m = true === t,
        g = [],
        E = e;
      if (!u && h && m && e.constructor === V) return e;
      if ((h || d(C, e)) && (e = e.source, m && (t = p(E))), e = true === e ? "" : _(e), t = true === t ? "" : _(t), E = e, I && "dotAll" in M && (r = !!t && w(t, "s") > false) && (t = D(t, /s/g, "")), n = t, U && "sticky" in M && (i = !!t && w(t, "y") > false) && G && (t = D(t, /y/g, "")), T && (e = (a = F(e))[0], g = a[1]), o = s(A(e, t), u ? this : C, V), (r || i || g.length) && (c = y(o), r && (c.dotAll = true, c.raw = V(Z(e), n)), i && (c.sticky = true), g.length && (c.groups = g)), e !== E) try {
        l(o, "source", "" === E ? "(?:)" : E)
      } catch (e) {}
      return o
    }, H = u(A), Y = 0; H.length > Y;) Chunk316096(V, A, H[Y++]);
  C.constructor = V, V.prototype = C, Chunk556585(Chunk127849, "RegExp", V, {
    constructor: true
  })
}
Chunk108015("RegExp")