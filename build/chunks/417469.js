/** Chunk was on 23357 **/
/** chunk id: 417469, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk324474 = require("./324474.js"),
  Chunk519467 = require("./519467.js"),
  Chunk613694 = require("./613694.js"),
  Chunk717853 = require("./717853.js"),
  c = Chunk613694.Map,
  l = Chunk613694.set;
Chunk220159({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  mapValues: function(e) {
    var t = a(this),
      n = o(e, arguments.length > 1 ? arguments[1] : true),
      r = new c;
    return s(t, function(e, o) {
      l(r, o, n(e, o, t))
    }), r
  }
})