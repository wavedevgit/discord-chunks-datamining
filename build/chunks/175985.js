/** Chunk was on web.js **/
/** chunk id: 175985, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk869639 = require("./869639.js"),
  Chunk750253 = require("./750253.js"),
  Chunk676286 = require("./676286.js");
module.exports = function(e, t) {
  var n = t.currentTarget.ownerDocument;
  if (!e.props.preserveSelectionOnBlur && a(n) === n.body) {
    var s = n.defaultView.getSelection(),
      o = e.editor;
    1 === s.rangeCount && i(o, s.anchorNode) && i(o, s.focusNode) && s.removeAllRanges()
  }
  var l = e._latestEditorState,
    c = l.getSelection();
  if (c.getHasFocus()) {
    var u = c.set("hasFocus", false);
    e.props.onBlur && e.props.onBlur(t), e.update(r.acceptSelection(l, u))
  }
}