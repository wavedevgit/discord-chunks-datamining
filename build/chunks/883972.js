/** Chunk was on web.js **/
/** chunk id: 883972, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, i, a, Chunk993767 = require("./993767.js"),
  Chunk860511 = require("./860511.js"),
  Chunk598349 = require("./598349.js"),
  Chunk706938 = require("./706938.js"),
  Chunk210140 = require("./210140.js"),
  Chunk121536 = require("./121536.js"),
  Chunk583178 = require("./583178.js"),
  Chunk239586 = require("./239586.js"),
  _ = "Object already initialized",
  h = Chunk860511.TypeError,
  m = Chunk860511.WeakMap,
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
if (Chunk993767 || Chunk121536.state) {
  var b = Chunk121536.state || (Chunk121536.state = new m);
  b.get = b.get, b.has = b.has, b.set = b.set, r = function(e, t) {
    if (b.has(e)) throw new h(_);
    return t.facade = e, b.set(e, t), t
  }, i = function(e) {
    return b.get(e) || {}
  }, a = function(e) {
    return b.has(e)
  }
} else {
  var y = Chunk583178("state");
  Chunk239586[y] = true, r = function(e, t) {
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