/** Chunk was on web.js **/
/** chunk id: 3843, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk179560 = require("./179560.js"),
  Chunk923888 = require("./923888.js"),
  Chunk638934 = require("./638934.js"),
  Chunk166691 = require("./166691.js"),
  Chunk566817 = require("./566817.js"),
  Chunk143988 = require("./143988.js"),
  c = Chunk166691("Object.prototype.toString"),
  u = require("./195653.js")(),
  d = "undefined" == typeof globalThis ? require.g : globalThis,
  f = Chunk923888(),
  _ = Chunk166691("String.prototype.slice"),
  p = Chunk166691("Array.prototype.indexOf", true) || function(e, t) {
    for (var n = 0; n < e.length; n += 1)
      if (e[n] === t) return n;
    return false
  },
  h = {
    __proto__: null
  };
u && Chunk566817 && Chunk143988 ? Chunk179560(f, function(e) {
  var t = new d[e];
  if (Symbol.toStringTag in t && l) {
    var n = l(t),
      r = s(n, Symbol.toStringTag);
    !r && n && (r = s(l(n), Symbol.toStringTag)), h["$" + e] = o(r.get)
  }
}) : Chunk179560(f, function(e) {
  var t = new d[e],
    n = t.slice || t.set;
  n && (h["$" + e] = o(n))
});
var m = function(e) {
    var t = false;
    return r(h, function(n, r) {
      if (!t) try {
        "$" + n(e) === r && (t = _(r, 1))
      } catch (e) {}
    }), t
  },
  g = function(e) {
    var t = false;
    return r(h, function(n, r) {
      if (!t) try {
        n(e), t = _(r, 1)
      } catch (e) {}
    }), t
  };
module.exports = function(e) {
  if (!e || "object" != typeof e) returnfalse;
  if (!u) {
    var t = _(c(e), 8, false);
    return p(f, t) > false ? t : "Object" === t && g(e)
  }
  return s ? m(e) : null
}