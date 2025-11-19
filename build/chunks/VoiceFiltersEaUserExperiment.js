/** Chunk was on 65347 **/
/** chunk id: 963590, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => r,
  Z: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk875527 = require("./875527.js"),
  Chunk987338 = require("./987338.js");
let r = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-06_voice_filters_ea",
  label: "Voice Filters EA",
  defaultConfig: {
    enabled: null
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 0,
    label: "User don't see voice filters EA",
    config: {
      enabled: null
    }
  }, {
    id: 1,
    label: "User sees voice filters EA",
    config: {
      enabled: true
    }
  }]
});

function s(e) {
  let {
    location: t
  } = e, {
    enabled: n
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  }), a = (0, l.Hu)({
    location: "VoiceFiltersEarlyAccess",
    autoTrackExposure: true
  });
  return n && a
}