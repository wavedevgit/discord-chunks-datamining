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
  h = Chunk751736("replace"),
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
    var n, r, o, _, v, S, I, T, C, A = a(this),
      N = 0,
      P = "";
    if (!l(e)) {
      if ((n = c(e)) && !~E(u(a(f(e))), "g")) throw new g("`.replaceAll` does not allow non-global regexes");
      if (r = d(e, h)) return i(r, e, A, t);
      if (m && n) return b(u(A), e, t)
    }
    for (o = u(A), _ = u(e), (v = s(t)) || (t = u(t)), I = O(1, S = _.length), T = E(o, _); false !== T;) C = v ? u(t(_, T, o)) : p(_, o, T, [], true, t), P += y(o, N, T) + C, N = T + S, T = T + I > o.length ? false : E(o, _, T + I);
    return N < o.length && (P += y(o, N)), P
  }
})