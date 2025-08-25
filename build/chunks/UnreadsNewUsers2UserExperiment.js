/** Chunk was on web.js **/
/** chunk id: 312400, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ad: () => a,
  fs: () => o,
  xT: () => i
});
var Chunk818083 = require("./818083.js");
let i = (0, Chunk818083.B)({
    kind: "user",
    id: "2023-11_totally_benign_and_non_controversial_notification_tweaks",
    label: "Notification Changes",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Use the unfinished, not ready, and totally benign notification tweaks",
      config: {
        enabled: true
      }
    }]
  }),
  o = (0, Chunk818083.B)({
    kind: "user",
    id: "2024-01_unreads",
    label: "Unreads Experiment (grey-dot mode)",
    defaultConfig: {
      logExposure: false,
      autoOpen: false,
      manuallyOpen: false
    },
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        logExposure: true,
        autoOpen: false,
        manuallyOpen: false
      }
    }, {
      id: 1,
      label: "Auto open migration",
      config: {
        logExposure: true,
        autoOpen: true,
        manuallyOpen: false
      }
    }, {
      id: 2,
      label: "Manually open migration",
      config: {
        logExposure: false,
        autoOpen: false,
        manuallyOpen: true
      }
    }]
  }),
  a = (0, Chunk818083.B)({
    kind: "user",
    id: "2024-11_unreads_new_users2",
    label: "Unreads Experiment (grey-dot mode) (new users) 2",
    defaultConfig: {
      enabled: false,
      logExposure: false
    },
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        enabled: false,
        logExposure: true
      }
    }, {
      id: 1,
      label: "Auto open migration",
      config: {
        enabled: true,
        logExposure: true
      }
    }]
  })