/** Chunk was on web.js **/
/** chunk id: 209930, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk198392 = require("./198392.js"),
  Chunk621796 = require("./621796.js"),
  Chunk172367 = require("./172367.js"),
  Chunk630685 = require("./630685.js"),
  Chunk961271 = require("./961271.js"),
  Chunk992456 = require("./992456.js"),
  Chunk534978 = require("./534978.js"),
  Chunk319630 = require("./319630.js"),
  Chunk352582 = require("./352582.js"),
  Chunk467159 = require("./467159.js");

function _(e, t) {
  var n = null,
    r = null,
    i = s(e.currentTarget);
  if ("function" == typeof i.caretRangeFromPoint) {
    var o = i.caretRangeFromPoint(e.x, e.y);
    n = o.startContainer, r = o.startOffset
  } else {
    if (!e.rangeParent) return null;
    n = e.rangeParent, r = e.rangeOffset
  }
  n = f(n), r = f(r);
  var l = f(a(n));
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
  return o.push(e, n, "insert-fragment")
}

function m(e, t, n) {
  var r = i.insertText(e.getCurrentContent(), t, n, e.getCurrentInlineStyle());
  return o.push(e, r, "insert-fragment")
}
module.exports = {
  onDragEnd: function(e) {
    e.exitCurrentMode(), p(e)
  },
  onDrop: function(e, t) {
    var n = new r(t.nativeEvent.dataTransfer),
      i = e._latestEditorState,
      o = _(t.nativeEvent, i);
    if (t.preventDefault(), e._dragCount = 0, e.exitCurrentMode(), null != o) {
      var a = n.getFiles();
      if (a.length > 0) {
        if (e.props.handleDroppedFiles && d(e.props.handleDroppedFiles(o, a))) return;
        l(a, function(t) {
          t && e.update(m(i, o, t))
        });
        return
      }
      var s = e._internalDrag ? "internal" : "external";
      e.props.handleDrop && d(e.props.handleDrop(o, n, s)) || (e._internalDrag ? e.update(h(i, o)) : e.update(m(i, o, n.getText()))), p(e)
    }
  }
}