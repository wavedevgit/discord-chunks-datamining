/** Chunk was on 38939 **/
/** chunk id: 907014, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk869639 = require("./869639.js"),
  Chunk1140 = require("./1140.js"),
  Chunk181621 = require("./181621.js"),
  Chunk418227 = require("./418227.js");
module.exports = function(t) {
  var e = a(t, function(t) {
    var e = t.getSelection(),
      r = t.getCurrentContent(),
      n = e.getAnchorKey(),
      a = e.getAnchorOffset(),
      s = r.getBlockForKey(n).getText()[a - 1];
    return o(t, s ? i.getUTF16Length(s, 0) : 1)
  }, "backward");
  if (e === t.getCurrentContent()) return t;
  var r = t.getSelection();
  return n.push(t, e.set("selectionBefore", r), r.isCollapsed() ? "backspace-character" : "remove-range")
}