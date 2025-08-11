/** Chunk was on 72939 **/
/** chunk id: 588797, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
let o = (0, require("./818083.js").B)({
  kind: "user",
  id: "2023-06_guild_boosting_legacy_pricing_fix_experiment",
  label: "Guild Boosting Legacy Pricing Fix Experiment",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Use Invoice Preview for Boost Pricing",
    config: {
      enabled: true
    }
  }]
})