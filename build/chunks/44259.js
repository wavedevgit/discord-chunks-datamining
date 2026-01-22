/** Chunk was on 35511 **/
/** chunk id: 44259, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  a = require("./673162.js").findIndex,
  Chunk299632 = require("./299632.js"),
  i = "findIndex",
  s = true;
i in [] && [, ][i](function() {
  s = false
}), Chunk834647({
  target: "Array",
  proto: true,
  forced: s
}, {
  findIndex: function(e) {
    return a(this, e, arguments.length > 1 ? arguments[1] : true)
  }
}), Chunk299632(i)