/** Chunk was on 70205 **/
/** chunk id: 842619, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var i, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk818083 = require("./818083.js"),
  Chunk314897 = require("./314897.js");
let s = {},
  d = (0, Chunk818083.B)({
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
class c extends(l = Chunk442837.ZP.Store) {
  areSlayerNotificationsSuppressed() {
    if (d.getCurrentConfig({
        location: "Store"
      }, {
        autoTrackExposure: false
      }).enabled) returnfalse;
    for (let t in s)
      if (s[module] === Chunk314897.default.getId()) returntrue;
    returnfalse
  }
}(i = "displayName") in c ? Object.defineProperty(c, i, {
  value: "RpcNotificationSettingsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : c[i] = "RpcNotificationSettingsStore";
let f = new c(Chunk570140.Z, {
  RPC_APP_DISCONNECTED: function(t) {
    delete s[t.socketId]
  },
  SET_RPC_NOTIFICATION_SETTINGS: function(t) {
    delete s[t.socketId], t.suppressNotifications && (s[t.socketId] = t.targetUserId)
  }
})