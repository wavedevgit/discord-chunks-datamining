/** Chunk was on 63990 **/
"use strict";
var n = r(148727);
t.exports = function(t) {
  var e = t.getSelection();
  return e.isCollapsed() ? null : n(t.getCurrentContent(), e)
}