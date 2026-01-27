/** Chunk was on 38939 **/
/** chunk id: 175985, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk869639 = require("./869639.js"),
  Chunk750253 = require("./750253.js"),
  Chunk676286 = require("./676286.js");
module.exports = function(t, e) {
  var r = e.currentTarget.ownerDocument;
  if (!t.props.preserveSelectionOnBlur && o(r) === r.body) {
    var a = r.defaultView.getSelection(),
      s = t.editor;
    1 === a.rangeCount && i(s, a.anchorNode) && i(s, a.focusNode) && a.removeAllRanges()
  }
  var u = t._latestEditorState,
    c = u.getSelection();
  if (c.getHasFocus()) {
    var l = c.set("hasFocus", false);
    t.props.onBlur && t.props.onBlur(e), t.update(n.acceptSelection(u, l))
  }
}