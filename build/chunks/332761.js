/** Chunk was on web.js **/
/** chunk id: 332761, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => o
});
var Chunk966209 = require("./966209.js"),
  Chunk260431 = require("./260431.js"),
  Chunk404108 = require("./404108.js");

function o(e, t, n) {
  var o, s;
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
    itemProps: h,
    ...m
  } = (0, a.p)({
    selectionManager: t.selectionManager,
    key: l.key,
    ref: n,
    isVirtualized: c,
    shouldSelectOnPressUp: p || u,
    onAction: _ || (null == l || null == (o = l.props) ? true : o.onAction) ? (0, i.c)(null == l || null == (s = l.props) ? true : s.onAction, _) : true,
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