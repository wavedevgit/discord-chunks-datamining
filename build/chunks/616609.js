/** Chunk was on 23357 **/
/** chunk id: 616609, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk519467 = require("./519467.js"),
  a = require("./613694.js").remove;
Chunk220159({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  deleteAll: function() {
    for (var e, t = o(this), n = true, r = 0, i = arguments.length; r < i; r++) e = a(t, arguments[r]), n = n && e;
    return !!n
  }
})