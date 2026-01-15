/** Chunk was on web.js **/
/** chunk id: 445667, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk507604 = require("./507604.js"),
  Chunk46015 = require("./46015.js"),
  Chunk580983 = require("./580983.js"),
  Chunk621523 = require("./621523.js"),
  Chunk673451 = require("./673451.js"),
  Chunk245 = require("./245.js"),
  Chunk822635 = require("./822635.js"),
  Chunk527160 = require("./527160.js"),
  Chunk79275 = require("./79275.js"),
  f = Object.assign,
  p = Object.defineProperty,
  _ = Chunk46015([].concat);
module.exports = !f || Chunk621523(function() {
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
  }), 7 !== f({}, e)[n] || s(f({}, t)).join("") !== i
}) ? function(e, t) {
  for (var n = u(e), i = arguments.length, o = 1, f = l.f, p = c.f; i > o;)
    for (var h, m = d(arguments[o++]), g = f ? _(s(m), f(m)) : s(m), E = g.length, b = 0; E > b;) h = g[b++], (!r || a(p, m, h)) && (n[h] = m[h]);
  return n
} : f