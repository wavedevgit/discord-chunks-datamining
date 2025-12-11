/** Chunk was on web.js **/
/** chunk id: 526665, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BK: () => d,
  Gl: () => _,
  KV: () => u,
  Ml: () => f,
  NT: () => m,
  gN: () => p,
  gj: () => c,
  wy: () => l,
  yP: () => s
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
  o = (0, Chunk427164.le)({
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
  s = e => i.getConfig({
    location: e
  }).enabled,
  l = e => i.useConfig({
    location: e
  }).enabled,
  c = e => {
    let t = l(e),
      n = a.useConfig({
        location: e
      }).showRedesignedNotifications;
    return t && n
  },
  u = e => !!s(e) && a.getConfig({
    location: e
  }).showRedesignedNotifications,
  d = e => {
    let t = l(e),
      n = a.useConfig({
        location: e
      }).showRedesignedVoiceAndVideo;
    return t && n
  },
  f = e => !!s(e) && a.getConfig({
    location: e
  }).showRedesignedVoiceAndVideo,
  p = e => o.useConfig({
    location: e
  }).enabled,
  _ = e => o.getConfig({
    location: e
  }).enabled,
  m = e => i.useConfig({
    location: e
  }).showLegacyOpen