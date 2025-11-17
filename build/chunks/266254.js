/** Chunk was on web.js **/
/** chunk id: 266254, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk949235 = require("./949235.js"),
  Chunk384404 = require("./384404.js"),
  Chunk989317 = require("./989317.js"),
  Chunk708150 = require("./708150.js");
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
    s = o(n, a(e)),
    l = s.selectionState;
  l !== n.getSelection() && (n = s.needsRecovery ? i.forceSelection(n, l) : i.acceptSelection(n, l), e.update(n))
}