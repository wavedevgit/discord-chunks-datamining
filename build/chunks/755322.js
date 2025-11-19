/** Chunk was on 9452 **/
/** chunk id: 755322, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  m: () => T
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk593648 = require("./593648.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.x1)(Chunk313789.n.LEGACY_NOTIFICATIONS_PANE, {
    buildLayout: () => [],
    render: Chunk593648.Z
  }),
  E = (0, Chunk509613.wf)(Chunk313789.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.HcoRu0),
    buildLayout: () => [c]
  }),
  T = (0, Chunk509613.m7)(Chunk313789.n.LEGACY_NOTIFICATIONS_SIDEBAR_ITEM, {
    icon: Chunk657707.Dkj,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.HcoRu0),
    getLegacySearchKey: () => Chunk726985.s6.NOTIFICATIONS,
    usePredicate: () => !(0, Chunk526665.gj)("LegacyNotificationsPanel"),
    buildLayout: () => [E]
  })