/** Chunk was on 65298 **/
/** chunk id: 963713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => i,
  T: () => r
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
let r = Chunk64700.createContext({
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
    } = e, x = l.useMemo(() => ({
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
    return (0, a.jsx)(r.Provider, {
      value: x,
      children: t
    })
  }