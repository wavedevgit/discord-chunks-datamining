/** Chunk was on 2827 **/
/** chunk id: 895163, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Xn: () => a,
  tz: () => l
});
var r, Chunk250105 = require("./250105.js"),
  l = ((r = {}).PAYMENT_REVIEW = "control", r.PLAN_SELECTION = "plan_selection", r);
let s = (0, Chunk250105.Ay)({
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

function a(e) {
  return s.useConfig({
    location: e
  })
}