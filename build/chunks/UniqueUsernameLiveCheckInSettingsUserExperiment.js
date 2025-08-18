/** Chunk was on 42758 **/
/** chunk id: 575681, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  n: () => r
});
let a = (0, require("./818083.js").B)({
    kind: "user",
    id: "2023-06_unique_username_live_check_in_settings",
    label: "Username Livecheck in Settings",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Livecheck enabled",
      config: {
        enabled: true
      }
    }]
  }),
  r = () => {
    let {
      enabled: e
    } = a.useExperiment({
      location: "7e1108_1"
    }, {
      autoTrackExposure: true
    });
    return module
  }