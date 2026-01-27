/** Chunk was on 38939 **/
/** chunk id: 644485, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk241976 = require("./241976.js");
module.exports = function(t, e) {
  var r = e.ownerDocument.defaultView.getSelection();
  return 0 === r.rangeCount ? {
    selectionState: t.getSelection().set("hasFocus", false),
    needsRecovery: false
  } : n(t, e, r.anchorNode, r.anchorOffset, r.focusNode, r.focusOffset)
}