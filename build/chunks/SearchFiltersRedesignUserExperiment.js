/** Chunk was on web.js **/
/** chunk id: 28964, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M_: () => l,
  g_: () => d,
  kU: () => c,
  q$: () => u,
  rY: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk154579 = require("./154579.js");
let o = {
    isInExperiment: false,
    isEnabled: false,
    isHasFilterElevated: false
  },
  a = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-07_search_filters_redesign",
    label: "Search Filters Redesign",
    defaultConfig: o,
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
    isInExperiment: o
  } = a.getCurrentConfig({
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
  } = e, r = (0, i.nd)({
    location: t,
    autoTrackExposure: n
  }), {
    isInExperiment: o
  } = a.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return o
}

function c(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, i.nd)({
    location: t,
    autoTrackExposure: n
  }), {
    isEnabled: o
  } = a.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return o
}

function u(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, i.ro)({
    location: t,
    autoTrackExposure: n
  }), {
    isHasFilterElevated: o
  } = a.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return o
}

function d(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, i.nd)({
    location: t,
    autoTrackExposure: n
  }), {
    isHasFilterElevated: o
  } = a.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return o
}