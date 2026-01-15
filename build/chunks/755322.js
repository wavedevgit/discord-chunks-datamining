/** Chunk was on 77069 **/
/** chunk id: 755322, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  w: () => S
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk593648 = require("./593648.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.wf)(Chunk313789.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
    useTitle: () => o.intl.string(o.t.HcoRu0),
    StronglyDiscouragedCustomComponent: Chunk593648.Z,
    buildLayout: () => []
  }),
  S = (0, Chunk509613.m7)(Chunk313789.n.LEGACY_NOTIFICATIONS_SIDEBAR_ITEM, {
    useTitle: () => o.intl.string(o.t.HcoRu0),
    getLegacySearchKey: () => a.s6.NOTIFICATIONS,
    icon: Chunk657707.BellIcon,
    usePredicate: () => !(0, u.gj)("LegacyNotificationsPanel"),
    buildLayout: () => [T]
  })