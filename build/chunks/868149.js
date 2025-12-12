/** Chunk was on web.js **/
/** chunk id: 868149, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk384404 = require("./384404.js"),
  Chunk600518 = require("./600518.js"),
  Chunk298606 = require("./298606.js"),
  Chunk373539 = require("./373539.js"),
  Chunk550773 = require("./550773.js");
module.exports = function(e, t) {
  var n = s(e, function(e) {
    var n = e.getSelection();
    if (n.isCollapsed() && 0 === n.getAnchorOffset()) return o(e, 1);
    var r = t.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
    return a(e, null, (r = i(r)).endContainer, r.endOffset, r.startContainer, r.startOffset).selectionState
  }, "backward");
  return n === e.getCurrentContent() ? e : r.push(e, n, "remove-range")
}