/** Chunk was on 35511 **/
/** chunk id: 556658, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk280173 = require("./280173.js"),
  o = require("./463843.js").remove;
Chunk834647({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  deleteAll: function() {
    for (var e, t = a(this), n = true, r = 0, i = arguments.length; r < i; r++) e = o(t, arguments[r]), n = n && e;
    return !!n
  }
})