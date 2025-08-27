/** Chunk was on web.js **/
/** chunk id: 542501, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk198392 = require("./198392.js"),
  Chunk309943 = require("./309943.js"),
  Chunk102736 = require("./102736.js"),
  Chunk273083 = require("./273083.js"),
  Chunk234343 = require("./234343.js"),
  Chunk99922 = require("./99922.js"),
  Chunk720620 = require("./720620.js"),
  Chunk894187 = require("./894187.js"),
  Chunk510898 = require("./510898.js"),
  Chunk467159 = require("./467159.js");

function _(e, t) {
  var n = null,
    r = null,
    i = s(e.currentTarget);
  if ("function" == typeof i.caretRangeFromPoint) {
    var a = i.caretRangeFromPoint(e.x, e.y);
    n = a.startContainer, r = a.startOffset
  } else {
    if (!e.rangeParent) return null;
    n = e.rangeParent, r = e.rangeOffset
  }
  n = f(n), r = f(r);
  var l = f(o(n));
  return c(t, l, r, l, r)
}

function p(e) {
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
    e.exitCurrentMode(), p(e)
  },
  onDrop: function(e, t) {
    var n = new r(t.nativeEvent.dataTransfer),
      i = e._latestEditorState,
      a = _(t.nativeEvent, i);
    if (t.preventDefault(), e._dragCount = 0, e.exitCurrentMode(), null != a) {
      var o = n.getFiles();
      if (o.length > 0) {
        if (e.props.handleDroppedFiles && d(e.props.handleDroppedFiles(a, o))) return;
        l(o, function(t) {
          t && e.update(m(i, a, t))
        });
        return
      }
      var s = e._internalDrag ? "internal" : "external";
      e.props.handleDrop && d(e.props.handleDrop(a, n, s)) || (e._internalDrag ? e.update(h(i, a)) : e.update(m(i, a, n.getText()))), p(e)
    }
  }
}