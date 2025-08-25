/** Chunk was on web.js **/
/** chunk id: 592204, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Xo: () => a,
  pB: () => s
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

function a(e) {
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

function s(e) {
  let {
    location: t
  } = e, n = (0, i.GW)({
    location: t
  });
  return o.getCurrentConfig({
    location: t
  }).enabled || n
}