/** Chunk was on 69813 **/
/** chunk id: 842619, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var r, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk818083 = require("./818083.js"),
  Chunk314897 = require("./314897.js");
let s = {},
  u = (0, Chunk818083.B)({
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
class d extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(c.default)
  }
  areSlayerNotificationsSuppressed() {
    if (u.getCurrentConfig({
        location: "Store"
      }, {
        autoTrackExposure: false
      }).enabled) returnfalse;
    for (let e in s)
      if (s[e] === c.default.getId()) returntrue;
    returnfalse
  }
}(r = "displayName") in d ? Object.defineProperty(d, r, {
  value: "RpcNotificationSettingsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = "RpcNotificationSettingsStore";
let f = new d(Chunk570140.Z, {
  RPC_APP_DISCONNECTED: function(e) {
    delete s[e.socketId]
  },
  SET_RPC_NOTIFICATION_SETTINGS: function(e) {
    delete s[e.socketId], e.suppressNotifications && (s[e.socketId] = e.targetUserId)
  }
})