/** Chunk was on web.js **/
/** chunk id: 945577, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gc: () => u,
  N3: () => c,
  UX: () => s,
  u5: () => l,
  wn: () => d
});
var Chunk818083 = require("./818083.js"),
  Chunk154579 = require("./154579.js");
let a = {
    isXDMSearchEnabled: false,
    isGlobalSettingSupported: false,
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
        isGlobalSettingSupported: false,
        inExperiment: true
      }
    }, {
      id: 1,
      label: "Enables xDM search on desktop",
      config: {
        isXDMSearchEnabled: true,
        isGlobalSettingSupported: true,
        inExperiment: true
      }
    }, {
      id: 2,
      label: "Enables xDM search on desktop with global setting",
      config: {
        isXDMSearchEnabled: true,
        isGlobalSettingSupported: true,
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
  } = e, r = (0, i.nd)({
    location: t,
    autoTrackExposure: n
  }), {
    isGlobalSettingSupported: a,
    isXDMSearchEnabled: s
  } = o.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return a && s
}

function c(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, i.ro)({
    location: t,
    autoTrackExposure: n
  }), {
    isGlobalSettingSupported: a,
    isXDMSearchEnabled: s
  } = o.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return a && s
}

function u(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, i.nd)({
    location: t,
    autoTrackExposure: n
  }), {
    inExperiment: a
  } = o.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return a
}

function d(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, i.ro)({
    location: t,
    autoTrackExposure: n
  }), {
    inExperiment: a
  } = o.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return a
}