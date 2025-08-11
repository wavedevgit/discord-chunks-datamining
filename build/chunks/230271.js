/** Chunk was on 23357 **/
/** chunk id: 230271, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk519467 = require("./519467.js"),
  Chunk717853 = require("./717853.js");
Chunk220159({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  keyOf: function(e) {
    var t = a(o(this), function(t, n) {
      if (t === e) return {
        key: n
      }
    }, true);
    return t && t.key
  }
})