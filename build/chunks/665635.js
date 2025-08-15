/** Chunk was on 91584 **/
/** chunk id: 665635, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk100023 = require("./100023.js");
module.exports = function(t, e) {
  var r = e.ownerDocument.defaultView.getSelection();
  return 0 === r.rangeCount ? {
    selectionState: t.getSelection().set("hasFocus", false),
    needsRecovery: false
  } : n(t, e, r.anchorNode, r.anchorOffset, r.focusNode, r.focusOffset)
}