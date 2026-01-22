/** Chunk was on web.js **/
/** chunk id: 750240, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk747105 = require("./747105.js"),
  Chunk869639 = require("./869639.js"),
  Chunk575641 = require("./575641.js"),
  Chunk644485 = require("./644485.js");
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
    o = s(n, a(e)),
    l = o.selectionState;
  l !== n.getSelection() && (n = o.needsRecovery ? i.forceSelection(n, l) : i.acceptSelection(n, l), e.update(n))
}