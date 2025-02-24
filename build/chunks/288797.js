/** Chunk was on 68880 **/
"use strict";
var n = r(133092);
t.exports = function(t, e, r) {
  var i = n.undo(e);
  if ("spellcheck-change" === e.getLastChangeType()) {
    var o = i.getCurrentContent();
    r(n.set(i, {
      nativelyRenderedContent: o
    }));
    return
  }
  if (t.preventDefault(), !e.getNativelyRenderedContent()) {
    r(i);
    return
  }
  r(n.set(e, {
    nativelyRenderedContent: null
  })), setTimeout(function() {
    r(i)
  }, 0)
}