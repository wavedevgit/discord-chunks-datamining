/** Chunk was on 70205 **/
/** chunk id: 842619, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var i, l, a, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk818083 = require("./818083.js"),
  Chunk314897 = require("./314897.js");
let d = {},
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
class f extends(a = Chunk442837.ZP.Store) {
  areSlayerNotificationsSuppressed() {
    if (c.getCurrentConfig({
        location: "Store"
      }, {
        autoTrackExposure: false
      }).enabled) returnfalse;
    for (let t in d)
      if (d[module] === Chunk314897.default.getId()) returntrue;
    returnfalse
  }
}
l = "RpcNotificationSettingsStore", (i = "displayName") in f ? Object.defineProperty(f, i, {
  value: l,
  enumerable: true,
  configurable: true,
  writable: true
}) : f[i] = l;
let g = new f(Chunk570140.Z, {
  RPC_APP_DISCONNECTED: function(t) {
    delete d[t.socketId]
  },
  SET_RPC_NOTIFICATION_SETTINGS: function(t) {
    delete d[t.socketId], t.suppressNotifications && (d[t.socketId] = t.targetUserId)
  }
})