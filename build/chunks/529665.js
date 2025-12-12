/** Chunk was on web.js **/
/** chunk id: 529665, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => a
});
var Chunk17042 = require("./17042.js"),
  Chunk929767 = require("./929767.js"),
  Chunk624641 = require("./624641.js");

function a(e, t, n) {
  var a, s;
  let {
    node: l,
    isVirtualized: c,
    shouldSelectOnPressUp: u,
    onAction: d
  } = e, {
    actions: f,
    shouldSelectOnPressUp: p
  } = r.B.get(t), _ = f.onRowAction ? () => {
    var e;
    return null == (e = f.onRowAction) ? true : e.call(f, l.key)
  } : d, {
    itemProps: m,
    ...h
  } = (0, o.C)({
    selectionManager: t.selectionManager,
    key: l.key,
    ref: n,
    isVirtualized: c,
    shouldSelectOnPressUp: p || u,
    onAction: _ || (null == l || null == (a = l.props) ? true : a.onAction) ? (0, i.t)(null == l || null == (s = l.props) ? true : s.onAction, _) : true,
    isDisabled: 0 === t.collection.size
  }), g = t.selectionManager.isSelected(l.key), E = {
    role: "row",
    "aria-selected": "none" !== t.selectionManager.selectionMode ? g : true,
    "aria-disabled": h.isDisabled || true,
    ...m
  };
  return c && (E["aria-rowindex"] = l.index + 1), {
    rowProps: E,
    ...h
  }
}