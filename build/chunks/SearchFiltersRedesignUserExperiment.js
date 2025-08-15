/** Chunk was on 54157 **/
/** chunk id: 28964, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  dB: () => a,
  xd: () => i
});
var Chunk818083 = require("./818083.js"),
  Chunk154579 = require("./154579.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-07_search_filters_redesign",
  label: "Search Filters Redesign",
  defaultConfig: {
    isPopoutFiltersRedesignEnabled: false,
    isResultFiltersRedesignEnabled: false
  },
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

function a(e) {
  let {
    isXDMSearch: t,
    location: n,
    autoTrackExposure: r = true
  } = e, a = (0, s.nd)({
    location: n,
    autoTrackExposure: r
  }), {
    isPopoutFiltersRedesignEnabled: i
  } = l.useExperiment({
    location: n
  }, {
    autoTrackExposure: r,
    disable: a || t
  });
  return i
}

function i(e) {
  let {
    isXDMSearch: t,
    location: n,
    autoTrackExposure: r = true
  } = e, a = (0, s.nd)({
    location: n,
    autoTrackExposure: r
  }), {
    isResultFiltersRedesignEnabled: i
  } = l.useExperiment({
    location: n
  }, {
    autoTrackExposure: r,
    disable: a || t
  });
  return i
}