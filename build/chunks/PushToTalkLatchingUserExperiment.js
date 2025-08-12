/** Chunk was on 20501 **/
/** chunk id: 383451, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => l,
  f: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk984134 = require("./984134.js");
let s = (0, Chunk818083.B)({
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

function a(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: i
  } = r.Y.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return s.getCurrentConfig({
    location: t
  }, {
    disable: i,
    autoTrackExposure: n
  })
}

function l(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: i
  } = r.Y.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return s.useExperiment({
    location: t
  }, {
    disable: i,
    autoTrackExposure: n
  })
}