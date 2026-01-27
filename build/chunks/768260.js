/** Chunk was on 38939 **/
/** chunk id: 768260, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk869639 = require("./869639.js"),
  Chunk45722 = require("./45722.js"),
  Chunk241976 = require("./241976.js"),
  Chunk181621 = require("./181621.js"),
  Chunk418227 = require("./418227.js");
module.exports = function(t, e) {
  var r = s(t, function(t) {
    var r = t.getSelection();
    if (r.isCollapsed() && 0 === r.getAnchorOffset()) return a(t, 1);
    var n = e.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
    return o(t, null, (n = i(n)).endContainer, n.endOffset, n.startContainer, n.startOffset).selectionState
  }, "backward");
  return r === t.getCurrentContent() ? t : n.push(t, r, "remove-range")
}