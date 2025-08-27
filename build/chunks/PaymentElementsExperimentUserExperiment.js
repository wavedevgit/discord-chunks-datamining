/** Chunk was on web.js **/
/** chunk id: 288138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-06_payment_elements_experiment",
  label: "Payment Elements Experiment",
  commonTriggerPoint: Chunk987338.$P.PAYMENT_FLOW_STARTED,
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable Payment Element features",
    config: {
      enabled: true
    }
  }]
})