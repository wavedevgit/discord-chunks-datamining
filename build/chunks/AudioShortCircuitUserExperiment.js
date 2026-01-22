/** Chunk was on web.js **/
/** chunk id: 638188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2024-02_audio_short_circuit",
  label: "Audio processing short circuiting",
  defaultConfig: {
    muteBeforeProcessing: false,
    pttBeforeProcessing: false,
    skipEncode: false
  },
  treatments: [{
    id: 1,
    label: "Mute before processing",
    config: {
      muteBeforeProcessing: true,
      pttBeforeProcessing: false,
      skipEncode: false
    }
  }, {
    id: 2,
    label: "PTT before processing",
    config: {
      muteBeforeProcessing: false,
      pttBeforeProcessing: true,
      skipEncode: false
    }
  }, {
    id: 3,
    label: "Mute + PTT before processing",
    config: {
      muteBeforeProcessing: true,
      pttBeforeProcessing: true,
      skipEncode: false
    }
  }, {
    id: 4,
    label: "Skip encode",
    config: {
      muteBeforeProcessing: false,
      pttBeforeProcessing: false,
      skipEncode: true
    }
  }, {
    id: 5,
    label: "Mute before processing, skip encode",
    config: {
      muteBeforeProcessing: true,
      pttBeforeProcessing: false,
      skipEncode: true
    }
  }, {
    id: 6,
    label: "PTT before processing, skip encode",
    config: {
      muteBeforeProcessing: false,
      pttBeforeProcessing: true,
      skipEncode: true
    }
  }, {
    id: 7,
    label: "Mute + PTT before processing, skip encode",
    config: {
      muteBeforeProcessing: true,
      pttBeforeProcessing: true,
      skipEncode: true
    }
  }]
})