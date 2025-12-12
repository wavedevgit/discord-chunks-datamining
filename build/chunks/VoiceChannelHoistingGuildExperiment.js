/** Chunk was on web.js **/
/** chunk id: 526139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => a,
  c: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
  kind: "guild",
  id: "2025-12_voice_channel_hoisting",
  label: "Voice Channel Hoisting",
  commonTriggerPoint: Chunk987338.$P.VOICE_CALL,
  defaultConfig: {
    enableWaveformIcon: false,
    enableHighlight: false
  },
  treatments: [{
    id: 1,
    label: "Both waveform and highlight",
    config: {
      enableWaveformIcon: true,
      enableHighlight: true
    }
  }, {
    id: 2,
    label: "Waveform icon only",
    config: {
      enableWaveformIcon: true,
      enableHighlight: false
    }
  }]
});

function a(e, t) {
  return o.useExperiment({
    guildId: e,
    location: t
  }, {
    autoTrackExposure: false
  })
}