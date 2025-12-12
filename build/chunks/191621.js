/** Chunk was on web.js **/
/** chunk id: 191621, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk384404 = require("./384404.js"),
  Chunk169774 = require("./169774.js");
module.exports = function(e, t) {
  var n = e._latestEditorState,
    o = n.getSelection();
  if (!o.getHasFocus()) {
    var a = o.set("hasFocus", true);
    e.props.onFocus && e.props.onFocus(t), i.isBrowser("Chrome < 60.0.3081.0") ? e.update(r.forceSelection(n, a)) : e.update(r.acceptSelection(n, a))
  }
}