/** Chunk was on 77069 **/
/** chunk id: 825193, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  w: () => g
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk64914 = require("./64914.jsx"),
  Chunk546424 = require("./546424.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let d = (0, Chunk509613.wf)(Chunk313789.n.ADVANCED_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["8/udY0"]),
    usePredicate: () => !(0, Chunk526665.gN)("LegacyAdvancedPanel"),
    StronglyDiscouragedCustomComponent: Chunk64914.ZP,
    buildLayout: () => []
  }),
  T = (0, Chunk509613.wf)(Chunk313789.n.ADVANCED_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["8/udY0"]),
    usePredicate: () => (0, Chunk526665.gN)("AdvancedPanel"),
    buildLayout: () => [Chunk546424.U]
  }),
  g = (0, Chunk509613.m7)(Chunk313789.n.ADVANCED_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["8/udY0"]),
    getLegacySearchKey: () => (0, Chunk526665.Gl)("AdvancedPanel") ? true : Chunk726985.s6.SETTINGS_ADVANCED,
    icon: Chunk657707.xhG,
    buildLayout: () => (0, Chunk526665.Gl)("AdvancedPanel") ? [T] : [d]
  })