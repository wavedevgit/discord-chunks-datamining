/** Chunk was on 9452 **/
/** chunk id: 249857, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  R: () => S
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk358085 = require("./358085.js"),
  Chunk313789 = require("./313789.js"),
  Chunk200645 = require("./200645.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.x1)(Chunk313789.n.WINDOWS_PANE, {
    buildLayout: () => [],
    render: Chunk200645.Z
  }),
  E = (0, Chunk509613.wf)(Chunk313789.n.WINDOWS_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.ZkDZov),
    buildLayout: () => [c]
  }),
  S = (0, Chunk509613.m7)(Chunk313789.n.WINDOWS_SIDEBAR_ITEM, {
    icon: Chunk657707.pzj,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.ZkDZov),
    getLegacySearchKey: () => Chunk726985.s6.WINDOW_SETTINGS,
    usePredicate: () => Chunk358085.isPlatformEmbedded && (0, Chunk358085.isWindows)(),
    buildLayout: () => [E]
  })