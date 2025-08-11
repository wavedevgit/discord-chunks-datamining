/** Chunk was on web.js **/
/** chunk id: 991637, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk638934 = require("./638934.js"),
  Chunk286233 = require("./286233.js"),
  Chunk535213 = require("./535213.js"),
  Chunk383252 = require("./383252.js"),
  Chunk234268 = require("./234268.js"),
  Chunk751340 = require("./751340.js");
Chunk535213();
var c = Chunk638934(Chunk234268()),
  u = function(e) {
    return c(true === this ? Promise : this, e)
  };
Chunk286233(u, {
  getPolyfill: Chunk234268,
  implementation: Chunk383252,
  shim: Chunk751340
}), module.exports = u