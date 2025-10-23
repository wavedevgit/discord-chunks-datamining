/** Chunk was on 79041 **/
/** chunk id: 440051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => a
});
let a = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-01_expiring_status_v2",
  label: "Expiring status Experiment V2",
  defaultConfig: {
    showTempStatusOptions: false,
    expiringStatusProfileFeedback: false,
    hasNewStrings: false
  },
  treatments: [{
    id: 1,
    label: "Allow expiring status with profile feedback",
    config: {
      showTempStatusOptions: true,
      expiringStatusProfileFeedback: true,
      hasNewStrings: true
    }
  }, {
    id: 2,
    label: "Identical to T1",
    config: {
      showTempStatusOptions: true,
      expiringStatusProfileFeedback: true,
      hasNewStrings: true
    }
  }]
})