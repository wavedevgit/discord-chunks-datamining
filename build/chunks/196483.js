/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(53529),
  i = n(887490);
let o = 4e3;

function a(e, t) {
  let {
    apply: n,
    deleteBackward: o,
    deleteForward: a,
    deleteFragment: l,
    insertData: u,
    insertText: d,
    onChange: f
  } = e;

  function p(n) {
    let i = r.T.currentEntry(e);
    if (null != i && (i.mergeable = !1), n >= e.history.stack.length) return;
    e.history.index = n;
    let o = r.T.currentEntry(e);
    t({
      newValue: o.value,
      newSelection: o.selection
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
      history: o
    } = e;
    n(t);
    let a = i.bN.richValue(e);
    a !== m && (0 === o.stack.length && (o.stack = [c(e)], o.index = 0), r.T.isSaving(e) && (s(e, t, _), _ = t), h = t, m = a)
  }, e.deleteBackward = t => {
    r.T.withSingleEntry(e, () => o(t))
  }, e.deleteForward = t => {
    r.T.withSingleEntry(e, () => a(t))
  }, e.deleteFragment = t => {
    r.T.withSingleEntry(e, () => l(t))
  }, e.insertText = t => {
    1 === t.length && (null == h ? void 0 : h.type) === "remove_text" ? r.T.withMergedEntry(e, () => d(t)) : null != e.selection && i.M8.isExpanded(e.selection) ? r.T.withSingleEntry(e, () => d(t)) : d(t)
  }, e.insertData = t => {
    (null == h ? void 0 : h.type) === "remove_text" ? r.T.withMergedEntry(e, () => u(t)): r.T.withSingleEntry(e, () => u(t))
  }, e
}

function s(e, t, n) {
  let i;
  let {
    selection: o
  } = e, a = r.T.currentEntry(e), s = !0, c = !0;
  if ("insert_text" === t.type && 1 === t.text.length ? (i = "insert", c = !(("" === t.text || t.text.endsWith(" ")) && (null == n ? void 0 : n.type) === "insert_text" && !("" === n.text && n.text.endsWith(" ")))) : "split_node" === t.type ? i = "insert" : "remove_text" === t.type && 1 === t.text.length ? i = "delete" : (i = "other", s = !1, c = !1), "set_selection" === t.type && null != a) {
    a.selection = o;
    return
  }
  s && l(a, i) ? r.T.insertOrMergeEntry(e, i, c) : r.T.insertEntry(e, i, c)
}

function l(e, t) {
  return !((null == e ? void 0 : e.type) !== t || Date.now() - e.createdAt >= o)
}

function c(e) {
  return {
    type: "other",
    mergeable: !1,
    createdAt: Date.now(),
    value: i.bN.richValue(e),
    selection: e.selection
  }
}