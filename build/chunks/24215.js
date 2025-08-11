/** Chunk was on 50448 **/
/** chunk id: 24215, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk764908 = require("./764908.js"),
  Chunk884805 = require("./884805.js"),
  Chunk971428 = require("./971428.js"),
  Chunk6837 = require("./6837.js"),
  Chunk565130 = require("./565130.js"),
  c = Chunk764908([].push);
module.exports = function(t) {
  if (i(t)) return t;
  if (o(t)) {
    for (var r = t.length, n = [], e = 0; e < r; e++) {
      var f = t[e];
      "string" == typeof f ? c(n, f) : ("number" == typeof f || "Number" === u(f) || "String" === u(f)) && c(n, s(f))
    }
    var a = n.length,
      p = true;
    return function(t, r) {
      if (p) return p = false, r;
      if (o(this)) return r;
      for (var e = 0; e < a; e++)
        if (n[e] === t) return r
    }
  }
}