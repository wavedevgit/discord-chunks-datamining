/** Chunk was on web.js **/
/** chunk id: 804061, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk580983 = require("./580983.js"),
  Chunk46015 = require("./46015.js"),
  Chunk497464 = require("./497464.js"),
  Chunk880181 = require("./880181.js"),
  Chunk655152 = require("./655152.js"),
  Chunk933009 = require("./933009.js"),
  Chunk382698 = require("./382698.js"),
  Chunk3831 = require("./3831.js"),
  Chunk817282 = require("./817282.js"),
  Chunk814559 = require("./814559.js"),
  Chunk751736 = require("./751736.js"),
  Chunk511696 = require("./511696.js"),
  m = Chunk751736("replace"),
  g = TypeError,
  E = Chunk46015("".indexOf),
  b = Chunk46015("".replace),
  y = Chunk46015("".slice),
  O = Math.max;
Chunk98405({
  target: "String",
  proto: true
}, {
  replaceAll: function(e, t) {
    var n, r, a, p, v, I, T, S, A, C = o(this),
      N = 0,
      R = "";
    if (!l(e)) {
      if ((n = c(e)) && !~E(u(o(f(e))), "g")) throw new g("`.replaceAll` does not allow non-global regexes");
      if (r = d(e, m)) return i(r, e, C, t);
      if (h && n) return b(u(C), e, t)
    }
    for (a = u(C), p = u(e), (v = s(t)) || (t = u(t)), T = O(1, I = p.length), S = E(a, p); false !== S;) A = v ? u(t(p, S, a)) : _(p, a, S, [], true, t), R += y(a, N, S) + A, N = S + I, S = S + T > a.length ? false : E(a, p, S + T);
    return N < a.length && (R += y(a, N)), R
  }
})