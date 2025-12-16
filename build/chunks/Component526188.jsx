/** Chunk was on 29725 **/
/** chunk id: 526188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l,
  g: () => i
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let l = Chunk473749.createContext({
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
  i = e => {
    let {
      children: t,
      isExpanded: n,
      isExpansionAnimationComplete: i,
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
      isExpansionAnimationComplete: i,
      onCtxMenuClose: s,
      onCtxMenuOpen: o,
      onCtxMenuSelect: c,
      onGameSheetOpen: d,
      onGameSheetClose: u,
      collapsedHeight: m,
      quest: p,
      taskDetails: h
    }), [n, i, s, o, c, d, u, m, p, h]);
    return (0, a.jsx)(l.Provider, {
      value: f,
      children: t
    })
  }