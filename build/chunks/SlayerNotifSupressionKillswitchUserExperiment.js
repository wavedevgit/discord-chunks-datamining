/** Chunk was on 31748 **/
/** chunk id: 655237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var r, l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk600975 = require("./600975.js"),
  Chunk961350 = require("./961350.js");
let c = {},
  u = (0, Chunk600975.C)({
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
class d extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(s.default)
  }
  areSlayerNotificationsSuppressed() {
    if (u.getCurrentConfig({
        location: "Store"
      }, {
        autoTrackExposure: false
      }).enabled) returnfalse;
    for (let e in c)
      if (c[e] === s.default.getId()) returntrue;
    returnfalse
  }
}(r = "displayName") in d ? Object.defineProperty(d, r, {
  value: "RpcNotificationSettingsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = "RpcNotificationSettingsStore";
let f = new d(Chunk73153.h, {
  RPC_APP_DISCONNECTED: function(e) {
    delete c[e.socketId]
  },
  SET_RPC_NOTIFICATION_SETTINGS: function(e) {
    delete c[e.socketId], e.suppressNotifications && (c[e.socketId] = e.targetUserId)
  }
})