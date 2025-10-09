/** Chunk was on web.js **/
/** chunk id: 87440, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => o
});
var Chunk82462 = require("./82462.js"),
  Chunk716601 = require("./716601.js"),
  Chunk844898 = require("./844898.js");

function o(e, t, n) {
  var o, s;
  let {
    node: l,
    isVirtualized: c,
    shouldSelectOnPressUp: u,
    onAction: d
  } = e, {
    actions: f,
    shouldSelectOnPressUp: _
  } = r.B.get(t), p = f.onRowAction ? () => {
    var e;
    return null == (e = f.onRowAction) ? true : e.call(f, l.key)
  } : d, {
    itemProps: h,
    ...m
  } = (0, a.C)({
    selectionManager: t.selectionManager,
    key: l.key,
    ref: n,
    isVirtualized: c,
    shouldSelectOnPressUp: _ || u,
    onAction: p || (null == l || null == (o = l.props) ? true : o.onAction) ? (0, i.t)(null == l || null == (s = l.props) ? true : s.onAction, p) : true,
    isDisabled: 0 === t.collection.size
  }), g = t.selectionManager.isSelected(l.key), E = {
    role: "row",
    "aria-selected": "none" !== t.selectionManager.selectionMode ? g : true,
    "aria-disabled": m.isDisabled || true,
    ...h
  };
  return c && (E["aria-rowindex"] = l.index + 1), {
    rowProps: E,
    ...m
  }
}