/** Chunk was on 1272 **/
/** chunk id: 643061, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
  id: "2025-05_summer_2025_gifting",
  label: "Summer 2025 Gifting",
  kind: "user",
  defaultConfig: {
    enableGiftingFlow: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Show Summer 2025 Gifting Flow",
    config: {
      enableGiftingFlow: true
    }
  }]
})