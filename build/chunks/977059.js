/** Chunk was on web.js **/
"use strict";
n.d(t, {
  R: () => o,
  S: () => i
});
let r = (0, n(987170).Z)({
  kind: "user",
  id: "2024-05_secure_frames_ui_rollout",
  label: "Secure Frames Rollout",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled.",
    config: {
      enabled: !0
    }
  }]
});

function i(e) {
  let {
    location: t
  } = e;
  return r.useExperiment({
    location: t
  }, {
    autoTrackExposure: !0
  })
}

function o(e) {
  let {
    location: t
  } = e;
  return r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: !0
  })
}