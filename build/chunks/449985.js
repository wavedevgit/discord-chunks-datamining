/** Chunk was on 35511 **/
/** chunk id: 449985, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk999843 = require("./999843.js"),
  Chunk280173 = require("./280173.js"),
  Chunk381568 = require("./381568.js"),
  s = TypeError;
Chunk834647({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  reduce: function(e) {
    var t = o(this),
      n = arguments.length < 2,
      r = n ? true : arguments[1];
    if (a(e), i(t, function(a, o) {
        n ? (n = false, r = a) : r = e(r, a, o, t)
      }), n) throw new s("Reduce of empty map with no initial value");
    return r
  }
})