/** Chunk was on web.js **/
/** chunk id: 783842, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk257943 = require("./257943.js"),
  Chunk410323 = require("./410323.js"),
  Chunk446474 = require("./446474.js"),
  Chunk503628 = require("./503628.js"),
  Chunk537403 = require("./537403.js"),
  Chunk800098 = require("./800098.js"),
  Chunk988366 = require("./988366.js"),
  Chunk250594 = require("./250594.js"),
  Chunk93714 = require("./93714.js"),
  f = Object.assign,
  p = Object.defineProperty,
  _ = Chunk410323([].concat);
module.exports = !f || Chunk503628(function() {
  if (r && 1 !== f({
      b: 1
    }, f(p({}, "a", {
      enumerable: true,
      get: function() {
        p(this, "b", {
          value: 3,
          enumerable: false
        })
      }
    }), {
      b: 2
    })).b) returntrue;
  var e = {},
    t = {},
    n = Symbol("assign detection"),
    i = "abcdefghijklmnopqrst";
  return e[n] = 7, i.split("").forEach(function(e) {
    t[e] = e
  }), 7 !== f({}, e)[n] || o(f({}, t)).join("") !== i
}) ? function(e, t) {
  for (var n = u(e), i = arguments.length, s = 1, f = l.f, p = c.f; i > s;)
    for (var h, m = d(arguments[s++]), g = f ? _(o(m), f(m)) : o(m), E = g.length, y = 0; E > y;) h = g[y++], (!r || a(p, m, h)) && (n[h] = m[h]);
  return n
} : f