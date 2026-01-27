/** Chunk was on 38939 **/
/** chunk id: 70986, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk869639 = require("./869639.js"),
  Chunk1140 = require("./1140.js"),
  Chunk126331 = require("./126331.js"),
  Chunk418227 = require("./418227.js");
module.exports = function(t) {
  var e = a(t, function(t) {
    var e = t.getSelection(),
      r = t.getCurrentContent(),
      n = e.getAnchorKey(),
      a = e.getAnchorOffset(),
      s = r.getBlockForKey(n).getText()[a];
    return o(t, s ? i.getUTF16Length(s, 0) : 1)
  }, "forward");
  if (e === t.getCurrentContent()) return t;
  var r = t.getSelection();
  return n.push(t, e.set("selectionBefore", r), r.isCollapsed() ? "delete-character" : "remove-range")
}