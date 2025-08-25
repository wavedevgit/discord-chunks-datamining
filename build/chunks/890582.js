/** Chunk was on web.js **/
/** chunk id: 890582, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk102736 = require("./102736.js");
module.exports = function(e, t, n) {
  var i = r.undo(t);
  if ("spellcheck-change" === t.getLastChangeType()) {
    var o = i.getCurrentContent();
    n(r.set(i, {
      nativelyRenderedContent: o
    }));
    return
  }
  if (e.preventDefault(), !t.getNativelyRenderedContent()) return void n(i);
  n(r.set(t, {
    nativelyRenderedContent: null
  })), setTimeout(function() {
    n(i)
  }, 0)
}