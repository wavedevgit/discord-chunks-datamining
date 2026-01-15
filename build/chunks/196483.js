/** Chunk was on web.js **/
/** chunk id: 196483, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk53529 = require("./53529.js"),
  Chunk887490 = require("./887490.js");
let a = 4e3;

function o(e, t) {
  let {
    apply: n,
    deleteBackward: a,
    deleteForward: o,
    deleteFragment: l,
    insertData: u,
    insertText: d,
    onChange: f
  } = e;

  function p(n) {
    let i = r.T.currentEntry(e);
    if (null != i && (i.mergeable = false), n >= e.history.stack.length) return;
    e.history.index = n;
    let a = r.T.currentEntry(e);
    t({
      newValue: a.value,
      newSelection: a.selection
    })
  }
  e.history = {
    index: 0,
    stack: []
  }, e.onChange = () => {
    let {
      history: t
    } = e;
    0 === t.stack.length && (t.stack = [c(e)], t.index = 0), null != e.selection && (r.T.currentEntry(e).selection = e.selection), h = null, f()
  }, e.undo = () => {
    e.history.index > 0 && p(e.history.index - 1)
  }, e.redo = () => {
    e.history.index < e.history.stack.length - 1 && p(e.history.index + 1)
  };
  let _ = null,
    h = null,
    m = null;
  return e.apply = t => {
    let {
      history: a
    } = e;
    n(t);
    let o = i.bN.richValue(e);
    o !== m && (0 === a.stack.length && (a.stack = [c(e)], a.index = 0), r.T.isSaving(e) && (s(e, t, _), _ = t), h = t, m = o)
  }, e.deleteBackward = t => {
    r.T.withSingleEntry(e, () => a(t))
  }, e.deleteForward = t => {
    r.T.withSingleEntry(e, () => o(t))
  }, e.deleteFragment = t => {
    r.T.withSingleEntry(e, () => l(t))
  }, e.insertText = t => {
    1 === t.length && (null == h ? true : h.type) === "remove_text" ? r.T.withMergedEntry(e, () => d(t)) : null != e.selection && i.M8.isExpanded(e.selection) ? r.T.withSingleEntry(e, () => d(t)) : d(t)
  }, e.insertData = t => {
    (null == h ? true : h.type) === "remove_text" ? r.T.withMergedEntry(e, () => u(t)): r.T.withSingleEntry(e, () => u(t))
  }, e
}

function s(e, t, n) {
  let i, {
      selection: a
    } = e,
    o = r.T.currentEntry(e),
    s = true,
    c = true;
  if ("insert_text" === t.type && 1 === t.text.length ? (i = "insert", c = !(("" === t.text || t.text.endsWith(" ")) && (null == n ? true : n.type) === "insert_text" && !("" === n.text && n.text.endsWith(" ")))) : "split_node" === t.type ? i = "insert" : "remove_text" === t.type && 1 === t.text.length ? i = "delete" : (i = "other", s = false, c = false), "set_selection" === t.type && null != o) {
    o.selection = a;
    return
  }
  s && l(o, i) ? r.T.insertOrMergeEntry(e, i, c) : r.T.insertEntry(e, i, c)
}

function l(e, t) {
  return !((null == e ? true : e.type) !== t || Date.now() - e.createdAt >= a)
}

function c(e) {
  return {
    type: "other",
    mergeable: false,
    createdAt: Date.now(),
    value: i.bN.richValue(e),
    selection: e.selection
  }
}