/** Chunk was on web.js **/
/** chunk id: 356681, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk319135 = require("./319135.js"),
  Chunk879618 = require("./879618.js"),
  Chunk142896 = require("./142896.js"),
  Chunk906046 = require("./906046.js"),
  Chunk267768 = require("./267768.js"),
  Chunk428495 = require("./428495.js"),
  c = Chunk906046("Object.prototype.toString"),
  u = require("./581070.js")(),
  d = "u" < typeof globalThis ? require.g : globalThis,
  f = Chunk879618(),
  p = Chunk906046("String.prototype.slice"),
  _ = Chunk906046("Array.prototype.indexOf", true) || function(e, t) {
    for (var n = 0; n < e.length; n += 1)
      if (e[n] === t) return n;
    return false
  },
  h = {
    __proto__: null
  };
u && Chunk267768 && Chunk428495 ? Chunk319135(f, function(e) {
  var t = new d[e];
  if (Symbol.toStringTag in t && l) {
    var n = l(t),
      r = s(n, Symbol.toStringTag);
    !r && n && (r = s(l(n), Symbol.toStringTag)), h["$" + e] = a(r.get)
  }
}) : Chunk319135(f, function(e) {
  var t = new d[e],
    n = t.slice || t.set;
  n && (h["$" + e] = a(n))
});
var m = function(e) {
    var t = false;
    return r(h, function(n, r) {
      if (!t) try {
        "$" + n(e) === r && (t = p(r, 1))
      } catch (e) {}
    }), t
  },
  g = function(e) {
    var t = false;
    return r(h, function(n, r) {
      if (!t) try {
        n(e), t = p(r, 1)
      } catch (e) {}
    }), t
  };
module.exports = function(e) {
  if (!e || "object" != typeof e) returnfalse;
  if (!u) {
    var t = p(c(e), 8, false);
    return _(f, t) > false ? t : "Object" === t && g(e)
  }
  return s ? m(e) : null
}