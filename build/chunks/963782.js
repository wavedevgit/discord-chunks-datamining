/** Chunk was on 8381 **/
/** chunk id: 963782, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk321780 = require("./321780.js"),
  Chunk172367 = require("./172367.js"),
  Chunk159759 = require("./159759.js"),
  Chunk473297 = require("./473297.js");
module.exports = function(t) {
  var e = a(t, function(t) {
    var e = t.getSelection(),
      r = e.getStartOffset();
    if (0 === r) return o(t, 1);
    var i = e.getStartKey(),
      a = t.getCurrentContent().getBlockForKey(i).getText().slice(0, r);
    return o(t, n.getBackward(a).length || 1)
  }, "backward");
  return e === t.getCurrentContent() ? t : i.push(t, e, "remove-range")
}