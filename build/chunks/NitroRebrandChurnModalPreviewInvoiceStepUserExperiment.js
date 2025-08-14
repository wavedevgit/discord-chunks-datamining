/** Chunk was on 81709 **/
/** chunk id: 140447, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => o,
  R: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
    id: "2025-08_nitro_rebrand_churn_modal_preview_invoice_step",
    kind: "user",
    label: "Nitro Rebrand Churn Modal Preview Invoice Step",
    defaultConfig: {
      enabled: false
    },
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
    treatments: [{
      id: 1,
      label: "Enables preview invoice step in rebranded churn modal",
      config: {
        enabled: true
      }
    }]
  }),
  o = e => {
    let {
      location: t
    } = e;
    return a.useExperiment({
      location: t
    })
  }