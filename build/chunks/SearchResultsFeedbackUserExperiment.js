/** Chunk was on web.js **/
/** chunk id: 759209, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => i,
  j: () => a
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-05_search_results_feedback",
  label: "Search Results Feedback",
  defaultConfig: {
    enabled: false,
    force: false
  },
  treatments: [{
    id: 1,
    label: "Eligible to see search results feedback",
    config: {
      enabled: true,
      force: false
    }
  }, {
    id: 2,
    label: "Force user to always see search results feedback",
    config: {
      enabled: true,
      force: true
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    enabled: i,
    force: a
  } = r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return {
    enabled: i,
    force: a
  }
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