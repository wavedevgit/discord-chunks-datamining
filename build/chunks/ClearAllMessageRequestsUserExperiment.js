/** Chunk was on 1272 **/
/** chunk id: 183126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2023-01_clear_all_message_requests",
  label: "Safety Experience Reject All Message Requests",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
});

function i() {
  return r.useExperiment({
    location: "c10bec_1"
  }, {
    autoTrackExposure: true
  }).enabled
}