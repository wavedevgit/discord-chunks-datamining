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
  var y = Chunk121536.state || (Chunk121536.state = new m);
  y.get = y.get, y.has = y.has, y.set = y.set, r = function(e, t) {
    if (y.has(e)) throw new h(_);
    return t.facade = e, y.set(e, t), t
  }, i = function(e) {
    return y.get(e) || {}
  }, a = function(e) {
    return y.has(e)
  }
} else {
  var b = Chunk583178("state");
  Chunk239586[b] = true, r = function(e, t) {
    if (u(e, b)) throw new h(_);
    return t.facade = e, c(e, b, t), t
  }, i = function(e) {
    return u(e, b) ? e[b] : {}
  }, a = function(e) {
    return u(e, b)
  }
}
module.exports = {
  set: r,
  get: i,
  has: a,
  enforce: g,
  getterFor: E
}