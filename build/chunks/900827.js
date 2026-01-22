/** Chunk was on 35511 **/
/** chunk id: 900827, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk375797 = require("./375797.js"),
  o = require("./654272.js").indexOf,
  Chunk242291 = require("./242291.js"),
  s = Chunk375797([].indexOf),
  l = !!s && 1 / s([1], 1, true) < 0;
Chunk834647({
  target: "Array",
  proto: true,
  forced: l || !Chunk242291("indexOf")
}, {
  indexOf: function(e) {
    var t = arguments.length > 1 ? arguments[1] : true;
    return l ? s(this, e, t) || 0 : o(this, e, t)
  }
})