/** Chunk was on web.js **/
/** chunk id: 913728, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk186306 = require("./186306.js"),
  Chunk711371 = require("./711371.js");
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
    let i = r.o.currentEntry(e);
    if (null != i && (i.mergeable = false), n >= e.history.stack.length) return;
    e.history.index = n;
    let a = r.o.currentEntry(e);
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
    0 === t.stack.length && (t.stack = [c(e)], t.index = 0), null != e.selection && (r.o.currentEntry(e).selection = e.selection), h = null, f()
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
    let o = i.VW.richValue(e);
    o !== m && (0 === a.stack.length && (a.stack = [c(e)], a.index = 0), r.o.isSaving(e) && (s(e, t, _), _ = t), h = t, m = o)
  }, e.deleteBackward = t => {
    r.o.withSingleEntry(e, () => a(t))
  }, e.deleteForward = t => {
    r.o.withSingleEntry(e, () => o(t))
  }, e.deleteFragment = t => {
    r.o.withSingleEntry(e, () => l(t))
  }, e.insertText = t => {
    1 === t.length && (null == h ? true : h.type) === "remove_text" ? r.o.withMergedEntry(e, () => d(t)) : null != e.selection && i.ZF.isExpanded(e.selection) ? r.o.withSingleEntry(e, () => d(t)) : d(t)
  }, e.insertData = t => {
    (null == h ? true : h.type) === "remove_text" ? r.o.withMergedEntry(e, () => u(t)): r.o.withSingleEntry(e, () => u(t))
  }, e
}

function s(e, t, n) {
  let i, {
      selection: a
    } = e,
    o = r.o.currentEntry(e),
    s = true,
    c = true;
  if ("insert_text" === t.type && 1 === t.text.length ? (i = "insert", c = !(("" === t.text || t.text.endsWith(" ")) && (null == n ? true : n.type) === "insert_text" && !("" === n.text && n.text.endsWith(" ")))) : "split_node" === t.type ? i = "insert" : "remove_text" === t.type && 1 === t.text.length ? i = "delete" : (i = "other", s = false, c = false), "set_selection" === t.type && null != o) {
    o.selection = a;
    return
  }
  s && l(o, i) ? r.o.insertOrMergeEntry(e, i, c) : r.o.insertEntry(e, i, c)
}

function l(e, t) {
  return !((null == e ? true : e.type) !== t || Date.now() - e.createdAt >= a)
}

function c(e) {
  return {
    type: "other",
    mergeable: false,
    createdAt: Date.now(),
    value: i.VW.richValue(e),
    selection: e.selection
  }
}