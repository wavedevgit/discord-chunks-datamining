/** Chunk was on 94678 **/
/** chunk id: 625333, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk486816 = require("./486816.js"),
  Chunk418911 = require("./418911.js");
Chunk834647({
  target: "Set",
  proto: true,
  real: true,
  forced: !require("./962249.js")("intersection", function(t) {
    return 2 === t.size && t.has(1) && t.has(2)
  }) || Chunk486816(function() {
    return "3,2" !== String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2]))))
  })
}, {
  intersection: Chunk418911
})