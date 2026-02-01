/** Chunk was on web.js **/
/** chunk id: 655237, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk600975 = require("./600975.js"),
  Chunk961350 = require("./961350.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
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

function d(e) {
  delete c[e.socketId]
}

function f(e) {
  delete c[e.socketId], e.suppressNotifications && (c[e.socketId] = e.targetUserId)
}
class p extends(r = Chunk311907.Ay.Store) {
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
}
l(p, "displayName", "RpcNotificationSettingsStore");
let _ = new p(Chunk73153.h, {
  RPC_APP_DISCONNECTED: d,
  SET_RPC_NOTIFICATION_SETTINGS: f
})