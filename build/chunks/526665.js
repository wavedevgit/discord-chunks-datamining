/** Chunk was on web.js **/
/** chunk id: 526665, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BK: () => u,
  KV: () => c,
  Ml: () => d,
  NT: () => f,
  gj: () => l,
  wy: () => s,
  yP: () => o
});
var Chunk427164 = require("./427164.js");
let i = (0, Chunk427164.le)({
    name: "2025-09-user-settings-redesign-1",
    kind: "user",
    defaultConfig: {
      enabled: false,
      showLegacyOpen: false
    },
    variations: {
      0: {
        enabled: false,
        showLegacyOpen: false
      },
      1: {
        enabled: true,
        showLegacyOpen: false
      },
      2: {
        enabled: true,
        showLegacyOpen: true
      }
    }
  }),
  a = (0, Chunk427164.le)({
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
  o = e => i.getConfig({
    location: e
  }).enabled,
  s = e => i.useConfig({
    location: e
  }).enabled,
  l = e => {
    let t = s(e),
      n = a.useConfig({
        location: e
      }).showRedesignedNotifications;
    return t && n
  },
  c = e => !!o(e) && a.getConfig({
    location: e
  }).showRedesignedNotifications,
  u = e => {
    let t = s(e),
      n = a.useConfig({
        location: e
      }).showRedesignedVoiceAndVideo;
    return t && n
  },
  d = e => !!o(e) && a.getConfig({
    location: e
  }).showRedesignedVoiceAndVideo,
  f = e => i.useConfig({
    location: e
  }).showLegacyOpen