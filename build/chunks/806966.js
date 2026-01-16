/** Chunk was on web.js **/
/** chunk id: 806966, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Wq: () => d,
  Xn: () => f,
  ZN: () => u,
  c: () => o,
  kJ: () => c
});
var Chunk110859 = require("./110859.js"),
  Chunk524550 = require("./524550.js"),
  Chunk731965 = require("./731965.js");
let o = false,
  s = Object.freeze({
    inspectedExpressionPosition: {
      rowIndex: 0,
      columnIndex: 0
    },
    activeCategoryIndex: 0,
    searchPlaceholder: null,
    bottomPosition: null
  });

function l() {
  let e = (0, i.F)()((0, r.XR)(e => s)),
    t = () => e.getState(),
    n = (t, n, r) => {
      (0, a.j)(() => e.setState({
        inspectedExpressionPosition: {
          rowIndex: n,
          columnIndex: t,
          source: r
        }
      }))
    },
    o = t => {
      (0, a.j)(() => e.setState({
        activeCategoryIndex: t
      }))
    },
    l = t => {
      (0, a.j)(() => e.setState({
        searchPlaceholder: t
      }))
    },
    c = t => {
      (0, a.j)(() => e.setState({
        bottomPosition: t
      }))
    },
    u = () => {
      (0, a.j)(() => e.setState(s))
    },
    d = (t, n) => e.subscribe(t, n);
  return {
    useStore: e,
    getState: t,
    subscribe: d,
    setInspectedExpressionPosition: n,
    setActiveCategoryIndex: o,
    setSearchPlaceholder: l,
    resetStoreState: u,
    setBottomPosition: c
  }
}
let c = l(),
  u = l(),
  d = l(),
  f = l()