/** Chunk was on web.js **/
/** chunk id: 66386, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk78351 = require("./78351.js"),
  Chunk102736 = require("./102736.js"),
  Chunk933585 = require("./933585.js"),
  Chunk665635 = require("./665635.js");
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