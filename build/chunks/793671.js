/** Chunk was on web.js **/
/** chunk id: 793671, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk954055 = require("./954055.js"),
  Chunk869639 = require("./869639.js"),
  Chunk573750 = require("./573750.js"),
  Chunk197576 = require("./197576.js"),
  Chunk4323 = require("./4323.js"),
  Chunk621064 = require("./621064.js"),
  Chunk670200 = require("./670200.js"),
  Chunk314069 = require("./314069.js"),
  d = "'",
  f = "/",
  p = Chunk573750.isBrowser("Firefox");

function _(e) {
  return p && (e == d || e == f)
}

function h(e, t, n, a, s) {
  var o = r.replaceText(e.getCurrentContent(), e.getSelection(), t, n, a);
  return i.push(e, o, "insert-characters", s)
}
module.exports = function(e, t) {
  true !== e._pendingStateFromBeforeInput && (e.update(e._pendingStateFromBeforeInput), e._pendingStateFromBeforeInput = true);
  var n = e._latestEditorState,
    r = t.data;
  if (r) {
    if (e.props.handleBeforeInput && o(e.props.handleBeforeInput(r, n, t.timeStamp))) return void t.preventDefault();
    var a = n.getSelection(),
      d = a.getStartOffset(),
      f = a.getAnchorKey();
    if (!a.isCollapsed()) {
      t.preventDefault(), e.update(h(n, r, n.getCurrentInlineStyle(), s(n.getCurrentContent(), n.getSelection()), true));
      return
    }
    var p = h(n, r, n.getCurrentInlineStyle(), s(n.getCurrentContent(), n.getSelection()), false),
      m = false;
    if (m || (m = l(e._latestCommittedEditorState)), !m) {
      var g = n.getBlockTree(f),
        E = p.getBlockTree(f);
      m = g.size !== E.size || g.zip(E).some(function(e) {
        var t = e[0],
          n = e[1],
          i = t.get("start"),
          a = i + (i >= d ? r.length : 0),
          s = t.get("end"),
          o = s + (s >= d ? r.length : 0),
          l = n.get("start"),
          c = n.get("end"),
          u = n.get("decoratorKey");
        return t.get("decoratorKey") !== u || t.get("leaves").size !== n.get("leaves").size || a !== l || o !== c || null != u && c - l != s - i
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