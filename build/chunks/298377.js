/** Chunk was on web.js **/
/** chunk id: 298377, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk224507 = require("./224507.js"),
  Chunk371926 = require("./371926.js"),
  Chunk332761 = require("./332761.js"),
  Chunk132716 = require("./132716.js"),
  Chunk803082 = require("./803082.js"),
  Chunk790637 = require("./790637.js"),
  Chunk853590 = require("./853590.js");
let u = {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  d = {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  };

function f(e, t, n) {
  let {
    node: f,
    isVirtualized: p
  } = e, {
    rowProps: _,
    ...h
  } = (0, a.s)(e, t, n), {
    direction: m
  } = (0, c.Y)();
  p && !((0, l.D5)() && "expandedKeys" in t) ? _["aria-rowindex"] = f.index + 1 + t.collection.headerRows.length : delete _["aria-rowindex"];
  let g = {};
  if ((0, l.D5)() && "expandedKeys" in t) {
    let e = t.keyMap.get(f.key);
    if (null != e) {
      var E, y, b, O, v, A, I, S, T, C;
      let n = (null == (E = e.props) ? true : E.UNSTABLE_childItems) || (null == (b = e.props) || null == (y = b.children) ? true : y.length) > t.userColumnCount;
      g = {
        onKeyDown: r => {
          r.key === u[m] && t.selectionManager.focusedKey === e.key && n && "all" !== t.expandedKeys && !t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), r.stopPropagation()) : r.key === d[m] && t.selectionManager.focusedKey === e.key && n && ("all" === t.expandedKeys || t.expandedKeys.has(e.key)) && (t.toggleKey(e.key), r.stopPropagation())
        },
        "aria-expanded": n ? "all" === t.expandedKeys || t.expandedKeys.has(f.key) : true,
        "aria-level": e.level,
        "aria-posinset": (null != (I = e.indexOfType) ? I : 0) + 1,
        "aria-setsize": e.level > 1 ? (null != (T = null == (O = (0, i.W)(null != (S = null == (v = t.keyMap.get(e.parentKey)) ? true : v.childNodes) ? S : [])) ? true : O.indexOfType) ? T : 0) + 1 : (null != (C = null == (A = (0, i.W)(t.collection.body.childNodes)) ? true : A.indexOfType) ? C : 0) + 1
      }
    }
  }
  let N = (0, o.HI)(f.props),
    w = h.hasAction ? N : {};
  return {
    rowProps: {
      ...(0, s.v)(_, g, w),
      "aria-labelledby": (0, r.VJ)(t, f.key)
    },
    ...h
  }
}