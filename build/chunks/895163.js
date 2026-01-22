/** Chunk was on web.js **/
/** chunk id: 895163, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Xn: () => s,
  tz: () => i
});
var Chunk250105 = require("./250105.js"),
  i = function(e) {
    return e.PAYMENT_REVIEW = "control", e.PLAN_SELECTION = "plan_selection", e
  }({});
let a = (0, Chunk250105.Ay)({
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

function s(e) {
  return a.useConfig({
    location: e
  })
}