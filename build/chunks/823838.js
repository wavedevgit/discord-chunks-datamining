/** Chunk was on web.js **/
/** chunk id: 823838, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk869639 = require("./869639.js"),
  Chunk573750 = require("./573750.js");
module.exports = function(e, t) {
  var n = e._latestEditorState,
    a = n.getSelection();
  if (!a.getHasFocus()) {
    var s = a.set("hasFocus", true);
    e.props.onFocus && e.props.onFocus(t), i.isBrowser("Chrome < 60.0.3081.0") ? e.update(r.forceSelection(n, s)) : e.update(r.acceptSelection(n, s))
  }
}