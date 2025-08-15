/** Chunk was on web.js **/
/** chunk id: 44609, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  WR: () => a,
  gY: () => i,
  m4: () => o
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-01_advanced_server_join",
  label: "Advanced Server Join Experiment",
  defaultConfig: {
    enabled: false,
    allowServerMute: false
  },
  treatments: [{
    id: 1,
    label: "Enable Advanced Server Join w/ Server Mute",
    config: {
      enabled: true,
      allowServerMute: true
    }
  }, {
    id: 2,
    label: "Enable Advanced Server Join w/o Server Mute",
    config: {
      enabled: true,
      allowServerMute: false
    }
  }]
});

function i(e) {
  let {
    location: t
  } = e;
  return r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  }).enabled
}

function a(e) {
  let {
    location: t
  } = e;
  return r.useExperiment({
    location: t
  }, {
    autoTrackExposure: true
  }).enabled
}

function o(e) {
  let {
    location: t
  } = e;
  return r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  }).allowServerMute
}