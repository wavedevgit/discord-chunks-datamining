/** Chunk was on 31930 **/
/** chunk id: 295454, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  K: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let s = (0, Chunk818083.B)({
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

function l(e) {
  return s.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled
}