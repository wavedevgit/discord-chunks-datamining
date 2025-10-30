/** Chunk was on 87955 **/
/** chunk id: 421244, original params: e,t,a (module,exports,require) **/
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
  E = "RegExp String",
  P = E + " Iterator",
  _ = Chunk199838.set,
  C = Chunk199838.getterFor(P),
  N = RegExp.prototype,
  j = TypeError,
  I = Chunk35760("".indexOf),
  x = Chunk35760("".matchAll),
  k = !!x && !Chunk621523(function() {
    x("a", /./)
  }),
  A = Chunk280481(function(e, t, a, o) {
    _(this, {
      type: P,
      regexp: e,
      string: t,
      global: a,
      unicode: o,
      done: false
    })
  }, E, function() {
    var e = C(this);
    if (module.done) return Chunk682564(true, true);
    var t = module.regexp,
      a = module.string,
      o = Chunk820616(exports, require);
    return null === Chunk98405 ? (module.done = true, Chunk682564(true, true)) : (module.global ? "" === Chunk382698(Chunk98405[0]) && (exports.lastIndex = Chunk857168(require, Chunk554148(exports.lastIndex), module.unicode)) : module.done = true, Chunk682564(Chunk98405, false))
  }),
  R = function(e) {
    var t, a, o, i = u(this),
      l = c(e),
      n = L(i, RegExp),
      s = c(g(i));
    return t = new n(n === RegExp ? i.source : i, s), a = !!~I(s, "g"), o = !!~I(s, "u"), t.lastIndex = d(i.lastIndex), new A(t, l, a, o)
  };
Chunk98405({
  target: "String",
  proto: true,
  forced: k
}, {
  matchAll: function(e) {
    var t, a, o, l = r(this);
    if (f(e)) {
      if (k) return x(l, e)
    } else {
      if (p(e) && !~I(c(r(g(e))), "g")) throw new j("`.matchAll` does not allow non-global regexes");
      if (k) return x(l, e);
      if (true === (a = m(e, S)) && D && "RegExp" === h(e) && (a = R), a) return i(a, e, l)
    }
    return t = c(l), o = RegExp(e, "g"), D ? i(R, o, t) : o[S](t)
  }
}), Chunk511696 || S in N || Chunk556585(N, S, R)