/** Chunk was on 23357 **/
/** chunk id: 791088, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  o = require("./958288.js").every;
Chunk220159({
  target: "Array",
  proto: true,
  forced: !require("./271537.js")("every")
}, {
  every: function(e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : true)
  }
})