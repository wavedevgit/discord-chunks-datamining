/** Chunk was on 91584 **/
/** chunk id: 996022, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk102736 = require("./102736.js"),
  Chunk808570 = require("./808570.js"),
  Chunk924125 = require("./924125.js");
module.exports = function(t, e) {
  var r = e.currentTarget.ownerDocument;
  if (!t.props.preserveSelectionOnBlur && o(r) === r.body) {
    var a = r.defaultView.getSelection(),
      u = t.editor;
    1 === a.rangeCount && i(u, a.anchorNode) && i(u, a.focusNode) && a.removeAllRanges()
  }
  var s = t._latestEditorState,
    c = s.getSelection();
  if (c.getHasFocus()) {
    var l = c.set("hasFocus", false);
    t.props.onBlur && t.props.onBlur(e), t.update(n.acceptSelection(s, l))
  }
}