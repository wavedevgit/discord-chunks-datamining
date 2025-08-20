/** Chunk was on web.js **/
/** chunk id: 66683, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => a,
  k: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
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
  o = e => {
    let {
      location: t
    } = e;
    return a.useExperiment({
      location: t
    })
  }