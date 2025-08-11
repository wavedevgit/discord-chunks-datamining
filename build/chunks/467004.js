/** Chunk was on 23357 **/
/** chunk id: 467004, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk661155 = require("./661155.js"),
  a = require("./674554.js").indexOf,
  Chunk271537 = require("./271537.js"),
  s = Chunk661155([].indexOf),
  c = !!s && 1 / s([1], 1, true) < 0;
Chunk220159({
  target: "Array",
  proto: true,
  forced: c || !Chunk271537("indexOf")
}, {
  indexOf: function(e) {
    var t = arguments.length > 1 ? arguments[1] : true;
    return c ? s(this, e, t) || 0 : a(this, e, t)
  }
})