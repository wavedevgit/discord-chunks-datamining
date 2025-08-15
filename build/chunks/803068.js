/** Chunk was on 8381 **/
/** chunk id: 803068, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk172367 = require("./172367.js"),
  Chunk733359 = require("./733359.js"),
  Chunk159759 = require("./159759.js"),
  Chunk473297 = require("./473297.js");
module.exports = function(t) {
  var e = a(t, function(t) {
    var e = t.getSelection(),
      r = t.getCurrentContent(),
      n = e.getAnchorKey(),
      a = e.getAnchorOffset(),
      u = r.getBlockForKey(n).getText()[a - 1];
    return o(t, u ? i.getUTF16Length(u, 0) : 1)
  }, "backward");
  if (e === t.getCurrentContent()) return t;
  var r = t.getSelection();
  return n.push(t, e.set("selectionBefore", r), r.isCollapsed() ? "backspace-character" : "remove-range")
}