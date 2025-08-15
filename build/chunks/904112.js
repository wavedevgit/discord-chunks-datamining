/** Chunk was on 8381 **/
/** chunk id: 904112, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk321780 = require("./321780.js"),
  Chunk172367 = require("./172367.js"),
  Chunk802801 = require("./802801.js"),
  Chunk473297 = require("./473297.js");
module.exports = function(t) {
  var e = a(t, function(t) {
    var e = t.getSelection(),
      r = e.getStartOffset(),
      i = e.getStartKey(),
      a = t.getCurrentContent().getBlockForKey(i).getText().slice(r);
    return o(t, n.getForward(a).length || 1)
  }, "forward");
  return e === t.getCurrentContent() ? t : i.push(t, e, "remove-range")
}