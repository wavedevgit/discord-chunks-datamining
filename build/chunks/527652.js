/** Chunk was on 68880 **/
"use strict";
var n = r(782034);
t.exports = function(t, e) {
  if (t._latestEditorState.getSelection().isCollapsed()) {
    e.preventDefault();
    return
  }
  t.setClipboard(n(t._latestEditorState))
}