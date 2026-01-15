/** Chunk was on web.js **/
/** chunk id: 199838, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, i, a, Chunk720561 = require("./720561.js"),
  Chunk127849 = require("./127849.js"),
  Chunk434431 = require("./434431.js"),
  Chunk436207 = require("./436207.js"),
  Chunk77025 = require("./77025.js"),
  Chunk651144 = require("./651144.js"),
  Chunk661314 = require("./661314.js"),
  Chunk485073 = require("./485073.js"),
  _ = "Object already initialized",
  h = Chunk127849.TypeError,
  m = Chunk127849.WeakMap,
  g = function(e) {
    return a(e) ? i(e) : r(e, {})
  },
  E = function(e) {
    return function(t) {
      var n;
      if (!l(t) || (n = i(t)).type !== e) throw new h("Incompatible receiver, " + e + " required");
      return n
    }
  };
if (Chunk720561 || Chunk651144.state) {
  var b = Chunk651144.state || (Chunk651144.state = new m);
  b.get = b.get, b.has = b.has, b.set = b.set, r = function(e, t) {
    if (b.has(e)) throw new h(_);
    return t.facade = e, b.set(e, t), t
  }, i = function(e) {
    return b.get(e) || {}
  }, a = function(e) {
    return b.has(e)
  }
} else {
  var y = Chunk661314("state");
  Chunk485073[y] = true, r = function(e, t) {
    if (u(e, y)) throw new h(_);
    return t.facade = e, c(e, y, t), t
  }, i = function(e) {
    return u(e, y) ? e[y] : {}
  }, a = function(e) {
    return u(e, y)
  }
}
module.exports = {
  set: r,
  get: i,
  has: a,
  enforce: g,
  getterFor: E
}