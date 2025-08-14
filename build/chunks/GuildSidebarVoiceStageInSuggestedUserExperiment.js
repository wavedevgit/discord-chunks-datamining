/** Chunk was on 62117 **/
/** chunk id: 295454, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => r
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-06_guild_sidebar_voice_stage_in_suggested",
  label: "voice and stage channels appear in suggested if user mentioned in them",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "voice and stage channels are shown in suggested",
    config: {
      enabled: true
    }
  }]
});

function r(e) {
  return l.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled
}