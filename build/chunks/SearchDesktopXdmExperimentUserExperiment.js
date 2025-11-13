/** Chunk was on web.js **/
/** chunk id: 945577, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  UX: () => s,
  ad: () => l,
  xy: () => c
});
var Chunk818083 = require("./818083.js"),
  Chunk154579 = require("./154579.js");
let a = {
    isXDMSearchEnabled: false,
    isGlobalSettingDefaultEnabled: false,
    inExperiment: false
  },
  o = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-06_search_desktop_xdm_experiment",
    label: "Search Desktop XDM Experiment",
    defaultConfig: a,
    treatments: [{
      id: 0,
      label: "Control group for xDM search on desktop",
      config: {
        isXDMSearchEnabled: false,
        isGlobalSettingDefaultEnabled: false,
        inExperiment: true
      }
    }, {
      id: 1,
      label: "Enables xDM search with xDM setting as default on",
      config: {
        isXDMSearchEnabled: true,
        isGlobalSettingDefaultEnabled: true,
        inExperiment: true
      }
    }, {
      id: 2,
      label: "Enables xDM search with xDM setting as default off",
      config: {
        isXDMSearchEnabled: true,
        isGlobalSettingDefaultEnabled: false,
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
    isXDMSearchEnabled: a
  } = o.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return a
}

function l(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, i.ro)({
    location: t,
    autoTrackExposure: n
  }), {
    isXDMSearchEnabled: a
  } = o.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return a
}

function c(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isGlobalSettingDefaultEnabled: r
  } = o.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return r
}