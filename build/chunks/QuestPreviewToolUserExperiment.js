/** Chunk was on web.js **/
/** chunk id: 807876, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => i,
  U: () => a
});
let r = (0, require("./600975.js").C)({
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

function a(e) {
  let {
    location: t
  } = e;
  return r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: false
  }).v2Enabled
}