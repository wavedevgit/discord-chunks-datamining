/** Chunk was on web.js **/
/** chunk id: 924849, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk102736 = require("./102736.js"),
  Chunk160206 = require("./160206.js"),
  Chunk100023 = require("./100023.js"),
  Chunk533531 = require("./533531.js"),
  Chunk398448 = require("./398448.js");
module.exports = function(e, t) {
  var n = s(e, function(e) {
    var n = e.getSelection();
    if (n.isCollapsed() && 0 === n.getAnchorOffset()) return a(e, 1);
    var r = t.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
    return o(e, null, (r = i(r)).endContainer, r.endOffset, r.startContainer, r.startOffset).selectionState
  }, "backward");
  return n === e.getCurrentContent() ? e : r.push(e, n, "remove-range")
}