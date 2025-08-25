/** Chunk was on web.js **/
/** chunk id: 91242, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk102736 = require("./102736.js"),
  Chunk733359 = require("./733359.js"),
  Chunk780661 = require("./780661.js"),
  Chunk398448 = require("./398448.js");
module.exports = function(e) {
  var t = a(e, function(e) {
    var t = e.getSelection(),
      n = e.getCurrentContent(),
      r = t.getAnchorKey(),
      a = t.getAnchorOffset(),
      s = n.getBlockForKey(r).getText()[a];
    return o(e, s ? i.getUTF16Length(s, 0) : 1)
  }, "forward");
  if (t === e.getCurrentContent()) return e;
  var n = e.getSelection();
  return r.push(e, t.set("selectionBefore", n), n.isCollapsed() ? "delete-character" : "remove-range")
}