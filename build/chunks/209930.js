/** Chunk was on 8381 **/
/** chunk id: 209930, original params: t,e,r (module,exports,require) **/
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

function h(t) {
  t._internalDrag = false;
  var e = t.editorContainer;
  if (e) {
    var r = new MouseEvent("mouseup", {
      view: l(e),
      bubbles: true,
      cancelable: true
    });
    e.dispatchEvent(r)
  }
}

function d(t, e, r) {
  var n = i.insertText(t.getCurrentContent(), e, r, t.getCurrentInlineStyle());
  return o.push(t, n, "insert-fragment")
}
module.exports = {
  onDragEnd: function(t) {
    t.exitCurrentMode(), h(t)
  },
  onDrop: function(t, e) {
    var r = new n(e.nativeEvent.dataTransfer),
      l = t._latestEditorState,
      g = function(t, e) {
        var r = null,
          n = null,
          i = u(t.currentTarget);
        if ("function" == typeof i.caretRangeFromPoint) {
          var o = i.caretRangeFromPoint(t.x, t.y);
          r = o.startContainer, n = o.startOffset
        } else {
          if (!t.rangeParent) return null;
          r = t.rangeParent, n = t.rangeOffset
        }
        r = p(r), n = p(n);
        var s = p(a(r));
        return c(e, s, n, s, n)
      }(e.nativeEvent, l);
    if (e.preventDefault(), t._dragCount = 0, t.exitCurrentMode(), null != g) {
      var y, v, m, _ = r.getFiles();
      if (_.length > 0) {
        if (t.props.handleDroppedFiles && f(t.props.handleDroppedFiles(g, _))) return;
        s(_, function(e) {
          e && t.update(d(l, g, e))
        });
        return
      }
      var b = t._internalDrag ? "internal" : "external";
      t.props.handleDrop && f(t.props.handleDrop(g, r, b)) || (t._internalDrag ? t.update((y = l, v = g, m = i.moveText(y.getCurrentContent(), y.getSelection(), v), o.push(y, m, "insert-fragment"))) : t.update(d(l, g, r.getText()))), h(t)
    }
  }
}