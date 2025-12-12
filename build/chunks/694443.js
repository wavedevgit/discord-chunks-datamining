/** Chunk was on web.js **/
/** chunk id: 694443, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk384404 = require("./384404.js");
module.exports = function(e, t, n) {
  var i = r.undo(t);
  if ("spellcheck-change" === t.getLastChangeType()) {
    var a = i.getCurrentContent();
    n(r.set(i, {
      nativelyRenderedContent: a
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