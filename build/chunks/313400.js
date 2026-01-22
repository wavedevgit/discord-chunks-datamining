/** Chunk was on web.js **/
/** chunk id: 313400, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk410323 = require("./410323.js"),
  Chunk503628 = require("./503628.js"),
  Chunk339626 = require("./339626.js"),
  Chunk210140 = require("./210140.js"),
  Chunk257943 = require("./257943.js"),
  l = require("./814113.js").CONFIGURABLE,
  Chunk997159 = require("./997159.js"),
  Chunk883972 = require("./883972.js"),
  d = Chunk883972.enforce,
  f = Chunk883972.get,
  p = String,
  _ = Object.defineProperty,
  h = Chunk410323("".slice),
  m = Chunk410323("".replace),
  g = Chunk410323([].join),
  E = Chunk257943 && !Chunk503628(function() {
    return 8 !== _(function() {}, "length", {
      value: 8
    }).length
  }),
  b = String(String).split("String"),
  y = module.exports = function(e, t, n) {
    "Symbol(" === h(p(t), 0, 7) && (t = "[" + m(p(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!s(e, "name") || l && e.name !== t) && (o ? _(e, "name", {
      value: t,
      configurable: true
    }) : e.name = t), E && n && s(n, "arity") && e.length !== n.arity && _(e, "length", {
      value: n.arity
    });
    try {
      n && s(n, "constructor") && n.constructor ? o && _(e, "prototype", {
        writable: false
      }) : e.prototype && (e.prototype = true)
    } catch (e) {}
    var r = d(e);
    return s(r, "source") || (r.source = g(b, "string" == typeof t ? t : "")), e
  };
Function.prototype.toString = y(function() {
  return a(this) && f(this).source || c(this)
}, "toString")