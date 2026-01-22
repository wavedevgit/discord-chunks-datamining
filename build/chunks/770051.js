/** Chunk was on 35511 **/
/** chunk id: 770051, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk280173 = require("./280173.js"),
  Chunk554987 = require("./554987.js"),
  i = require("./463843.js").set;
Chunk834647({
  target: "Map",
  proto: true,
  real: true,
  arity: 1,
  forced: true
}, {
  merge: function(e) {
    for (var t = a(this), n = arguments.length, r = 0; r < n;) o(arguments[r++], function(e, n) {
      i(t, e, n)
    }, {
      AS_ENTRIES: true
    });
    return t
  }
})