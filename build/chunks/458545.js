/** Chunk was on 68856 **/
"use strict";
var n = r(148727);
t.exports = function(t) {
  var e = t.getSelection();
  return e.isCollapsed() ? null : n(t.getCurrentContent(), e)
}