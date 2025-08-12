/** Chunk was on 26628 **/
/** chunk id: 440051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-01_expiring_status_v2",
  label: "Expiring status Experiment V2",
  defaultConfig: {
    showTempStatusOptions: false,
    expiringStatusProfileFeedback: false,
    hasNewStrings: false,
    hasDefaultClickOption: false,
    showNewHelpTooltip: false,
    hasButtonStyling: false
  },
  treatments: [{
    id: 1,
    label: "Allow expiring status with profile feedback",
    config: {
      showTempStatusOptions: true,
      expiringStatusProfileFeedback: true,
      hasNewStrings: true,
      hasDefaultClickOption: false,
      showNewHelpTooltip: false,
      hasButtonStyling: false
    }
  }, {
    id: 2,
    label: "Default click expiry and tooltip",
    config: {
      showTempStatusOptions: true,
      expiringStatusProfileFeedback: true,
      hasNewStrings: true,
      hasDefaultClickOption: true,
      showNewHelpTooltip: true,
      hasButtonStyling: false
    }
  }, {
    id: 3,
    label: "New button inline option styling",
    config: {
      showTempStatusOptions: true,
      expiringStatusProfileFeedback: true,
      hasNewStrings: true,
      hasDefaultClickOption: true,
      showNewHelpTooltip: false,
      hasButtonStyling: true
    }
  }]
})