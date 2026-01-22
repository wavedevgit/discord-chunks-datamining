/** Chunk was on 35511 **/
/** chunk id: 335783, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk280173 = require("./280173.js"),
  Chunk463843 = require("./463843.js"),
  i = Chunk463843.get,
  s = Chunk463843.has,
  l = Chunk463843.set;
Chunk834647({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  getOrInsert: function(e, t) {
    return s(a(this), e) ? i(this, e) : (l(this, e, t), t)
  }
})