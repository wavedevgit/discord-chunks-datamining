/** Chunk was on 38939 **/
/** chunk id: 823838, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk869639 = require("./869639.js"),
  Chunk573750 = require("./573750.js");
module.exports = function(t, e) {
  var r = t._latestEditorState,
    o = r.getSelection();
  if (!o.getHasFocus()) {
    var a = o.set("hasFocus", true);
    t.props.onFocus && t.props.onFocus(e), i.isBrowser("Chrome < 60.0.3081.0") ? t.update(n.forceSelection(r, a)) : t.update(n.acceptSelection(r, a))
  }
}