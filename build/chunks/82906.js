/** Chunk was on 4566 **/
n.d(t, {
  Z: () => r
});
let r = (0, n(818083).B)({
  kind: "user",
  id: "2024-12_app_dm_report_button",
  label: "App DMs Report Button Experiment",
  defaultConfig: {
    enabledDesktop: !1,
    enabledMobile: !1
  },
  treatments: [{
    id: 1,
    label: "Enables the report button in App DMs on desktop",
    config: {
      enabledDesktop: !0,
      enabledMobile: !1
    }
  }, {
    id: 2,
    label: "Enables the report button in App DMs on desktop and mobile",
    config: {
      enabledDesktop: !0,
      enabledMobile: !0
    }
  }]
})