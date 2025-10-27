/** Chunk was on 60831 **/
/** chunk id: 842619, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var l, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk818083 = require("./818083.js"),
  Chunk314897 = require("./314897.js");
let u = {},
  c = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-03_slayer_notif_supression_killswitch",
    label: "Disable suppressing notifications with slayer game active",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Disable suppressing",
      config: {
        enabled: true
      }
    }]
  });
class d extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default)
  }
  areSlayerNotificationsSuppressed() {
    if (c.getCurrentConfig({
        location: "Store"
      }, {
        autoTrackExposure: false
      }).enabled) returnfalse;
    for (let e in u)
      if (u[module] === Chunk314897.default.getId()) returntrue;
    returnfalse
  }
}(l = "displayName") in d ? Object.defineProperty(d, l, {
  value: "RpcNotificationSettingsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[l] = "RpcNotificationSettingsStore";
let f = new d(Chunk570140.Z, {
  RPC_APP_DISCONNECTED: function(e) {
    delete u[e.socketId]
  },
  SET_RPC_NOTIFICATION_SETTINGS: function(e) {
    delete u[e.socketId], e.suppressNotifications && (u[e.socketId] = e.targetUserId)
  }
})