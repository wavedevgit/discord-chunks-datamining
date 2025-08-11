/** Chunk was on 23357 **/
/** chunk id: 655314, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  o = require("./958288.js").findIndex,
  Chunk855802 = require("./855802.js"),
  i = "findIndex",
  s = true;
i in [] && [, ][i](function() {
  s = false
}), Chunk220159({
  target: "Array",
  proto: true,
  forced: s
}, {
  findIndex: function(e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : true)
  }
}), Chunk855802(i)