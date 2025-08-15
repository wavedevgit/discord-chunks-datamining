/** Chunk was on 8381 **/
/** chunk id: 549157, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk172367 = require("./172367.js"),
  Chunk169774 = require("./169774.js");
module.exports = function(t, e) {
  var r = t._latestEditorState,
    o = r.getSelection();
  if (!o.getHasFocus()) {
    var a = o.set("hasFocus", true);
    t.props.onFocus && t.props.onFocus(e), i.isBrowser("Chrome < 60.0.3081.0") ? t.update(n.forceSelection(r, a)) : t.update(n.acceptSelection(r, a))
  }
}