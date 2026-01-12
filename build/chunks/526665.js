/** Chunk was on web.js **/
/** chunk id: 526665, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BK: () => l,
  Gl: () => d,
  KV: () => s,
  Ml: () => c,
  gN: () => u,
  gj: () => o
});
var Chunk427164 = require("./427164.js");
let i = (0, Chunk427164.le)({
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
  a = (0, Chunk427164.le)({
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
  o = e => i.useConfig({
    location: e
  }).showRedesignedNotifications,
  s = e => i.getConfig({
    location: e
  }).showRedesignedNotifications,
  l = e => i.useConfig({
    location: e
  }).showRedesignedVoiceAndVideo,
  c = e => i.getConfig({
    location: e
  }).showRedesignedVoiceAndVideo,
  u = e => a.useConfig({
    location: e
  }).enabled,
  d = e => a.getConfig({
    location: e
  }).enabled