/** Chunk was on 91173 **/
/** chunk id: 623879, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FZ: () => l,
  ZP: () => a
});
var r, Chunk818083 = require("./818083.js"),
  l = ((r = {}).Control = "CONTROL", r.Social = "SOCIAL", r.Perks = "PERKS", r);
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-06_referral_program_dm_embed_refresh_experiment",
  label: "Referral Program DM Embed Refresh Experiment",
  defaultConfig: {
    cohort: "CONTROL"
  },
  treatments: [{
    id: 0,
    label: "Control group. Users experience existing flow.",
    config: {
      cohort: "CONTROL"
    }
  }, {
    id: 1,
    label: "Social Focus treatment group. Users see copy and imagery that emphasises the social aspect of the referral",
    config: {
      cohort: "SOCIAL"
    }
  }, {
    id: 2,
    label: "Perks Focus treatment group. Users see copy and imagery that emphasises the perks aspect of the referral",
    config: {
      cohort: "PERKS"
    }
  }]
})