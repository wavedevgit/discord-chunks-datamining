/** Chunk was on 23357 **/
/** chunk id: 483670, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  o = require("./937552.js").left,
  Chunk271537 = require("./271537.js"),
  Chunk306983 = require("./306983.js");
Chunk220159({
  target: "Array",
  proto: true,
  forced: !require("./270301.js") && Chunk306983 > 79 && Chunk306983 < 83 || !Chunk271537("reduce")
}, {
  reduce: function(e) {
    var t = arguments.length;
    return o(this, e, t, t > 1 ? arguments[1] : true)
  }
})