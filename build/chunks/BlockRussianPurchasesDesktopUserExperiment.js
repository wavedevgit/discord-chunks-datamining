/** Chunk was on web.js **/
/** chunk id: 86379, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  H: () => s
});
var Chunk600975 = require("./600975.js"),
  Chunk477421 = require("./477421.js");
let a = (0, Chunk600975.C)({
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
  o = (0, Chunk600975.C)({
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
  } = (0, i.A)();
  return e || t && "RU" === n
}
let l = a