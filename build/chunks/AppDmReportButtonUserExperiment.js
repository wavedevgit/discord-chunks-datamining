/** Chunk was on 17534 **/
/** chunk id: 782934, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => r
});
let r = (0, require("./600975.js").C)({
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