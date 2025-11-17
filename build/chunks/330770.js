/** Chunk was on web.js **/
/** chunk id: 330770, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk384404 = require("./384404.js"),
  Chunk808570 = require("./808570.js"),
  Chunk924125 = require("./924125.js");
module.exports = function(e, t) {
  var n = t.currentTarget.ownerDocument;
  if (!e.props.preserveSelectionOnBlur && a(n) === n.body) {
    var o = n.defaultView.getSelection(),
      s = e.editor;
    1 === o.rangeCount && i(s, o.anchorNode) && i(s, o.focusNode) && o.removeAllRanges()
  }
  var l = e._latestEditorState,
    c = l.getSelection();
  if (c.getHasFocus()) {
    var u = c.set("hasFocus", false);
    e.props.onBlur && e.props.onBlur(t), e.update(r.acceptSelection(l, u))
  }
}