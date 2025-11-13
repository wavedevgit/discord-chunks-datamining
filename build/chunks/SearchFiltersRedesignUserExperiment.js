/** Chunk was on web.js **/
/** chunk id: 28964, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M_: () => l,
  g_: () => u,
  kU: () => c,
  rY: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk154579 = require("./154579.js");
let a = {
    isInExperiment: false,
    isEnabled: false,
    isHasFilterElevated: false
  },
  o = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-07_search_filters_redesign",
    label: "Search Filters Redesign",
    defaultConfig: a,
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

function s(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, i.ro)({
    location: t,
    autoTrackExposure: n
  }), {
    isInExperiment: a
  } = o.getCurrentConfig({
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
    isInExperiment: a
  } = o.useExperiment({
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
  } = e, r = (0, i.nd)({
    location: t,
    autoTrackExposure: n
  }), {
    isEnabled: a
  } = o.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return a
}

function u(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, i.nd)({
    location: t,
    autoTrackExposure: n
  }), {
    isHasFilterElevated: a
  } = o.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return a
}