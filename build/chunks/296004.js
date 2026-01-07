/** Chunk was on 23357 **/
/** chunk id: 296004, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk424353 = require("./424353.js"),
  Chunk57100 = require("./57100.js"),
  Chunk971428 = require("./971428.js"),
  Chunk417791 = require("./417791.js"),
  Chunk975378 = require("./975378.js"),
  Chunk394370 = require("./394370.js"),
  Chunk560103 = require("./560103.js"),
  Chunk253462 = require("./253462.js"),
  Chunk306983 = require("./306983.js"),
  p = Chunk57100 && Chunk57100.prototype,
  h = Chunk394370("species"),
  f = false,
  m = Chunk971428(Chunk424353.PromiseRejectionEvent);
module.exports = {
  CONSTRUCTOR: Chunk417791("Promise", function() {
    var e = s(o),
      t = e !== String(o);
    if (!t && 66 === d || u && !(p.catch && p.finally)) returntrue;
    if (!d || d < 51 || !/native code/.test(e)) {
      var n = new o(function(e) {
          e(1)
        }),
        r = function(e) {
          e(function() {}, function() {})
        };
      if ((n.constructor = {})[h] = r, !(f = n.then(function() {}) instanceof r)) returntrue
    }
    return !t && ("BROWSER" === l || "DENO" === l) && !m
  }),
  REJECTION_EVENT: m,
  SUBCLASSING: f
}