/** Chunk was on 23357 **/
/** chunk id: 33790, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  o = require("./674554.js").includes,
  Chunk779688 = require("./779688.js"),
  Chunk855802 = require("./855802.js");
Chunk220159({
  target: "Array",
  proto: true,
  forced: Chunk779688(function() {
    return ![, ].includes()
  })
}, {
  includes: function(e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : true)
  }
}), Chunk855802("includes")