/** Chunk was on web.js **/
/** chunk id: 945577, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => s,
  a: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk154579 = require("./154579.js");
let o = {
    isXDMSearchEnabled: false,
    inExperiment: false
  },
  a = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-06_search_desktop_xdm_experiment",
    label: "Search Desktop XDM Experiment",
    defaultConfig: o,
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

function s(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, i.nd)({
    location: t,
    autoTrackExposure: n
  }), {
    isXDMSearchEnabled: o
  } = a.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return o
}

function l(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, i.ro)({
    location: t,
    autoTrackExposure: n
  }), {
    isXDMSearchEnabled: o
  } = a.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return o
}