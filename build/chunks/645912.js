/** Chunk was on 77069 **/
/** chunk id: 645912, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  G: () => d
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk389650 = require("./389650.jsx"),
  Chunk408283 = require("./408283.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.k4)(Chunk313789.n.KEYBINDS_CATEGORY, {
    buildLayout: () => [a.A]
  }),
  c = (0, Chunk509613.wf)(Chunk313789.n.KEYBINDS_PANEL, {
    usePredicate: () => !(0, u.gN)("LegacyKeybindsPanel"),
    useTitle: () => T.intl.string(T.t.T9DA2K),
    StronglyDiscouragedCustomComponent: Chunk389650.Z,
    buildLayout: () => []
  }),
  E = (0, Chunk509613.wf)(Chunk313789.n.KEYBINDS_PANEL, {
    usePredicate: () => (0, u.gN)("KeybindsPanel"),
    useTitle: () => T.intl.string(T.t.T9DA2K),
    buildLayout: () => [S]
  }),
  d = (0, Chunk509613.m7)(Chunk313789.n.KEYBINDS_SIDEBAR_ITEM, {
    useTitle: () => T.intl.string(T.t.T9DA2K),
    getLegacySearchKey: () => (0, u.Gl)("KeybindsPanel") ? true : o.s6.KEYBINDS,
    icon: Chunk657707.YiA,
    buildLayout: () => (0, u.Gl)("KeybindsPanel") ? [E] : [c]
  })