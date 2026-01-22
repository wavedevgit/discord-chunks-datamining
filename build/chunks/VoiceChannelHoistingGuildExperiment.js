/** Chunk was on web.js **/
/** chunk id: 186369, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => a,
  b: () => s
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let a = (0, Chunk600975.C)({
  kind: "guild",
  id: "2025-12_voice_channel_hoisting",
  label: "Voice Channel Hoisting",
  commonTriggerPoint: Chunk688151.$G.VOICE_CALL,
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

function s(e, t) {
  return a.useExperiment({
    guildId: e,
    location: t
  }, {
    autoTrackExposure: false
  })
}