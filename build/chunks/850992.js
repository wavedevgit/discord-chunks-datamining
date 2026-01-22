/** Chunk was on web.js **/
/** chunk id: 850992, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LS: () => f,
  LW: () => d,
  Om: () => c,
  Uk: () => s,
  bM: () => u
});
var Chunk499867 = require("./499867.js"),
  Chunk265690 = require("./265690.js"),
  Chunk121894 = require("./121894.js");
let s = false,
  o = Object.freeze({
    inspectedExpressionPosition: {
      rowIndex: 0,
      columnIndex: 0
    },
    activeCategoryIndex: 0,
    searchPlaceholder: null,
    bottomPosition: null
  });

function l() {
  let e = (0, i.h)()((0, r.eh)(e => o)),
    t = () => e.getState(),
    n = (t, n, r) => {
      (0, a.r)(() => e.setState({
        inspectedExpressionPosition: {
          rowIndex: n,
          columnIndex: t,
          source: r
        }
      }))
    },
    s = t => {
      (0, a.r)(() => e.setState({
        activeCategoryIndex: t
      }))
    },
    l = t => {
      (0, a.r)(() => e.setState({
        searchPlaceholder: t
      }))
    },
    c = t => {
      (0, a.r)(() => e.setState({
        bottomPosition: t
      }))
    },
    u = () => {
      (0, a.r)(() => e.setState(o))
    },
    d = (t, n) => e.subscribe(t, n);
  return {
    useStore: e,
    getState: t,
    subscribe: d,
    setInspectedExpressionPosition: n,
    setActiveCategoryIndex: s,
    setSearchPlaceholder: l,
    resetStoreState: u,
    setBottomPosition: c
  }
}
let c = l(),
  u = l(),
  d = l(),
  f = l()