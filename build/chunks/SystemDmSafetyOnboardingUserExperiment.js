/** Chunk was on 93886 **/
/** chunk id: 986081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => i,
  Z: () => a
});
let r = (0, require("./818083.js").B)({
    kind: "user",
    id: "2022-07_system_dm_safety_onboarding",
    label: "System DM Safety Onboarding",
    defaultConfig: {
      systemDMRedesignEnabled: false
    },
    treatments: [{
      id: 1,
      label: "Enabled, v1 copy",
      config: {
        systemDMRedesignEnabled: true
      }
    }, {
      id: 2,
      label: "Enabled, v2 copy",
      config: {
        systemDMRedesignEnabled: true
      }
    }]
  }),
  a = r;

function i() {
  return r.getCurrentConfig({
    location: "0a5674_1"
  }, {
    autoTrackExposure: false
  }).systemDMRedesignEnabled
}