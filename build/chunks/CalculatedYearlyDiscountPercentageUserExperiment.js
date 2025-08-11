/** Chunk was on web.js **/
/** chunk id: 621651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-07_calculated_yearly_discount_percentage",
  label: "Calculated Yearly Discount Percentage Experiment",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 0,
    label: "Use existing yearly discount percentage",
    config: {
      enabled: false
    }
  }, {
    id: 1,
    label: "Use calculated yearly discount percentage",
    config: {
      enabled: true
    }
  }]
})