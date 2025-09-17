/** Chunk was on web.js **/
/** chunk id: 526665, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KV: () => s,
  gj: () => o,
  wy: () => a,
  yP: () => i
});
let r = (0, require("./818083.js").B)({
    kind: "user",
    id: "2025-06_user_settings_redesign",
    label: "User Settings Redesign",
    defaultConfig: {
      enabled: false,
      showRedesignedNotifications: false
    },
    treatments: [{
      id: 1,
      label: "Enable user settings redesign with legacy notifications",
      config: {
        enabled: true,
        showRedesignedNotifications: false
      }
    }, {
      id: 2,
      label: "Enable user settings redesign with new notifications page",
      config: {
        enabled: true,
        showRedesignedNotifications: true
      }
    }]
  }),
  i = e => r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled,
  a = e => r.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled,
  o = () => r.useExperiment({
    location: "user_settings"
  }, {
    autoTrackExposure: false
  }).showRedesignedNotifications,
  s = e => r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).showRedesignedNotifications