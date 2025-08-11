/** Chunk was on web.js **/
/** chunk id: 789465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2023-05_overlay_hook_crash_detection",
  label: "Detect and report crashes in the overlay hook",
  defaultConfig: {
    enableCrashReporting: false,
    enableCrashTrigger: false
  },
  treatments: [{
    id: 1,
    label: "EnableCrashReporting",
    config: {
      enableCrashReporting: true,
      enableCrashTrigger: false
    }
  }, {
    id: 2,
    label: "EnableCrashTrigger",
    config: {
      enableCrashReporting: true,
      enableCrashTrigger: true
    }
  }]
})