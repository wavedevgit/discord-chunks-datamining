/** Chunk was on 21738 **/
/** chunk id: 377168, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s,
  q: () => a
});
var Chunk600975 = require("./600975.js"),
  Chunk996744 = require("./996744.js"),
  Chunk688151 = require("./688151.js");
let a = (0, Chunk600975.C)({
  kind: "user",
  id: "2025-06_voice_filters_ea",
  label: "Voice Filters EA",
  defaultConfig: {
    enabled: null
  },
  commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
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
  } = a.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  }), r = (0, i.Cg)({
    location: "VoiceFiltersEarlyAccess",
    autoTrackExposure: true
  });
  return n && r
}