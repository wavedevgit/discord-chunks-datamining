/** Chunk was on 8381 **/
/** chunk id: 476363, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk172367 = require("./172367.js"),
  Chunk788276 = require("./788276.js"),
  Chunk979162 = require("./979162.js"),
  Chunk159759 = require("./159759.js"),
  Chunk473297 = require("./473297.js");
module.exports = function(t, e) {
  var r = u(t, function(t) {
    var r = t.getSelection();
    if (r.isCollapsed() && 0 === r.getAnchorOffset()) return a(t, 1);
    var n = e.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
    return o(t, null, (n = i(n)).endContainer, n.endOffset, n.startContainer, n.startOffset).selectionState
  }, "backward");
  return r === t.getCurrentContent() ? t : n.push(t, r, "remove-range")
}