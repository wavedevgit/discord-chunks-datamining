/** Chunk was on 77069 **/
/** chunk id: 249857, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  R: () => d
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk358085 = require("./358085.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk200645 = require("./200645.jsx"),
  Chunk775793 = require("./775793.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.wf)(Chunk313789.n.WINDOWS_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.ZkDZov),
    buildLayout: () => [Chunk775793.R]
  }),
  E = (0, Chunk509613.wf)(Chunk313789.n.WINDOWS_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.ZkDZov),
    StronglyDiscouragedCustomComponent: Chunk200645.Z,
    buildLayout: () => []
  }),
  d = (0, Chunk509613.m7)(Chunk313789.n.WINDOWS_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.ZkDZov),
    getLegacySearchKey: () => (0, Chunk526665.Gl)("WindowsPanel") ? true : Chunk726985.s6.WINDOW_SETTINGS,
    icon: Chunk657707.pzj,
    usePredicate: () => Chunk358085.isPlatformEmbedded && (0, Chunk358085.isWindows)(),
    buildLayout: () => [(0, Chunk526665.Gl)("WindowsPanel") ? c : E]
  })