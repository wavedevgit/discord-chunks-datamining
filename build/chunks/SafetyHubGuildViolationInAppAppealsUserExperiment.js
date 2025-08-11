/** Chunk was on 3940 **/
/** chunk id: 364226, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
let i = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-02_safety_hub_guild_violation_in_app_appeals",
  label: "Safety Hub Guild Violation In App Appeals",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Allow guild violations to be applied using the new appeals ingestion flow",
    config: {
      enabled: true
    }
  }]
});

function E(t) {
  return !!i.useExperiment({
    location: t
  }, {
    autoTrackExposure: true
  }).enabled
}