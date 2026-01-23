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
  y = Chunk410323("".replace),
  b = Chunk410323("".slice),
  O = Math.max;
Chunk557939({
  target: "String",
  proto: true
}, {
  replaceAll: function(e, t) {
    var n, r, a, _, v, A, I, S, T, C = s(this),
      N = 0,
      w = "";
    if (!l(e)) {
      if ((n = c(e)) && !~E(u(s(f(e))), "g")) throw new g("`.replaceAll` does not allow non-global regexes");
      if (r = d(e, m)) return i(r, e, C, t);
      if (h && n) return y(u(C), e, t)
    }
    for (a = u(C), _ = u(e), (v = o(t)) || (t = u(t)), I = O(1, A = _.length), S = E(a, _); false !== S;) T = v ? u(t(_, S, a)) : p(_, a, S, [], true, t), w += b(a, N, S) + T, N = S + A, S = S + I > a.length ? false : E(a, _, S + I);
    return N < a.length && (w += b(a, N)), w
  }
})