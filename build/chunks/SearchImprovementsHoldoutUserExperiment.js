/** Chunk was on web.js **/
/** chunk id: 154579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  nd: () => o,
  ro: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-06_search_improvements_holdout",
  label: "Search Improvements Holdout",
  defaultConfig: {
    isInHoldout: false
  },
  treatments: [{
    id: 1,
    label: "Enables holdout group",
    config: {
      isInHoldout: true
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: i
  } = r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i
}

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: i
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i
}