/** Chunk was on 77639 **/
/** chunk id: 169888, original params: e,t,a (module,exports,require) **/
var Chunk557939 = require("./557939.js"),
  Chunk446474 = require("./446474.js"),
  Chunk517737 = require("./517737.js"),
  Chunk23277 = require("./23277.js"),
  Chunk503902 = require("./503902.js"),
  Chunk321727 = require("./321727.js"),
  Chunk370001 = require("./370001.js"),
  Chunk304880 = require("./304880.js"),
  Chunk101968 = require("./101968.js"),
  Chunk652320 = require("./652320.js"),
  Chunk647055 = require("./647055.js"),
  Chunk432663 = require("./432663.js"),
  Chunk565079 = require("./565079.js"),
  Chunk95959 = require("./95959.js"),
  Chunk693655 = require("./693655.js"),
  Chunk503628 = require("./503628.js"),
  Chunk380744 = require("./380744.js"),
  Chunk322402 = require("./322402.js"),
  Chunk929880 = require("./929880.js"),
  Chunk17755 = require("./17755.js"),
  Chunk883972 = require("./883972.js"),
  Chunk105712 = require("./105712.js"),
  S = Chunk380744("matchAll"),
  E = "RegExp String",
  _ = E + " Iterator",
  P = Chunk883972.set,
  A = Chunk883972.getterFor(_),
  N = RegExp.prototype,
  j = TypeError,
  C = Chunk517737("".indexOf),
  I = Chunk517737("".matchAll),
  x = !!I && !Chunk503628(function() {
    I("a", /./)
  }),
  k = Chunk23277(function(e, t, a, o) {
    P(this, {
      type: _,
      regexp: e,
      string: t,
      global: a,
      unicode: o,
      done: false
    })
  }, E, function() {
    var e = A(this);
    if (e.done) return s(true, true);
    var t = e.regexp,
      a = e.string,
      o = O(t, a);
    return null === o ? (e.done = true, s(true, true)) : (e.global ? "" === c(o[0]) && (t.lastIndex = w(a, d(t.lastIndex), e.unicode)) : e.done = true, s(o, false))
  }),
  R = function(e) {
    var t, a, o, i = u(this),
      l = c(e),
      n = L(i, RegExp),
      s = c(g(i));
    return t = new n(n === RegExp ? i.source : i, s), a = !!~C(s, "g"), o = !!~C(s, "u"), t.lastIndex = d(i.lastIndex), new k(t, l, a, o)
  };
Chunk557939({
  target: "String",
  proto: true,
  forced: x
}, {
  matchAll: function(e) {
    var t, a, o, l = r(this);
    if (f(e)) {
      if (x) return I(l, e)
    } else {
      if (p(e) && !~C(c(r(g(e))), "g")) throw new j("`.matchAll` does not allow non-global regexes");
      if (x) return I(l, e);
      if (true === (a = y(e, S)) && v && "RegExp" === h(e) && (a = R), a) return i(a, e, l)
    }
    return t = c(l), o = RegExp(e, "g"), v ? i(R, o, t) : o[S](t)
  }
}), Chunk105712 || S in N || Chunk693655(N, S, R)