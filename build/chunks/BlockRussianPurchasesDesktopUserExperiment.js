/** Chunk was on web.js **/
/** chunk id: 211242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => s,
  Z: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk847903 = require("./847903.js");
let a = (0, Chunk818083.B)({
    kind: "user",
    id: "2022-03_block_russian_purchases",
    label: "Block purchases based on country",
    defaultConfig: {
      paymentsBlocked: false
    },
    treatments: [{
      id: 1,
      label: "Payments Blocked",
      config: {
        paymentsBlocked: true
      }
    }]
  }),
  o = (0, Chunk818083.B)({
    kind: "user",
    id: "2022-03_block_russian_purchases_desktop",
    label: "Block purchases based on country (desktop specific flags)",
    defaultConfig: {
      checkPaymentSource: false
    },
    treatments: [{
      id: 1,
      label: "Check Payment Source",
      config: {
        checkPaymentSource: true
      }
    }]
  });

function s() {
  let {
    paymentsBlocked: e
  } = a.useExperiment({
    location: "c519a9_1"
  }, {
    autoTrackExposure: false
  }), {
    checkPaymentSource: t
  } = o.useExperiment({
    location: "c519a9_2"
  }, {
    autoTrackExposure: false
  }), {
    defaultBillingCountryCode: n
  } = (0, Chunk847903.Z)();
  return module || exports && "RU" === require
}
let l = a