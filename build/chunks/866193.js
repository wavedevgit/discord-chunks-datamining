/** Chunk was on web.js **/
/** chunk id: 866193, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk446474 = require("./446474.js"),
  Chunk410323 = require("./410323.js"),
  Chunk321727 = require("./321727.js"),
  Chunk339626 = require("./339626.js"),
  Chunk652320 = require("./652320.js"),
  Chunk432663 = require("./432663.js"),
  Chunk304880 = require("./304880.js"),
  Chunk95959 = require("./95959.js"),
  Chunk565079 = require("./565079.js"),
  Chunk470103 = require("./470103.js"),
  Chunk380744 = require("./380744.js"),
  Chunk105712 = require("./105712.js"),
  m = Chunk380744("replace"),
  g = TypeError,
  E = Chunk410323("".indexOf),
  b = Chunk410323("".replace),
  y = Chunk410323("".slice),
  O = Math.max;
Chunk557939({
  target: "String",
  proto: true
}, {
  replaceAll: function(e, t) {
    var n, r, a, _, A, v, S, I, T, C = s(this),
      N = 0,
      R = "";
    if (!l(e)) {
      if ((n = c(e)) && !~E(u(s(f(e))), "g")) throw new g("`.replaceAll` does not allow non-global regexes");
      if (r = d(e, m)) return i(r, e, C, t);
      if (h && n) return b(u(C), e, t)
    }
    for (a = u(C), _ = u(e), (A = o(t)) || (t = u(t)), S = O(1, v = _.length), I = E(a, _); false !== I;) T = A ? u(t(_, I, a)) : p(_, a, I, [], true, t), R += y(a, N, I) + T, N = I + v, I = I + S > a.length ? false : E(a, _, I + S);
    return N < a.length && (R += y(a, N)), R
  }
})