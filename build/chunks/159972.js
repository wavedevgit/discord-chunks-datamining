/** Chunk was on web.js **/
/** chunk id: 159972, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => f
});
var Chunk709629 = require("./709629.js"),
  Chunk346417 = require("./346417.js"),
  Chunk87440 = require("./87440.js"),
  Chunk132979 = require("./132979.js"),
  Chunk586235 = require("./586235.js"),
  Chunk154343 = require("./154343.js"),
  Chunk960095 = require("./960095.js");
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
    isVirtualized: _
  } = e, {
    rowProps: p,
    ...h
  } = (0, a.K)(e, t, n), {
    direction: m
  } = (0, c.j)();
  _ && !((0, l.OV)() && "expandedKeys" in t) ? p["aria-rowindex"] = f.index + 1 + t.collection.headerRows.length : delete p["aria-rowindex"];
  let g = {};
  if ((0, l.OV)() && "expandedKeys" in t) {
    let e = t.keyMap.get(f.key);
    if (null != e) {
      var E, b, y, O, v, I, T, S, A, C;
      let n = (null == (E = e.props) ? true : E.UNSTABLE_childItems) || (null == (y = e.props) || null == (b = y.children) ? true : b.length) > t.userColumnCount;
      g = {
        onKeyDown: r => {
          r.key === u[m] && t.selectionManager.focusedKey === e.key && n && "all" !== t.expandedKeys && !t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), r.stopPropagation()) : r.key === d[m] && t.selectionManager.focusedKey === e.key && n && ("all" === t.expandedKeys || t.expandedKeys.has(e.key)) && (t.toggleKey(e.key), r.stopPropagation())
        },
        "aria-expanded": n ? "all" === t.expandedKeys || t.expandedKeys.has(f.key) : true,
        "aria-level": e.level,
        "aria-posinset": (null != (T = e.indexOfType) ? T : 0) + 1,
        "aria-setsize": e.level > 1 ? (null != (A = null == (O = (0, i.s)(null != (S = null == (v = t.keyMap.get(e.parentKey)) ? true : v.childNodes) ? S : [])) ? true : O.indexOfType) ? A : 0) + 1 : (null != (C = null == (I = (0, i.s)(t.collection.body.childNodes)) ? true : I.indexOfType) ? C : 0) + 1
      }
    }
  }
  let N = (0, o.fU)(f.props),
    R = h.hasAction ? N : {};
  return {
    rowProps: {
      ...(0, s.d)(p, g, R),
      "aria-labelledby": (0, r.u)(t, f.key)
    },
    ...h
  }
}