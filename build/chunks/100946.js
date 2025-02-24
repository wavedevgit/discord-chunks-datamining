/** Chunk was on 68880 **/
"use strict";
var n = r(166763),
  i = r(133092);
t.exports = function(t) {
  var e = n.splitBlock(t.getCurrentContent(), t.getSelection());
  return i.push(t, e, "split-block")
}