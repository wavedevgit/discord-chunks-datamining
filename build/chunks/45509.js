/** Chunk was on web.js **/
/** chunk id: 45509, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $C: () => o,
  IA: () => i
});
var Chunk722733 = require("./722733.js"),
  i = function(e) {
    return e.PAYMENT_REVIEW = "control", e.PLAN_SELECTION = "plan_selection", e
  }({});
let a = (0, Chunk722733.ZP)({
  name: "2026-01-marketing-banner-cta-action",
  kind: "user",
  defaultConfig: {
    treatment: "control"
  },
  variations: {
    0: {
      treatment: "control"
    },
    1: {
      treatment: "plan_selection"
    }
  }
});

function o(e) {
  return a.useConfig({
    location: e
  })
}