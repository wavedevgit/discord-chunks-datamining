/** Chunk was on 35511 **/
/** chunk id: 13079, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  a = require("./744679.js").left,
  Chunk242291 = require("./242291.js"),
  Chunk738538 = require("./738538.js");
Chunk834647({
  target: "Array",
  proto: true,
  forced: !require("./184110.js") && Chunk738538 > 79 && Chunk738538 < 83 || !Chunk242291("reduce")
}, {
  reduce: function(e) {
    var t = arguments.length;
    return a(this, e, t, t > 1 ? arguments[1] : true)
  }
})