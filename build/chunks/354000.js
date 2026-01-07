/** Chunk was on 50448 **/
/** chunk id: 354000, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk181794 = require("./181794.js"),
  Chunk764908 = require("./764908.js"),
  Chunk517522 = require("./517522.js"),
  Chunk779688 = require("./779688.js"),
  Chunk61824 = require("./61824.js"),
  Chunk880887 = require("./880887.js"),
  Chunk75411 = require("./75411.js"),
  Chunk475424 = require("./475424.js"),
  Chunk562690 = require("./562690.js"),
  l = Object.assign,
  v = Object.defineProperty,
  y = Chunk764908([].concat);
module.exports = !l || Chunk779688(function() {
  if (e && 1 !== l({
      b: 1
    }, l(v({}, "a", {
      enumerable: true,
      get: function() {
        v(this, "b", {
          value: 3,
          enumerable: false
        })
      }
    }), {
      b: 2
    })).b) returntrue;
  var t = {},
    r = {},
    n = Symbol("assign detection"),
    o = "abcdefghijklmnopqrst";
  return t[n] = 7, o.split("").forEach(function(t) {
    r[t] = t
  }), 7 !== l({}, t)[n] || s(l({}, r)).join("") !== o
}) ? function(t, r) {
  for (var n = a(t), o = arguments.length, u = 1, l = c.f, v = f.f; o > u;)
    for (var h, x = p(arguments[u++]), d = l ? y(s(x), l(x)) : s(x), g = d.length, b = 0; g > b;) h = d[b++], (!e || i(v, x, h)) && (n[h] = x[h]);
  return n
} : l