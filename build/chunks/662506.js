/** Chunk was on web.js **/
/** chunk id: 662506, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk309943 = require("./309943.js"),
  Chunk102736 = require("./102736.js"),
  Chunk169774 = require("./169774.js"),
  Chunk878694 = require("./878694.js"),
  Chunk510898 = require("./510898.js"),
  Chunk177478 = require("./177478.js"),
  Chunk467159 = require("./467159.js"),
  Chunk843260 = require("./843260.js"),
  d = "'",
  f = "/",
  _ = Chunk169774.isBrowser("Firefox");

function p(e) {
  return _ && (e == d || e == f)
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
    var _ = h(n, r, n.getCurrentInlineStyle(), o(n.getCurrentContent(), n.getSelection()), false),
      m = false;
    if (m || (m = l(e._latestCommittedEditorState)), !m) {
      var g = n.getBlockTree(f),
        E = _.getBlockTree(f);
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
    if (m || (m = p(r)), m || (m = c(_.getDirectionMap()).get(f) !== c(n.getDirectionMap()).get(f)), m) {
      t.preventDefault(), _ = i.set(_, {
        forceSelection: true
      }), e.update(_);
      return
    }
    _ = i.set(_, {
      nativelyRenderedContent: _.getCurrentContent()
    }), e._pendingStateFromBeforeInput = _, u(function() {
      true !== e._pendingStateFromBeforeInput && (e.update(e._pendingStateFromBeforeInput), e._pendingStateFromBeforeInput = true)
    })
  }
}