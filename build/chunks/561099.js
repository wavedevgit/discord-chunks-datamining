/** Chunk was on web.js **/
/** chunk id: 561099, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk172367 = require("./172367.js"),
  Chunk733359 = require("./733359.js"),
  Chunk802801 = require("./802801.js"),
  Chunk473297 = require("./473297.js");
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