/** Chunk was on web.js **/
/** chunk id: 321614, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => s,
  c: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk984134 = require("./984134.js"),
  Chunk345655 = require("./345655.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-05_input_profiles_experiment_web",
  label: "Audio input profiles (studio mode)",
  defaultConfig: {
    enabledInputProfiles: []
  },
  treatments: [{
    id: 1,
    label: "Show Voice Isolation, Studio, and Custom",
    config: {
      enabledInputProfiles: [Chunk345655._.VOICE_ISOLATION, Chunk345655._.STUDIO, Chunk345655._.CUSTOM]
    }
  }]
});

function s(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.Y.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return a.getCurrentConfig({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}

function l(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.Y.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return a.useExperiment({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}