/** Chunk was on 35511 **/
/** chunk id: 402405, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk683570 = require("./683570.js"),
  Chunk780940 = require("./780940.js"),
  Chunk145595 = require("./145595.js"),
  s = require("./976467.js").CONSTRUCTOR,
  Chunk961549 = require("./961549.js"),
  c = Chunk683570("Promise"),
  u = Chunk780940 && !s;
Chunk834647({
  target: "Promise",
  stat: true,
  forced: Chunk780940 || s
}, {
  resolve: function(e) {
    return l(u && this === c ? i : this, e)
  }
})