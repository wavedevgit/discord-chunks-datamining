/** Chunk was on web.js **/
/** chunk id: 728364, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => a
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let a = (0, Chunk600975.C)({
  kind: "user",
  id: "2024-06_outbound_promo_desktop_upsell",
  label: "Upsell Outbound Promos",
  commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
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