/** Chunk was on 81709 **/
/** chunk id: 414642, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => a,
  S: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
    id: "2025-07_nitro_rebrand_churn_modal",
    kind: "user",
    label: "Nitro Rebrand Churn Modal",
    defaultConfig: {
      enabled: false,
      discountPrimary: false
    },
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
    treatments: [{
      id: 1,
      label: "Enables rebranded churn modal w/ secondary discount CTA",
      config: {
        enabled: true,
        discountPrimary: false
      }
    }, {
      id: 2,
      label: "Enables rebranded churn modal w/ primary discount CTA",
      config: {
        enabled: true,
        discountPrimary: true
      }
    }]
  }),
  s = e => {
    let {
      location: t
    } = e;
    return a.useExperiment({
      location: t
    })
  }