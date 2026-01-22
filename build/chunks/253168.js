/** Chunk was on web.js **/
/** chunk id: 253168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
let r = (0, require("./945810.js").mj)({
  name: "2025-09-idle-detection-adjustments",
  kind: "user",
  defaultConfig: {
    settings_updates: true,
    power_events: true,
    system_wide_input: true,
    generic_inputs: false
  },
  variations: {
    1: {
      settings_updates: false,
      power_events: true,
      system_wide_input: true,
      generic_inputs: false
    },
    2: {
      settings_updates: true,
      power_events: false,
      system_wide_input: true,
      generic_inputs: false
    },
    3: {
      settings_updates: false,
      power_events: false,
      system_wide_input: true,
      generic_inputs: false
    },
    4: {
      settings_updates: false,
      power_events: false,
      system_wide_input: true,
      generic_inputs: true
    },
    5: {
      settings_updates: false,
      power_events: false,
      system_wide_input: false,
      generic_inputs: true
    }
  }
})