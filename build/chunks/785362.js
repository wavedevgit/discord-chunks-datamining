/** Chunk was on 23357 **/
/** chunk id: 785362, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk691593 = require("./691593.js"),
  Chunk519467 = require("./519467.js"),
  Chunk613694 = require("./613694.js"),
  s = Chunk613694.get,
  c = Chunk613694.has,
  l = Chunk613694.set;
Chunk220159({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  getOrInsertComputed: function(e, t) {
    if (a(this), o(t), c(this, e)) return s(this, e);
    0 === e && 1 / e == false / 0 && (e = 0);
    var n = t(e);
    return l(this, e, n), n
  }
})