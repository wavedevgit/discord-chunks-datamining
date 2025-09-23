/** Chunk was on web.js **/
/** chunk id: 28964, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KS: () => l,
  nP: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk154579 = require("./154579.js");
let a = {
    isNoTopFiltersRedesignEnabled: false,
    isSuggestTopFiltersRedesignEnabled: false
  },
  o = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-07_search_filters_redesign",
    label: "Search Filters Redesign",
    defaultConfig: a,
    treatments: [{
      id: 1,
      label: "No top filters",
      config: {
        isNoTopFiltersRedesignEnabled: true,
        isSuggestTopFiltersRedesignEnabled: false
      }
    }, {
      id: 2,
      label: "Suggest top filters",
      config: {
        isNoTopFiltersRedesignEnabled: false,
        isSuggestTopFiltersRedesignEnabled: true
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
    isNoTopFiltersRedesignEnabled: a
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
    isSuggestTopFiltersRedesignEnabled: a
  } = o.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return a
}