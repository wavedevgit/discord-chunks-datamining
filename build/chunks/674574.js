/** Chunk was on 9452 **/
/** chunk id: 674574, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  e_: () => I
});
var Chunk657707 = require("./657707.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk61512 = require("./61512.js"),
  Chunk441302 = require("./441302.js"),
  Chunk736608 = require("./736608.js"),
  Chunk802 = require("./802.js"),
  Chunk348911 = require("./348911.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.x1)(Chunk313789.n.NOTIFICATIONS_PANE, {
    buildLayout: () => [Chunk802.Z, Chunk348911.Z, Chunk441302.Z, Chunk736608.Z, Chunk61512.Z]
  }),
  T = (0, Chunk509613.wf)(Chunk313789.n.NOTIFICATIONS_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.HcoRu0),
    buildLayout: () => [S]
  }),
  I = (0, Chunk509613.m7)(Chunk313789.n.NOTIFICATIONS_SIDEBAR_ITEM, {
    icon: Chunk657707.Dkj,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.HcoRu0),
    usePredicate: () => (0, Chunk526665.gj)("NotificationsPanel"),
    buildLayout: () => [T]
  })