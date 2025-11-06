/** Chunk was on 9452 **/
/** chunk id: 645912, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  G: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk389650 = require("./389650.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.x1)(Chunk313789.n.KEYBINDS_PANE, {
    buildLayout: () => [],
    render: () => (0, Chunk951288.jsx)(Chunk389650.Z, {})
  }),
  E = (0, Chunk509613.wf)(Chunk313789.n.KEYBINDS_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.T9DA2K),
    buildLayout: () => [c]
  }),
  d = (0, Chunk509613.m7)(Chunk313789.n.KEYBINDS_SIDEBAR_ITEM, {
    icon: Chunk657707.YiA,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.T9DA2K),
    getLegacySearchKey: () => Chunk726985.s6.KEYBINDS,
    buildLayout: () => [E]
  })