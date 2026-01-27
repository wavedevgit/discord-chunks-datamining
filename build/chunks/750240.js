/** Chunk was on 38939 **/
/** chunk id: 750240, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk747105 = require("./747105.js"),
  Chunk869639 = require("./869639.js"),
  Chunk575641 = require("./575641.js"),
  Chunk644485 = require("./644485.js");
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
    s = a(r, o(t)),
    u = s.selectionState;
  u !== r.getSelection() && (r = s.needsRecovery ? i.forceSelection(r, u) : i.acceptSelection(r, u), t.update(r))
}