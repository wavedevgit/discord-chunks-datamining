/** Chunk was on web.js **/
/** chunk id: 34002, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk720218 = require("./720218.js"),
  Chunk384404 = require("./384404.js"),
  Chunk169774 = require("./169774.js"),
  Chunk520480 = require("./520480.js"),
  Chunk262279 = require("./262279.js"),
  Chunk284565 = require("./284565.js"),
  Chunk467159 = require("./467159.js"),
  Chunk843260 = require("./843260.js"),
  d = "'",
  f = "/",
  p = Chunk169774.isBrowser("Firefox");

function _(e) {
  return p && (e == d || e == f)
}

function h(e, t, n, a, o) {
  var s = r.replaceText(e.getCurrentContent(), e.getSelection(), t, n, a);
  return i.push(e, s, "insert-characters", o)
}
module.exports = function(e, t) {
  true !== e._pendingStateFromBeforeInput && (e.update(e._pendingStateFromBeforeInput), e._pendingStateFromBeforeInput = true);
  var n = e._latestEditorState,
    r = t.data;
  if (r) {
    if (e.props.handleBeforeInput && s(e.props.handleBeforeInput(r, n, t.timeStamp))) return void t.preventDefault();
    var a = n.getSelection(),
      d = a.getStartOffset(),
      f = a.getAnchorKey();
    if (!a.isCollapsed()) {
      t.preventDefault(), e.update(h(n, r, n.getCurrentInlineStyle(), o(n.getCurrentContent(), n.getSelection()), true));
      return
    }
    var p = h(n, r, n.getCurrentInlineStyle(), o(n.getCurrentContent(), n.getSelection()), false),
      m = false;
    if (m || (m = l(e._latestCommittedEditorState)), !m) {
      var g = n.getBlockTree(f),
        E = p.getBlockTree(f);
      m = g.size !== E.size || g.zip(E).some(function(e) {
        var t = e[0],
          n = e[1],
          i = t.get("start"),
          a = i + (i >= d ? r.length : 0),
          o = t.get("end"),
          s = o + (o >= d ? r.length : 0),
          l = n.get("start"),
          c = n.get("end"),
          u = n.get("decoratorKey");
        return t.get("decoratorKey") !== u || t.get("leaves").size !== n.get("leaves").size || a !== l || s !== c || null != u && c - l != o - i
      })
    }
    if (m || (m = _(r)), m || (m = c(p.getDirectionMap()).get(f) !== c(n.getDirectionMap()).get(f)), m) {
      t.preventDefault(), p = i.set(p, {
        forceSelection: true
      }), e.update(p);
      return
    }
    p = i.set(p, {
      nativelyRenderedContent: p.getCurrentContent()
    }), e._pendingStateFromBeforeInput = p, u(function() {
      true !== e._pendingStateFromBeforeInput && (e.update(e._pendingStateFromBeforeInput), e._pendingStateFromBeforeInput = true)
    })
  }
}