/** Chunk was on 23357 **/
/** chunk id: 185056, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk519467 = require("./519467.js"),
  Chunk613694 = require("./613694.js"),
  i = Chunk613694.get,
  s = Chunk613694.has,
  c = Chunk613694.set;
Chunk220159({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  getOrInsert: function(e, t) {
    return s(o(this), e) ? i(this, e) : (c(this, e, t), t)
  }
})