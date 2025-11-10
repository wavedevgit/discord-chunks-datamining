/** Chunk was on web.js **/
/** chunk id: 288047, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZQ: () => i,
  bH: () => a
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-10_friend_is_online_notification",
  label: "Friend Online Notification Experiment",
  defaultConfig: {
    showSettingsToggle: false
  },
  treatments: [{
    id: 1,
    label: "User can receive friend online notifications. Show settings toggle.",
    config: {
      showSettingsToggle: true
    }
  }]
});

function i(e) {
  return r.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  })
}

function a(e) {
  return r.getCurrentConfig({
    location: e
  }).showSettingsToggle
}