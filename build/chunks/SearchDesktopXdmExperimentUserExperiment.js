/** Chunk was on web.js **/
/** chunk id: 945577, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => o,
  a: () => s
});
var Chunk818083 = require("./818083.js");
let i = {
    isXDMSearchEnabled: false,
    inExperiment: false
  },
  a = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-06_search_desktop_xdm_experiment",
    label: "Search Desktop XDM Experiment",
    defaultConfig: i,
    treatments: [{
      id: 0,
      label: "Control group for xDM search on desktop",
      config: {
        isXDMSearchEnabled: false,
        inExperiment: true
      }
    }, {
      id: 1,
      label: "Enables xDM search with xDM setting as default off",
      config: {
        isXDMSearchEnabled: true,
        inExperiment: true
      }
    }]
  });

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isXDMSearchEnabled: r
  } = a.useExperiment({
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
    isXDMSearchEnabled: r
  } = a.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return r
}