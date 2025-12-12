/** Chunk was on web.js **/
/** chunk id: 259303, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk384404 = require("./384404.js"),
  Chunk733359 = require("./733359.js"),
  Chunk571785 = require("./571785.js"),
  Chunk550773 = require("./550773.js");
module.exports = function(e) {
  var t = o(e, function(e) {
    var t = e.getSelection(),
      n = e.getCurrentContent(),
      r = t.getAnchorKey(),
      o = t.getAnchorOffset(),
      s = n.getBlockForKey(r).getText()[o];
    return a(e, s ? i.getUTF16Length(s, 0) : 1)
  }, "forward");
  if (t === e.getCurrentContent()) return e;
  var n = e.getSelection();
  return r.push(e, t.set("selectionBefore", n), n.isCollapsed() ? "delete-character" : "remove-range")
}