/** Chunk was on 50448 **/
/** chunk id: 89416, original params: t,r,n (module,exports,require) **/
"use strict";
var e, o, i, Chunk921546 = require("./921546.js"),
  Chunk424353 = require("./424353.js"),
  Chunk525320 = require("./525320.js"),
  Chunk285007 = require("./285007.js"),
  Chunk185698 = require("./185698.js"),
  Chunk723217 = require("./723217.js"),
  Chunk459079 = require("./459079.js"),
  Chunk270498 = require("./270498.js"),
  y = "Object already initialized",
  h = Chunk424353.TypeError,
  x = Chunk424353.WeakMap;
if (Chunk921546 || Chunk723217.state) {
  var d = Chunk723217.state || (Chunk723217.state = new x);
  d.get = d.get, d.has = d.has, d.set = d.set, e = function(t, r) {
    if (d.has(t)) throw new h(y);
    return r.facade = t, d.set(t, r), r
  }, o = function(t) {
    return d.get(t) || {}
  }, i = function(t) {
    return d.has(t)
  }
} else {
  var g = Chunk459079("state");
  Chunk270498[g] = true, e = function(t, r) {
    if (a(t, g)) throw new h(y);
    return r.facade = t, f(t, g, r), r
  }, o = function(t) {
    return a(t, g) ? t[g] : {}
  }, i = function(t) {
    return a(t, g)
  }
}
module.exports = {
  set: e,
  get: o,
  has: i,
  enforce: function(t) {
    return i(t) ? o(t) : e(t, {})
  },
  getterFor: function(t) {
    return function(r) {
      var n;
      if (!c(r) || (n = o(r)).type !== t) throw new h("Incompatible receiver, " + t + " required");
      return n
    }
  }
}