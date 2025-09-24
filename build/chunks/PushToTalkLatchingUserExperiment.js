/** Chunk was on web.js **/
/** chunk id: 383451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => s,
  f: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk751823 = require("./751823.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-05_push_to_talk_latching",
  label: "Push to Talk Latching",
  defaultConfig: {
    enableLatching: false
  },
  treatments: [{
    id: 1,
    label: "Enable latching feature",
    config: {
      enableLatching: true
    }
  }]
});

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.L.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return a.getCurrentConfig({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}

function s(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.L.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return a.useExperiment({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}