/** Chunk was on web.js **/
/** chunk id: 768260, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk869639 = require("./869639.js"),
  Chunk45722 = require("./45722.js"),
  Chunk241976 = require("./241976.js"),
  Chunk181621 = require("./181621.js"),
  Chunk418227 = require("./418227.js");
module.exports = function(e, t) {
  var n = o(e, function(e) {
    var n = e.getSelection();
    if (n.isCollapsed() && 0 === n.getAnchorOffset()) return s(e, 1);
    var r = t.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
    return a(e, null, (r = i(r)).endContainer, r.endOffset, r.startContainer, r.startOffset).selectionState
  }, "backward");
  return n === e.getCurrentContent() ? e : r.push(e, n, "remove-range")
}