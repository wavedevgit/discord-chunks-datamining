/** Chunk was on 8381 **/
"use strict";
var n = r(458545);
t.exports = function(t, e) {
  if (t._latestEditorState.getSelection().isCollapsed()) return void e.preventDefault();
  t.setClipboard(n(t._latestEditorState))
}