/** Chunk was on 35511 **/
/** chunk id: 655531, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk999843 = require("./999843.js"),
  Chunk280173 = require("./280173.js"),
  Chunk463843 = require("./463843.js"),
  s = Chunk463843.get,
  l = Chunk463843.has,
  c = Chunk463843.set;
Chunk834647({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  getOrInsertComputed: function(e, t) {
    if (o(this), a(t), l(this, e)) return s(this, e);
    0 === e && 1 / e == false / 0 && (e = 0);
    var n = t(e);
    return c(this, e, n), n
  }
})