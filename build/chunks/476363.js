/** Chunk was on web.js **/
/** chunk id: 476363, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk172367 = require("./172367.js"),
  Chunk788276 = require("./788276.js"),
  Chunk979162 = require("./979162.js"),
  Chunk159759 = require("./159759.js"),
  Chunk473297 = require("./473297.js");
module.exports = function(e, t) {
  var n = s(e, function(e) {
    var n = e.getSelection();
    if (n.isCollapsed() && 0 === n.getAnchorOffset()) return a(e, 1);
    var r = t.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
    return o(e, null, (r = i(r)).endContainer, r.endOffset, r.startContainer, r.startOffset).selectionState
  }, "backward");
  return n === e.getCurrentContent() ? e : r.push(e, n, "remove-range")
}