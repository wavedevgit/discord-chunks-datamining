/** Chunk was on web.js **/
/** chunk id: 36243, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => o,
  X: () => i
});
let r = (0, require("./818083.js").B)({
  id: "2024-04_quest_preview_tool",
  kind: "user",
  label: "Quest Preview Tool",
  defaultConfig: {
    enabled: false,
    v2Enabled: false
  },
  treatments: [{
    id: 1,
    label: "Preview tool enabled",
    config: {
      enabled: true,
      v2Enabled: false
    }
  }, {
    id: 2,
    label: "Preview tool 2 enabled",
    config: {
      enabled: true,
      v2Enabled: true
    }
  }]
});

function i(e) {
  let {
    location: t
  } = e;
  return r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: false
  }).enabled
}

function o(e) {
  let {
    location: t
  } = e;
  return r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: false
  }).v2Enabled
}