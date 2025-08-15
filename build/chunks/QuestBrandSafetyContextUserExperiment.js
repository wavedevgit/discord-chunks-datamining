/** Chunk was on web.js **/
/** chunk id: 811399, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk497505 = require("./497505.js"),
  Chunk46140 = require("./46140.js");
let o = (0, Chunk818083.B)({
    id: "2025-07_quest_brand_safety_context",
    kind: "user",
    label: "Quest brand safety context",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enabled",
      config: {
        enabled: true
      }
    }]
  }),
  s = e => {
    let t = e === i.jn.QUEST_BAR_MOBILE ? a.dr.QUESTS_BAR_MOBILE : a.dr.QUESTS_BAR;
    return o.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: false
    }).enabled
  }