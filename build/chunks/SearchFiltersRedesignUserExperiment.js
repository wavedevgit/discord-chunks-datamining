/** Chunk was on web.js **/
/** chunk id: 28964, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M_: () => s,
  g_: () => u,
  kU: () => l,
  q$: () => c,
  rY: () => o
});
var Chunk818083 = require("./818083.js");
let i = {
    isInExperiment: false,
    isEnabled: false,
    isHasFilterElevated: false
  },
  a = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-07_search_filters_redesign",
    label: "Search Filters Redesign",
    defaultConfig: i,
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        isInExperiment: true,
        isEnabled: false,
        isHasFilterElevated: false
      }
    }, {
      id: 1,
      label: "Top Filters",
      config: {
        isInExperiment: true,
        isEnabled: true,
        isHasFilterElevated: false
      }
    }, {
      id: 2,
      label: "Top Filters (has: before mentions:)",
      config: {
        isInExperiment: true,
        isEnabled: true,
        isHasFilterElevated: true
      }
    }]
  });

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInExperiment: r
  } = a.getCurrentConfig({
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
    isInExperiment: r
  } = a.useExperiment({
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
    isEnabled: r
  } = a.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return r
}

function c(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isHasFilterElevated: r
  } = a.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return r
}

function u(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isHasFilterElevated: r
  } = a.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return r
}