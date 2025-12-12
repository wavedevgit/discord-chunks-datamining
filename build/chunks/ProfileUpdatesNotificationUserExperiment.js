/** Chunk was on web.js **/
/** chunk id: 925734, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F4: () => a,
  oW: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-12_profile_updates_notification",
  label: "Profile Updates Notification Experiment",
  defaultConfig: {
    showSettingsToggle: false
  },
  treatments: [{
    id: 1,
    label: "User can receive profile updates notifications (copy treatment 1). Show settings toggle.",
    config: {
      showSettingsToggle: true
    }
  }, {
    id: 2,
    label: "User can receive profile updates notifications (copy treatment 2). Show settings toggle.",
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
  }, {
    autoTrackExposure: false
  }).showSettingsToggle
}