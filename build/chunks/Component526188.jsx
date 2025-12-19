/** Chunk was on 6043 **/
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
      taskDetails: f
    } = e, h = r.useMemo(() => ({
      isExpanded: n,
      isExpansionAnimationComplete: l,
      onCtxMenuClose: s,
      onCtxMenuOpen: o,
      onCtxMenuSelect: c,
      onGameSheetOpen: d,
      onGameSheetClose: u,
      collapsedHeight: m,
      quest: p,
      taskDetails: f
    }), [n, l, s, o, c, d, u, m, p, f]);
    return (0, a.jsx)(i.Provider, {
      value: h,
      children: t
    })
  }