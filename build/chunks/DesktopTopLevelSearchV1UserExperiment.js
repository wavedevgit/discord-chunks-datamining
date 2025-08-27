/** Chunk was on web.js **/
/** chunk id: 819439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $V: () => a,
  Qg: () => s,
  ef: () => l
});
var Chunk818083 = require("./818083.js");
let i = {
    enabled: false,
    inExperiment: false
  },
  o = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-08_desktop_top_level_search_v1",
    label: "Desktop Top Level Search v1",
    defaultConfig: i,
    treatments: [{
      id: 0,
      label: "Control group for desktop top level search v1",
      config: {
        enabled: false,
        inExperiment: true
      }
    }, {
      id: 1,
      label: "Enables desktop top level search v1",
      config: {
        enabled: true,
        inExperiment: true
      }
    }]
  });

function a(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    enabled: r
  } = o.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return r
}

function s(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    enabled: r
  } = o.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return r
}

function l(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    inExperiment: r
  } = o.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return r
}