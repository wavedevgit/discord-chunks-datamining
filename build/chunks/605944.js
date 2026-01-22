/** Chunk was on 94678 **/
/** chunk id: 605944, original params: t,r,e (module,exports,require) **/
"use strict";
var n, o, s, Chunk491755 = require("./491755.js"),
  Chunk308227 = require("./308227.js"),
  Chunk407057 = require("./407057.js"),
  Chunk180734 = require("./180734.js"),
  Chunk512008 = require("./512008.js"),
  Chunk574236 = require("./574236.js"),
  Chunk157494 = require("./157494.js"),
  Chunk760326 = require("./760326.js"),
  y = "Object already initialized",
  h = Chunk308227.TypeError,
  x = Chunk308227.WeakMap;
if (Chunk491755 || Chunk574236.state) {
  var d = Chunk574236.state || (Chunk574236.state = new x);
  d.get = d.get, d.has = d.has, d.set = d.set, n = function(t, r) {
    if (d.has(t)) throw new h(y);
    return r.facade = t, d.set(t, r), r
  }, o = function(t) {
    return d.get(t) || {}
  }, s = function(t) {
    return d.has(t)
  }
} else {
  var g = Chunk157494("state");
  Chunk760326[g] = true, n = function(t, r) {
    if (f(t, g)) throw new h(y);
    return r.facade = t, a(t, g, r), r
  }, o = function(t) {
    return f(t, g) ? t[g] : {}
  }, s = function(t) {
    return f(t, g)
  }
}
module.exports = {
  set: n,
  get: o,
  has: s,
  enforce: function(t) {
    return s(t) ? o(t) : n(t, {})
  },
  getterFor: function(t) {
    return function(r) {
      var e;
      if (!c(r) || (e = o(r)).type !== t) throw new h("Incompatible receiver, " + t + " required");
      return e
    }
  }
}