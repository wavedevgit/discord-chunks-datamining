/** Chunk was on web.js **/
/** chunk id: 708150, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk298606 = require("./298606.js");
module.exports = function(e, t) {
  var n = t.ownerDocument.defaultView.getSelection();
  return 0 === n.rangeCount ? {
    selectionState: e.getSelection().set("hasFocus", false),
    needsRecovery: false
  } : r(e, t, n.anchorNode, n.anchorOffset, n.focusNode, n.focusOffset)
}