/** Chunk was on web.js **/
/** chunk id: 631735, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk869639 = require("./869639.js");
module.exports = function(e, t, n) {
  var i = r.undo(t);
  if ("spellcheck-change" === t.getLastChangeType()) {
    var a = i.getCurrentContent();
    n(r.set(i, {
      nativelyRenderedContent: a
    }));
    return
  }(e.preventDefault(), t.getNativelyRenderedContent()) ? (n(r.set(t, {
    nativelyRenderedContent: null
  })), setTimeout(function() {
    n(i)
  }, 0)) : n(i)
}