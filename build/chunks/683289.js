/** Chunk was on 8381 **/
/** chunk id: 683289, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk979162 = require("./979162.js");
module.exports = function(t, e) {
  var r = e.ownerDocument.defaultView.getSelection();
  return 0 === r.rangeCount ? {
    selectionState: t.getSelection().set("hasFocus", false),
    needsRecovery: false
  } : n(t, e, r.anchorNode, r.anchorOffset, r.focusNode, r.focusOffset)
}