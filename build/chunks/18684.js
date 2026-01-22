/** Chunk was on 35511 **/
/** chunk id: 18684, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk280173 = require("./280173.js"),
  Chunk381568 = require("./381568.js");
Chunk834647({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  keyOf: function(e) {
    var t = o(a(this), function(t, n) {
      if (t === e) return {
        key: n
      }
    }, true);
    return t && t.key
  }
})