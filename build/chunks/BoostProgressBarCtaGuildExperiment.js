/** Chunk was on 1272 **/
/** chunk id: 691698, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  cT: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "guild",
  id: "2025-08_boost_progress_bar_cta",
  label: "Boost Progress Bar CTA",
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
});

function i(e, t) {
  return r.useExperiment({
    guildId: e,
    location: t
  }, {
    autoTrackExposure: true
  }).enabled
}