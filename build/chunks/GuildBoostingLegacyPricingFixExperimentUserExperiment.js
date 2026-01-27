/** Chunk was on 62733 **/
/** chunk id: 902038, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => i
});
let i = (0, require("./600975.js").C)({
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