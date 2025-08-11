/** Chunk was on web.js **/
/** chunk id: 82906, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-12_app_dm_report_button",
  label: "App DMs Report Button Experiment",
  defaultConfig: {
    enabledDesktop: false,
    enabledMobile: false
  },
  treatments: [{
    id: 1,
    label: "Enables the report button in App DMs on desktop",
    config: {
      enabledDesktop: true,
      enabledMobile: false
    }
  }, {
    id: 2,
    label: "Enables the report button in App DMs on desktop and mobile",
    config: {
      enabledDesktop: true,
      enabledMobile: true
    }
  }]
})