/** Chunk was on web.js **/
/** chunk id: 327229, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk743595 = require("./743595.js"),
  Chunk954055 = require("./954055.js"),
  Chunk869639 = require("./869639.js"),
  Chunk587321 = require("./587321.js"),
  Chunk505122 = require("./505122.js"),
  Chunk809206 = require("./809206.js"),
  Chunk692001 = require("./692001.js"),
  Chunk882270 = require("./882270.js"),
  Chunk4323 = require("./4323.js"),
  Chunk670200 = require("./670200.js");

function p(e, t) {
  var n = null,
    r = null,
    i = o(e.currentTarget);
  if ("function" == typeof i.caretRangeFromPoint) {
    var a = i.caretRangeFromPoint(e.x, e.y);
    n = a.startContainer, r = a.startOffset
  } else {
    if (!e.rangeParent) return null;
    n = e.rangeParent, r = e.rangeOffset
  }
  n = f(n), r = f(r);
  var l = f(s(n));
  return c(t, l, r, l, r)
}

function _(e) {
  e._internalDrag = false;
  var t = e.editorContainer;
  if (t) {
    var n = new MouseEvent("mouseup", {
      view: u(t),
      bubbles: true,
      cancelable: true
    });
    t.dispatchEvent(n)
  }
}

function h(e, t) {
  var n = i.moveText(e.getCurrentContent(), e.getSelection(), t);
  return a.push(e, n, "insert-fragment")
}

function m(e, t, n) {
  var r = i.insertText(e.getCurrentContent(), t, n, e.getCurrentInlineStyle());
  return a.push(e, r, "insert-fragment")
}
module.exports = {
  onDragEnd: function(e) {
    e.exitCurrentMode(), _(e)
  },
  onDrop: function(e, t) {
    var n = new r(t.nativeEvent.dataTransfer),
      i = e._latestEditorState,
      a = p(t.nativeEvent, i);
    if (t.preventDefault(), e._dragCount = 0, e.exitCurrentMode(), null != a) {
      var s = n.getFiles();
      if (s.length > 0) {
        if (e.props.handleDroppedFiles && d(e.props.handleDroppedFiles(a, s))) return;
        l(s, function(t) {
          t && e.update(m(i, a, t))
        });
        return
      }
      var o = e._internalDrag ? "internal" : "external";
      e.props.handleDrop && d(e.props.handleDrop(a, n, o)) || (e._internalDrag ? e.update(h(i, a)) : e.update(m(i, a, n.getText()))), _(e)
    }
  }
}