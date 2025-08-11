/** Chunk was on 50448 **/
/** chunk id: 56636, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk779688 = require("./779688.js"),
  Chunk326234 = require("./326234.js");
Chunk220159({
  target: "Set",
  proto: true,
  real: true,
  forced: !require("./402160.js")("intersection", function(t) {
    return 2 === t.size && t.has(1) && t.has(2)
  }) || Chunk779688(function() {
    return "3,2" !== String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2]))))
  })
}, {
  intersection: Chunk326234
})