/** Chunk was on 7384 **/
/** chunk id: 66683, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => s,
  k: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let s = (0, Chunk818083.B)({
    id: "2025-08_churn_discount_header",
    kind: "user",
    label: "Churn Discount Subscription Header Experiment",
    defaultConfig: {
      enabled: false
    },
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
    treatments: [{
      id: 1,
      label: "Enables a churn discount header in subscription details",
      config: {
        enabled: true
      }
    }]
  }),
  a = e => {
    let {
      location: t
    } = e;
    return s.useExperiment({
      location: t
    })
  }