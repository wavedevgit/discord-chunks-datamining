/** Chunk was on 8381 **/
/** chunk id: 973588, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk621796 = require("./621796.js"),
  Chunk172367 = require("./172367.js"),
  Chunk169774 = require("./169774.js"),
  Chunk596464 = require("./596464.js"),
  Chunk352582 = require("./352582.js"),
  Chunk358076 = require("./358076.js"),
  Chunk467159 = require("./467159.js"),
  Chunk843260 = require("./843260.js"),
  f = Chunk169774.isBrowser("Firefox");

function p(t, e, r, o, a) {
  var u = n.replaceText(t.getCurrentContent(), t.getSelection(), e, r, o);
  return i.push(t, u, "insert-characters", a)
}
module.exports = function(t, e) {
  true !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = true);
  var r = t._latestEditorState,
    n = e.data;
  if (n) {
    if (t.props.handleBeforeInput && u(t.props.handleBeforeInput(n, r, e.timeStamp))) return void e.preventDefault();
    var o = r.getSelection(),
      h = o.getStartOffset(),
      d = o.getAnchorKey();
    if (!o.isCollapsed()) {
      e.preventDefault(), t.update(p(r, n, r.getCurrentInlineStyle(), a(r.getCurrentContent(), r.getSelection()), true));
      return
    }
    var g = p(r, n, r.getCurrentInlineStyle(), a(r.getCurrentContent(), r.getSelection()), false),
      y = false;
    if (!(y = s(t._latestCommittedEditorState))) {
      var v = r.getBlockTree(d),
        m = g.getBlockTree(d);
      y = v.size !== m.size || v.zip(m).some(function(t) {
        var e = t[0],
          r = t[1],
          i = e.get("start"),
          o = i + (i >= h ? n.length : 0),
          a = e.get("end"),
          u = a + (a >= h ? n.length : 0),
          s = r.get("start"),
          c = r.get("end"),
          l = r.get("decoratorKey");
        return e.get("decoratorKey") !== l || e.get("leaves").size !== r.get("leaves").size || o !== s || u !== c || null != l && c - s != a - i
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