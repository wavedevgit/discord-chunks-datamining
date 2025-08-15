/** Chunk was on 25292 **/
/** chunk id: 592204, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Xo: () => c,
  pB: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk517858 = require("./517858.js");
let o = (0, Chunk818083.B)({
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

function c(e) {
  let {
    location: t
  } = e, n = (0, i.C3)({
    location: t
  });
  return o.useExperiment({
    location: t
  }, {
    autoTrackExposure: true
  }).enabled || n
}

function a(e) {
  let {
    location: t
  } = e, n = (0, i.GW)({
    location: t
  });
  return o.getCurrentConfig({
    location: t
  }).enabled || n
}