/** Chunk was on web.js **/
/** chunk id: 920932, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => f
});
var Chunk455419 = require("./455419.js"),
  Chunk746047 = require("./746047.js"),
  Chunk529665 = require("./529665.js"),
  Chunk601339 = require("./601339.js"),
  Chunk158821 = require("./158821.js"),
  Chunk154343 = require("./154343.js"),
  Chunk227399 = require("./227399.js");
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
    ...m
  } = (0, o.K)(e, t, n), {
    direction: h
  } = (0, c.j)();
  p && !((0, l.OV)() && "expandedKeys" in t) ? _["aria-rowindex"] = f.index + 1 + t.collection.headerRows.length : delete _["aria-rowindex"];
  let g = {};
  if ((0, l.OV)() && "expandedKeys" in t) {
    let e = t.keyMap.get(f.key);
    if (null != e) {
      var E, b, y, O, v, S, I, T, C, A;
      let n = (null == (E = e.props) ? true : E.UNSTABLE_childItems) || (null == (y = e.props) || null == (b = y.children) ? true : b.length) > t.userColumnCount;
      g = {
        onKeyDown: r => {
          r.key === u[h] && t.selectionManager.focusedKey === e.key && n && "all" !== t.expandedKeys && !t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), r.stopPropagation()) : r.key === d[h] && t.selectionManager.focusedKey === e.key && n && ("all" === t.expandedKeys || t.expandedKeys.has(e.key)) && (t.toggleKey(e.key), r.stopPropagation())
        },
        "aria-expanded": n ? "all" === t.expandedKeys || t.expandedKeys.has(f.key) : true,
        "aria-level": e.level,
        "aria-posinset": (null != (I = e.indexOfType) ? I : 0) + 1,
        "aria-setsize": e.level > 1 ? (null != (C = null == (O = (0, i.s)(null != (T = null == (v = t.keyMap.get(e.parentKey)) ? true : v.childNodes) ? T : [])) ? true : O.indexOfType) ? C : 0) + 1 : (null != (A = null == (S = (0, i.s)(t.collection.body.childNodes)) ? true : S.indexOfType) ? A : 0) + 1
      }
    }
  }
  let N = (0, a.fU)(f.props),
    P = m.hasAction ? N : {};
  return {
    rowProps: {
      ...(0, s.d)(_, g, P),
      "aria-labelledby": (0, r.u)(t, f.key)
    },
    ...m
  }
}