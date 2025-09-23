/** Chunk was on web.js **/
/** chunk id: 491966, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
let r = (0, require("./427164.js").le)({
  name: "2025-09-idle-detection-adjustments",
  kind: "user",
  defaultConfig: {
    settings_updates: true,
    power_events: true,
    generic_inputs: false
  },
  variations: {
    1: {
      settings_updates: false,
      power_events: true,
      generic_inputs: false
    },
    2: {
      settings_updates: true,
      power_events: false,
      generic_inputs: false
    },
    3: {
      settings_updates: false,
      power_events: false,
      generic_inputs: false
    },
    4: {
      settings_updates: false,
      power_events: false,
      generic_inputs: true
    }
  }
})