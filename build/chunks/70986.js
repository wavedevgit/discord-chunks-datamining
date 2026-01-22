/** Chunk was on web.js **/
/** chunk id: 70986, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk869639 = require("./869639.js"),
  Chunk1140 = require("./1140.js"),
  Chunk126331 = require("./126331.js"),
  Chunk418227 = require("./418227.js");
module.exports = function(e) {
  var t = s(e, function(e) {
    var t = e.getSelection(),
      n = e.getCurrentContent(),
      r = t.getAnchorKey(),
      s = t.getAnchorOffset(),
      o = n.getBlockForKey(r).getText()[s];
    return a(e, o ? i.getUTF16Length(o, 0) : 1)
  }, "forward");
  if (t === e.getCurrentContent()) return e;
  var n = e.getSelection();
  return r.push(e, t.set("selectionBefore", n), n.isCollapsed() ? "delete-character" : "remove-range")
}