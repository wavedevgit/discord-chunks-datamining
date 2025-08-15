/** Chunk was on 91584 **/
/** chunk id: 66386, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk78351 = require("./78351.js"),
  Chunk102736 = require("./102736.js"),
  Chunk933585 = require("./933585.js"),
  Chunk665635 = require("./665635.js");
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