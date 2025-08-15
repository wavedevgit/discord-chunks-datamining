/** Chunk was on 8381 **/
/** chunk id: 536574, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk754387 = require("./754387.js"),
  Chunk172367 = require("./172367.js"),
  Chunk15543 = require("./15543.js"),
  Chunk683289 = require("./683289.js");
module.exports = function(t) {
  if (t._blockSelectEvents || t._latestEditorState !== t.props.editorState) {
    if (t._blockSelectEvents) {
      var e = t.props.editorState.getSelection();
      n.logBlockedSelectionEvent({
        anonymizedDom: "N/A",
        extraParams: JSON.stringify({
          stacktrace: Error().stack
        }),
        selectionState: JSON.stringify(e.toJS())
      })
    }
    return
  }
  var r = t.props.editorState,
    u = a(r, o(t)),
    s = u.selectionState;
  s !== r.getSelection() && (r = u.needsRecovery ? i.forceSelection(r, s) : i.acceptSelection(r, s), t.update(r))
}