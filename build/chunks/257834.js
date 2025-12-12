/** Chunk was on web.js **/
/** chunk id: 257834, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk384404 = require("./384404.js"),
  Chunk733359 = require("./733359.js"),
  Chunk373539 = require("./373539.js"),
  Chunk550773 = require("./550773.js");
module.exports = function(e) {
  var t = a(e, function(e) {
    var t = e.getSelection(),
      n = e.getCurrentContent(),
      r = t.getAnchorKey(),
      a = t.getAnchorOffset(),
      s = n.getBlockForKey(r).getText()[a - 1];
    return o(e, s ? i.getUTF16Length(s, 0) : 1)
  }, "backward");
  if (t === e.getCurrentContent()) return e;
  var n = e.getSelection();
  return r.push(e, t.set("selectionBefore", n), n.isCollapsed() ? "backspace-character" : "remove-range")
}