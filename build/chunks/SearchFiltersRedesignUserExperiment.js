/** Chunk was on web.js **/
/** chunk id: 28964, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  dB: () => s,
  xd: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk154579 = require("./154579.js");
let a = {
    isPopoutFiltersRedesignEnabled: false,
    isResultFiltersRedesignEnabled: false
  },
  o = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-07_search_filters_redesign",
    label: "Search Filters Redesign",
    defaultConfig: a,
    treatments: [{
      id: 1,
      label: "Enable better popout filters",
      config: {
        isPopoutFiltersRedesignEnabled: true,
        isResultFiltersRedesignEnabled: false
      }
    }, {
      id: 2,
      label: "Enable better result filters",
      config: {
        isPopoutFiltersRedesignEnabled: false,
        isResultFiltersRedesignEnabled: true
      }
    }, {
      id: 3,
      label: "Enable better popout and result filters",
      config: {
        isPopoutFiltersRedesignEnabled: true,
        isResultFiltersRedesignEnabled: true
      }
    }]
  });

function s(e) {
  let {
    isXDMSearch: t,
    location: n,
    autoTrackExposure: r = true
  } = e, a = (0, i.nd)({
    location: n,
    autoTrackExposure: r
  }), {
    isPopoutFiltersRedesignEnabled: s
  } = o.useExperiment({
    location: n
  }, {
    autoTrackExposure: r,
    disable: a || t
  });
  return s
}

function l(e) {
  let {
    isXDMSearch: t,
    location: n,
    autoTrackExposure: r = true
  } = e, a = (0, i.nd)({
    location: n,
    autoTrackExposure: r
  }), {
    isResultFiltersRedesignEnabled: s
  } = o.useExperiment({
    location: n
  }, {
    autoTrackExposure: r,
    disable: a || t
  });
  return s
}