/** Chunk was on web.js **/
/** chunk id: 491001, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => a
});
let r = (0, require("./945810.js").mj)({
    name: "2026-01-ios-push-notif-json-fix",
    kind: "user",
    defaultConfig: {
      enabled: false
    },
    variations: {
      1: {
        enabled: true
      }
    }
  }),
  i = null;

function a() {
  return null == i && (i = r.getConfig({
    location: "isIOSPushNotificationRawPayloadFixExperiment"
  }).enabled), i
}