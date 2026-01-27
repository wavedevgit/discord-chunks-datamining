/** Chunk was on 38939 **/
/** chunk id: 327229, original params: t,e,r (module,exports,require) **/
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
          i = s(t.currentTarget);
        if ("function" == typeof i.caretRangeFromPoint) {
          var o = i.caretRangeFromPoint(t.x, t.y);
          r = o.startContainer, n = o.startOffset
        } else {
          if (!t.rangeParent) return null;
          r = t.rangeParent, n = t.rangeOffset
        }
        r = p(r), n = p(n);
        var u = p(a(r));
        return c(e, u, n, u, n)
      }(e.nativeEvent, l);
    if (e.preventDefault(), t._dragCount = 0, t.exitCurrentMode(), null != g) {
      var y, v, m, _ = r.getFiles();
      if (_.length > 0) {
        if (t.props.handleDroppedFiles && f(t.props.handleDroppedFiles(g, _))) return;
        u(_, function(e) {
          e && t.update(d(l, g, e))
        });
        return
      }
      var b = t._internalDrag ? "internal" : "external";
      t.props.handleDrop && f(t.props.handleDrop(g, r, b)) || (t._internalDrag ? t.update((y = l, v = g, m = i.moveText(y.getCurrentContent(), y.getSelection(), v), o.push(y, m, "insert-fragment"))) : t.update(d(l, g, r.getText()))), h(t)
    }
  }
}