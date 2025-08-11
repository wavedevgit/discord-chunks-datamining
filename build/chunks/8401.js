/** Chunk was on 23357 **/
/** chunk id: 8401, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk324474 = require("./324474.js"),
  Chunk519467 = require("./519467.js"),
  Chunk717853 = require("./717853.js");
Chunk220159({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  find: function(e) {
    var t = a(this),
      n = o(e, arguments.length > 1 ? arguments[1] : true),
      r = i(t, function(e, r) {
        if (n(e, r, t)) return {
          value: e
        }
      }, true);
    return r && r.value
  }
})