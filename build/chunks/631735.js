/** Chunk was on 38939 **/
/** chunk id: 631735, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk869639 = require("./869639.js");
module.exports = function(t, e, r) {
  var i = n.undo(e);
  if ("spellcheck-change" === e.getLastChangeType()) {
    var o = i.getCurrentContent();
    r(n.set(i, {
      nativelyRenderedContent: o
    }));
    return
  }(t.preventDefault(), e.getNativelyRenderedContent()) ? (r(n.set(e, {
    nativelyRenderedContent: null
  })), setTimeout(function() {
    r(i)
  }, 0)) : r(i)
}