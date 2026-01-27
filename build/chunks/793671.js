/** Chunk was on 38939 **/
/** chunk id: 793671, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk954055 = require("./954055.js"),
  Chunk869639 = require("./869639.js"),
  Chunk573750 = require("./573750.js"),
  Chunk197576 = require("./197576.js"),
  Chunk4323 = require("./4323.js"),
  Chunk621064 = require("./621064.js"),
  Chunk670200 = require("./670200.js"),
  Chunk314069 = require("./314069.js"),
  f = Chunk573750.isBrowser("Firefox");

function p(t, e, r, o, a) {
  var s = n.replaceText(t.getCurrentContent(), t.getSelection(), e, r, o);
  return i.push(t, s, "insert-characters", a)
}
module.exports = function(t, e) {
  true !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = true);
  var r = t._latestEditorState,
    n = e.data;
  if (n) {
    if (t.props.handleBeforeInput && s(t.props.handleBeforeInput(n, r, e.timeStamp))) return void e.preventDefault();
    var o = r.getSelection(),
      h = o.getStartOffset(),
      d = o.getAnchorKey();
    if (!o.isCollapsed()) {
      e.preventDefault(), t.update(p(r, n, r.getCurrentInlineStyle(), a(r.getCurrentContent(), r.getSelection()), true));
      return
    }
    var g = p(r, n, r.getCurrentInlineStyle(), a(r.getCurrentContent(), r.getSelection()), false),
      y = false;
    if (!(y = u(t._latestCommittedEditorState))) {
      var v = r.getBlockTree(d),
        m = g.getBlockTree(d);
      y = v.size !== m.size || v.zip(m).some(function(t) {
        var e = t[0],
          r = t[1],
          i = e.get("start"),
          o = i + (i >= h ? n.length : 0),
          a = e.get("end"),
          s = a + (a >= h ? n.length : 0),
          u = r.get("start"),
          c = r.get("end"),
          l = r.get("decoratorKey");
        return e.get("decoratorKey") !== l || e.get("leaves").size !== r.get("leaves").size || o !== u || s !== c || null != l && c - u != a - i
      })
    }
    if (y || (y = f && ("'" == n || "/" == n)), y || (y = c(g.getDirectionMap()).get(d) !== c(r.getDirectionMap()).get(d)), y) {
      e.preventDefault(), g = i.set(g, {
        forceSelection: true
      }), t.update(g);
      return
    }
    t._pendingStateFromBeforeInput = g = i.set(g, {
      nativelyRenderedContent: g.getCurrentContent()
    }), l(function() {
      true !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = true)
    })
  }
}