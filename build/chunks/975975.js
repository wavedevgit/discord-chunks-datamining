/** Chunk was on web.js **/
/** chunk id: 975975, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk142896 = require("./142896.js"),
  Chunk381265 = require("./381265.js"),
  Chunk249759 = require("./249759.js"),
  Chunk242841 = require("./242841.js"),
  Chunk45804 = require("./45804.js"),
  Chunk326150 = require("./326150.js");
Chunk249759();
var c = Chunk142896(Chunk45804()),
  u = function(e) {
    return c(true === this ? Promise : this, e)
  };
Chunk381265(u, {
  getPolyfill: Chunk45804,
  implementation: Chunk242841,
  shim: Chunk326150
}), module.exports = u