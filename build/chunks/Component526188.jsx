/** Chunk was on 23736 **/
/** chunk id: 526188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i,
  g: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let i = Chunk473749.createContext({
    onCtxMenuClose: () => {},
    onCtxMenuOpen: () => {},
    onCtxMenuSelect: () => {},
    onGameSheetOpen: () => {},
    onGameSheetClose: () => {},
    collapsedHeight: 0,
    isExpanded: false,
    isExpansionAnimationComplete: false,
    quest: null,
    taskDetails: null
  }),
  l = e => {
    let {
      children: t,
      isExpanded: n,
      isExpansionAnimationComplete: l,
      onCtxMenuClose: s,
      onCtxMenuOpen: o,
      onCtxMenuSelect: c,
      onGameSheetOpen: d,
      onGameSheetClose: u,
      collapsedHeight: m,
      quest: p,
      taskDetails: h
    } = e, f = r.useMemo(() => ({
      isExpanded: n,
      isExpansionAnimationComplete: l,
      onCtxMenuClose: s,
      onCtxMenuOpen: o,
      onCtxMenuSelect: c,
      onGameSheetOpen: d,
      onGameSheetClose: u,
      collapsedHeight: m,
      quest: p,
      taskDetails: h
    }), [n, l, s, o, c, d, u, m, p, h]);
    return (0, a.jsx)(i.Provider, {
      value: f,
      children: t
    })
  }