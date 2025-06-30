/** Chunk was on 8381 **/
"use strict";
var n = r(148727);
t.exports = function(t) {
  var e = t.getSelection();
  return e.isCollapsed() ? null : n(t.getCurrentContent(), e)
}