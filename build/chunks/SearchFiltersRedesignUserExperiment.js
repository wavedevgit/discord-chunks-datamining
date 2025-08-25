/** Chunk was on web.js **/
/** chunk id: 28964, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KS: () => l,
  nP: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk154579 = require("./154579.js");
let o = {
    isNoTopFiltersRedesignEnabled: false,
    isSuggestTopFiltersRedesignEnabled: false
  },
  a = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-07_search_filters_redesign",
    label: "Search Filters Redesign",
    defaultConfig: o,
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
    isXDMSearch: t,
    location: n,
    autoTrackExposure: r = true
  } = e, o = (0, i.nd)({
    location: n,
    autoTrackExposure: r
  }), {
    isNoTopFiltersRedesignEnabled: s
  } = a.useExperiment({
    location: n
  }, {
    autoTrackExposure: r,
    disable: o || t
  });
  return s
}

function l(e) {
  let {
    isXDMSearch: t,
    location: n,
    autoTrackExposure: r = true
  } = e, o = (0, i.nd)({
    location: n,
    autoTrackExposure: r
  }), {
    isSuggestTopFiltersRedesignEnabled: s
  } = a.useExperiment({
    location: n
  }, {
    autoTrackExposure: r,
    disable: o || t
  });
  return s
}