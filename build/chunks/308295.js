/** Chunk was on 23357 **/
/** chunk id: 308295, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk691593 = require("./691593.js"),
  Chunk519467 = require("./519467.js"),
  Chunk717853 = require("./717853.js"),
  s = TypeError;
Chunk220159({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  reduce: function(e) {
    var t = a(this),
      n = arguments.length < 2,
      r = n ? true : arguments[1];
    if (o(e), i(t, function(o, a) {
        n ? (n = false, r = o) : r = e(r, o, a, t)
      }), n) throw new s("Reduce of empty map with no initial value");
    return r
  }
})