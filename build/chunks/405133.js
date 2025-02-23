/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
var n = r(133092),
  i = r(169774);
t.exports = function(t, e) {
  var r = t._latestEditorState,
    o = r.getSelection();
  if (!o.getHasFocus()) {
    var a = o.set("hasFocus", !0);
    t.props.onFocus && t.props.onFocus(e), i.isBrowser("Chrome < 60.0.3081.0") ? t.update(n.forceSelection(r, a)) : t.update(n.acceptSelection(r, a))
  }
}