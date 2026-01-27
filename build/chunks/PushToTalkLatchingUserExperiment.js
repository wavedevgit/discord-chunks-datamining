/** Chunk was on web.js **/
/** chunk id: 555444, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => o,
  y: () => s
});
var Chunk600975 = require("./600975.js"),
  Chunk128319 = require("./128319.js");
let a = (0, Chunk600975.C)({
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
  } = i.p.getCurrentConfig({
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
  } = i.p.useExperiment({
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