/** Chunk was on web.js **/
/** chunk id: 907014, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk869639 = require("./869639.js"),
  Chunk1140 = require("./1140.js"),
  Chunk181621 = require("./181621.js"),
  Chunk418227 = require("./418227.js");
module.exports = function(e) {
  var t = s(e, function(e) {
    var t = e.getSelection(),
      n = e.getCurrentContent(),
      r = t.getAnchorKey(),
      s = t.getAnchorOffset(),
      o = n.getBlockForKey(r).getText()[s - 1];
    return a(e, o ? i.getUTF16Length(o, 0) : 1)
  }, "backward");
  if (t === e.getCurrentContent()) return e;
  var n = e.getSelection();
  return r.push(e, t.set("selectionBefore", n), n.isCollapsed() ? "backspace-character" : "remove-range")
}