/** Chunk was on 23357 **/
/** chunk id: 44362, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk178476 = require("./178476.js"),
  Chunk253462 = require("./253462.js"),
  Chunk57100 = require("./57100.js"),
  s = require("./296004.js").CONSTRUCTOR,
  Chunk933958 = require("./933958.js"),
  l = Chunk178476("Promise"),
  u = Chunk253462 && !s;
Chunk220159({
  target: "Promise",
  stat: true,
  forced: Chunk253462 || s
}, {
  resolve: function(e) {
    return c(u && this === l ? i : this, e)
  }
})