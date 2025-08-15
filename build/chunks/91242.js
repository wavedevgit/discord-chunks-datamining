/** Chunk was on 91584 **/
/** chunk id: 91242, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk102736 = require("./102736.js"),
  Chunk733359 = require("./733359.js"),
  Chunk780661 = require("./780661.js"),
  Chunk398448 = require("./398448.js");
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