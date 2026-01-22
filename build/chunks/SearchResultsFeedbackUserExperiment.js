/** Chunk was on web.js **/
/** chunk id: 868974, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => i,
  s: () => a
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2025-05_search_results_feedback",
  label: "Search Results Feedback",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Eligible to see search results feedback",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    enabled: i
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i
}

function a(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    enabled: i
  } = r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i
}