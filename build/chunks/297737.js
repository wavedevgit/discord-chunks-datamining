/** Chunk was on web.js **/
/** chunk id: 297737, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => f
});
var Chunk406647 = require("./406647.js"),
  Chunk785772 = require("./785772.js"),
  Chunk740323 = require("./740323.js"),
  Chunk900197 = require("./900197.js"),
  Chunk43341 = require("./43341.js"),
  Chunk154343 = require("./154343.js"),
  Chunk594886 = require("./594886.js");
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
      var E, b, y, O, v, I, S, T, A, C;
      let n = (null == (E = e.props) ? true : E.UNSTABLE_childItems) || (null == (y = e.props) || null == (b = y.children) ? true : b.length) > t.userColumnCount;
      g = {
        onKeyDown: r => {
          r.key === u[m] && t.selectionManager.focusedKey === e.key && n && "all" !== t.expandedKeys && !t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), r.stopPropagation()) : r.key === d[m] && t.selectionManager.focusedKey === e.key && n && ("all" === t.expandedKeys || t.expandedKeys.has(e.key)) && (t.toggleKey(e.key), r.stopPropagation())
        },
        "aria-expanded": n ? "all" === t.expandedKeys || t.expandedKeys.has(f.key) : true,
        "aria-level": e.level,
        "aria-posinset": (null != (S = e.indexOfType) ? S : 0) + 1,
        "aria-setsize": e.level > 1 ? (null != (A = null == (O = (0, i.s)(null != (T = null == (v = t.keyMap.get(e.parentKey)) ? true : v.childNodes) ? T : [])) ? true : O.indexOfType) ? A : 0) + 1 : (null != (C = null == (I = (0, i.s)(t.collection.body.childNodes)) ? true : I.indexOfType) ? C : 0) + 1
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