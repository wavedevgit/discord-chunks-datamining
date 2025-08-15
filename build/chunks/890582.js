/** Chunk was on 91584 **/
/** chunk id: 890582, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk102736 = require("./102736.js");
module.exports = function(t, e, r) {
  var i = n.undo(e);
  if ("spellcheck-change" === e.getLastChangeType()) {
    var o = i.getCurrentContent();
    r(n.set(i, {
      nativelyRenderedContent: o
    }));
    return
  }
  if (t.preventDefault(), !e.getNativelyRenderedContent()) return void r(i);
  r(n.set(e, {
    nativelyRenderedContent: null
  })), setTimeout(function() {
    r(i)
  }, 0)
}