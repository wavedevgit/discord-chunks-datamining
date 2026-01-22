/** Chunk was on 22477 **/
/** chunk id: 963713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => r,
  T: () => i
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
let i = Chunk64700.createContext({
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
  r = e => {
    let {
      children: t,
      isExpanded: n,
      isExpansionAnimationComplete: r,
      onCtxMenuClose: s,
      onCtxMenuOpen: o,
      onCtxMenuSelect: c,
      onGameSheetOpen: d,
      onGameSheetClose: u,
      collapsedHeight: m,
      quest: p,
      taskDetails: h
    } = e, f = l.useMemo(() => ({
      isExpanded: n,
      isExpansionAnimationComplete: r,
      onCtxMenuClose: s,
      onCtxMenuOpen: o,
      onCtxMenuSelect: c,
      onGameSheetOpen: d,
      onGameSheetClose: u,
      collapsedHeight: m,
      quest: p,
      taskDetails: h
    }), [n, r, s, o, c, d, u, m, p, h]);
    return (0, a.jsx)(i.Provider, {
      value: f,
      children: t
    })
  }