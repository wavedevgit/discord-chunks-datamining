/** Chunk was on web.js **/
/** chunk id: 163684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2024-06_outbound_promo_desktop_upsell",
  label: "Upsell Outbound Promos",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable upsells for outbound promos w/ Nagbar variant 1 - gift inventory cta",
    config: {
      enabled: true
    }
  }]
})