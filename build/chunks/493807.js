/** Chunk was on web.js **/
/** chunk id: 493807, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk198392 = require("./198392.js"),
  Chunk720218 = require("./720218.js"),
  Chunk384404 = require("./384404.js"),
  Chunk466312 = require("./466312.js"),
  Chunk258329 = require("./258329.js"),
  Chunk527479 = require("./527479.js"),
  Chunk738719 = require("./738719.js"),
  Chunk131513 = require("./131513.js"),
  Chunk262279 = require("./262279.js"),
  Chunk467159 = require("./467159.js");

function p(e, t) {
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

function m(e, t) {
  var n = i.moveText(e.getCurrentContent(), e.getSelection(), t);
  return a.push(e, n, "insert-fragment")
}

function h(e, t, n) {
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
      var o = n.getFiles();
      if (o.length > 0) {
        if (e.props.handleDroppedFiles && d(e.props.handleDroppedFiles(a, o))) return;
        l(o, function(t) {
          t && e.update(h(i, a, t))
        });
        return
      }
      var s = e._internalDrag ? "internal" : "external";
      e.props.handleDrop && d(e.props.handleDrop(a, n, s)) || (e._internalDrag ? e.update(m(i, a)) : e.update(h(i, a, n.getText()))), _(e)
    }
  }
}