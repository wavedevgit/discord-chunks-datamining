/** Chunk was on 23357 **/
/** chunk id: 235274, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk519467 = require("./519467.js"),
  Chunk795462 = require("./795462.js"),
  i = require("./613694.js").set;
Chunk220159({
  target: "Map",
  proto: true,
  real: true,
  arity: 1,
  forced: true
}, {
  merge: function(e) {
    for (var t = o(this), n = arguments.length, r = 0; r < n;) a(arguments[r++], function(e, n) {
      i(t, e, n)
    }, {
      AS_ENTRIES: true
    });
    return t
  }
})