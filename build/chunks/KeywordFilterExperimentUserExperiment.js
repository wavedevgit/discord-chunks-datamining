/** Chunk was on web.js **/
/** chunk id: 592204, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Xo: () => i,
  pB: () => a
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-04_keyword_filter_experiment",
  label: "Replace registered keywords with asterisks",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable Keyword Filter",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  let {
    location: t
  } = e;
  return r.useExperiment({
    location: t
  }, {
    autoTrackExposure: true
  }).enabled
}

function a(e) {
  let {
    location: t
  } = e;
  return r.getCurrentConfig({
    location: t
  }).enabled
}