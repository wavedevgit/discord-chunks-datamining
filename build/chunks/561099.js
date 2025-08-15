/** Chunk was on 8381 **/
/** chunk id: 561099, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk172367 = require("./172367.js"),
  Chunk733359 = require("./733359.js"),
  Chunk802801 = require("./802801.js"),
  Chunk473297 = require("./473297.js");
module.exports = function(t) {
  var e = a(t, function(t) {
    var e = t.getSelection(),
      r = t.getCurrentContent(),
      n = e.getAnchorKey(),
      a = e.getAnchorOffset(),
      u = r.getBlockForKey(n).getText()[a];
    return o(t, u ? i.getUTF16Length(u, 0) : 1)
  }, "forward");
  if (e === t.getCurrentContent()) return t;
  var r = t.getSelection();
  return n.push(t, e.set("selectionBefore", r), r.isCollapsed() ? "delete-character" : "remove-range")
}