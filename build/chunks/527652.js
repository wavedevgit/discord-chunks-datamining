/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
var n = r(782034);
t.exports = function(t, e) {
  if (t._latestEditorState.getSelection().isCollapsed()) {
    e.preventDefault();
    return
  }
  t.setClipboard(n(t._latestEditorState))
}