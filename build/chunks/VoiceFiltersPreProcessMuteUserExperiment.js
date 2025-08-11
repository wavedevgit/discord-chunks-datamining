/** Chunk was on web.js **/
/** chunk id: 580930, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-02_voice_filters_pre_process_mute",
  label: "Voice Filters Pre Process Mute",
  defaultConfig: {
    voiceFiltersPreProcessMute: false
  },
  treatments: [{
    id: 1,
    label: "Mute before processing when voice filters is enabled",
    config: {
      voiceFiltersPreProcessMute: true
    }
  }]
})