/** Chunk was on web.js **/
/** chunk id: 358776, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E7: () => o,
  WJ: () => u,
  dk: () => c,
  qz: () => l,
  t0: () => s
});
var Chunk945810 = require("./945810.js");
let i = (0, Chunk945810.mj)({
    name: "2025-09-user-settings-redesign-2a",
    kind: "user",
    defaultConfig: {
      showRedesignedNotifications: false,
      showRedesignedVoiceAndVideo: false
    },
    variations: {
      0: {
        showRedesignedNotifications: false,
        showRedesignedVoiceAndVideo: false
      },
      1: {
        showRedesignedNotifications: true,
        showRedesignedVoiceAndVideo: true
      }
    }
  }),
  a = (0, Chunk945810.mj)({
    name: "2025-12-user-settings-redesign-3",
    kind: "user",
    defaultConfig: {
      enabled: false
    },
    variations: {
      0: {
        enabled: false
      },
      1: {
        enabled: true
      }
    }
  }),
  s = e => i.useConfig({
    location: e
  }).showRedesignedNotifications,
  o = e => i.getConfig({
    location: e
  }).showRedesignedNotifications,
  l = e => i.getConfig({
    location: e
  }).showRedesignedVoiceAndVideo,
  c = e => a.useConfig({
    location: e
  }).enabled,
  u = e => a.getConfig({
    location: e
  }).enabled