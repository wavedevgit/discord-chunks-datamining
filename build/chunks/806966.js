/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Wq: () => d,
  Xn: () => f,
  ZN: () => u,
  c: () => a,
  kJ: () => c
});
var r = n(877124),
  i = n(65400),
  o = n(731965);
let a = -1,
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
      (0, o.j)(() => e.setState({
        inspectedExpressionPosition: {
          rowIndex: n,
          columnIndex: t,
          source: r
        }
      }))
    },
    a = t => {
      (0, o.j)(() => e.setState({
        activeCategoryIndex: t
      }))
    },
    l = t => {
      (0, o.j)(() => e.setState({
        searchPlaceholder: t
      }))
    },
    c = t => {
      (0, o.j)(() => e.setState({
        bottomPosition: t
      }))
    },
    u = () => {
      (0, o.j)(() => e.setState(s))
    },
    d = (t, n) => e.subscribe(t, n);
  return {
    useStore: e,
    getState: t,
    subscribe: d,
    setInspectedExpressionPosition: n,
    setActiveCategoryIndex: a,
    setSearchPlaceholder: l,
    resetStoreState: u,
    setBottomPosition: c
  }
}
let c = l(),
  u = l(),
  d = l(),
  f = l()