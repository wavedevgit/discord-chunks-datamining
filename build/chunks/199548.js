/** Chunk was on 77069 **/
/** chunk id: 199548, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  ts: () => E
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk309739 = require("./309739.jsx"),
  Chunk418878 = require("./418878.js"),
  Chunk330187 = require("./330187.js"),
  Chunk87513 = require("./87513.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.wf)(Chunk313789.n.ACTIVITY_PRIVACY_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.Cq98yL),
    StronglyDiscouragedCustomComponent: Chunk309739.ZP,
    buildLayout: () => [],
    usePredicate: () => !(0, Chunk526665.gN)("ActivityPrivacyPanel")
  }),
  g = (0, Chunk509613.wf)(Chunk313789.n.ACTIVITY_PRIVACY_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.Cq98yL),
    usePredicate: () => (0, Chunk526665.gN)("ActivityPrivacyPanel"),
    buildLayout: () => [Chunk418878.v, Chunk330187.b, Chunk87513.o]
  }),
  E = (0, Chunk509613.m7)(Chunk313789.n.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.Cq98yL),
    getLegacySearchKey: () => (0, Chunk526665.Gl)("ActivityPrivacyPanel") ? true : Chunk726985.s6.ACTIVITY_PRIVACY,
    icon: Chunk657707.KED,
    buildLayout: () => (0, Chunk526665.Gl)("ActivityPrivacyPanel") ? [g] : [T]
  })