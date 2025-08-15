/** Chunk was on 91584 **/
/** chunk id: 924849, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk102736 = require("./102736.js"),
  Chunk160206 = require("./160206.js"),
  Chunk100023 = require("./100023.js"),
  Chunk533531 = require("./533531.js"),
  Chunk398448 = require("./398448.js");
module.exports = function(t, e) {
  var r = u(t, function(t) {
    var r = t.getSelection();
    if (r.isCollapsed() && 0 === r.getAnchorOffset()) return a(t, 1);
    var n = e.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
    return o(t, null, (n = i(n)).endContainer, n.endOffset, n.startContainer, n.startOffset).selectionState
  }, "backward");
  return r === t.getCurrentContent() ? t : n.push(t, r, "remove-range")
}