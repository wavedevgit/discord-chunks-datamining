/** Chunk was on 86142 **/
/** chunk id: 916882, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => i
});
let r = (0, require("./600975.js").C)({
    kind: "user",
    label: "Pomelo Suggestions",
    id: "2023-04_pomelo_suggestions",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "enabled",
      config: {
        enabled: true
      }
    }]
  }),
  i = () => r.getCurrentConfig({
    location: "1907ae_1"
  }, {
    autoTrackExposure: false
  }).enabled