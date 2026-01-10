/** Chunk was on web.js **/
/** chunk id: 375527, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f3: () => o
});
var Chunk722733 = require("./722733.js");
let i = {
    control: 0,
    treatment_a: 300,
    treatment_b: 700
  },
  a = (0, Chunk722733.ZP)({
    name: "2025-12-nitro-s-rewards",
    kind: "user",
    defaultConfig: {
      treatment: "control"
    },
    variations: {
      0: {
        treatment: "control"
      },
      1: {
        treatment: "treatment_a"
      },
      2: {
        treatment: "treatment_b"
      }
    }
  });

function o(e) {
  var t;
  let n = null != (t = a.getConfig({
      location: e
    }).treatment) ? t : "control",
    r = "control" !== n;
  return {
    treatment: n,
    isInTreatment: r,
    orbsRewardAmount: i[n]
  }
}