/** Chunk was on 27978 **/
/** chunk id: 872549, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  WW: () => i
});
let r = (0, require("./818083.js").B)({
    kind: "user",
    id: "2025-09_one_time_login_client",
    label: "One Time Login",
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
  }),
  i = e => r.useExperiment({
    location: e
  }, {
    autoTrackExposure: true
  })