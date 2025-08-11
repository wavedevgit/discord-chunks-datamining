/** Chunk was on web.js **/
/** chunk id: 536574, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk754387 = require("./754387.js"),
  Chunk172367 = require("./172367.js"),
  Chunk15543 = require("./15543.js"),
  Chunk683289 = require("./683289.js");
module.exports = function(e) {
  if (e._blockSelectEvents || e._latestEditorState !== e.props.editorState) {
    if (e._blockSelectEvents) {
      var t = e.props.editorState.getSelection();
      r.logBlockedSelectionEvent({
        anonymizedDom: "N/A",
        extraParams: JSON.stringify({
          stacktrace: Error().stack
        }),
        selectionState: JSON.stringify(t.toJS())
      })
    }
    return
  }
  var n = e.props.editorState,
    s = a(n, o(e)),
    l = s.selectionState;
  l !== n.getSelection() && (n = s.needsRecovery ? i.forceSelection(n, l) : i.acceptSelection(n, l), e.update(n))
}