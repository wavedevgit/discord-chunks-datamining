/** Chunk was on web.js **/
/** chunk id: 386146, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H3: () => l,
  JN: () => a,
  tc: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk984134 = require("./984134.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-02_av_error_codes",
  label: "AV error new UI",
  defaultConfig: {
    avErrorUIEnabled: false
  },
  treatments: [{
    id: 1,
    label: "Show new AV error UI",
    config: {
      avErrorUIEnabled: true
    }
  }]
});

function a(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.Y.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return o.useExperiment({
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
  } = i.Y.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return o.getCurrentConfig({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  }).avErrorUIEnabled
}

function l(e) {
  o.trackExposure({
    location: e
  })
}