/** Chunk was on web.js **/
/** chunk id: 421244, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk580983 = require("./580983.js"),
  Chunk35760 = require("./35760.js"),
  Chunk280481 = require("./280481.js"),
  Chunk682564 = require("./682564.js"),
  Chunk497464 = require("./497464.js"),
  Chunk554148 = require("./554148.js"),
  Chunk382698 = require("./382698.js"),
  Chunk179122 = require("./179122.js"),
  Chunk655152 = require("./655152.js"),
  Chunk796138 = require("./796138.js"),
  Chunk933009 = require("./933009.js"),
  Chunk817282 = require("./817282.js"),
  Chunk3831 = require("./3831.js"),
  Chunk556585 = require("./556585.js"),
  Chunk621523 = require("./621523.js"),
  Chunk751736 = require("./751736.js"),
  Chunk733375 = require("./733375.js"),
  Chunk857168 = require("./857168.js"),
  Chunk820616 = require("./820616.js"),
  Chunk199838 = require("./199838.js"),
  Chunk511696 = require("./511696.js"),
  S = Chunk751736("matchAll"),
  A = "RegExp String",
  C = A + " Iterator",
  N = Chunk199838.set,
  R = Chunk199838.getterFor(C),
  P = RegExp.prototype,
  w = TypeError,
  D = Chunk35760("".indexOf),
  x = Chunk35760("".matchAll),
  L = !!x && !Chunk621523(function() {
    x("a", /./)
  }),
  M = Chunk280481(function(e, t, n, r) {
    N(this, {
      type: C,
      regexp: e,
      string: t,
      global: n,
      unicode: r,
      done: false
    })
  }, A, function() {
    var e = R(this);
    if (module.done) return Chunk682564(true, true);
    var t = module.regexp,
      n = module.string,
      r = Chunk820616(exports, require);
    return null === Chunk98405 ? (module.done = true, Chunk682564(true, true)) : (module.global ? "" === Chunk382698(Chunk98405[0]) && (exports.lastIndex = Chunk857168(require, Chunk554148(exports.lastIndex), module.unicode)) : module.done = true, Chunk682564(Chunk98405, false))
  }),
  k = function(e) {
    var t, n, r, i = d(this),
      a = u(e),
      o = y(i, RegExp),
      s = u(h(i));
    return t = new o(o === RegExp ? i.source : i, s), n = !!~D(s, "g"), r = !!~D(s, "u"), t.lastIndex = c(i.lastIndex), new M(t, a, n, r)
  };
Chunk98405({
  target: "String",
  proto: true,
  forced: L
}, {
  matchAll: function(e) {
    var t, n, r, a = l(this);
    if (f(e)) {
      if (L) return x(a, e)
    } else {
      if (p(e) && !~D(u(l(h(e))), "g")) throw new w("`.matchAll` does not allow non-global regexes");
      if (L) return x(a, e);
      if (true === (n = m(e, S)) && T && "RegExp" === _(e) && (n = k), n) return i(n, e, a)
    }
    return t = u(a), r = RegExp(e, "g"), T ? i(k, r, t) : r[S](t)
  }
}), Chunk511696 || S in P || Chunk556585(P, S, k)