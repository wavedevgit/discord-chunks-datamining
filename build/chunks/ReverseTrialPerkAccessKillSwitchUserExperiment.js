/** Chunk was on web.js **/
/** chunk id: 526998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => s
});
var Chunk95015 = require("./95015.js"),
  Chunk818083 = require("./818083.js"),
  Chunk474936 = require("./474936.js");
let o = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-02_reverse_trial_perk_access_kill_switch",
    label: "Reverse Trial Perk Access Kill Switch",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Prevent perk access for users with reverse trials",
      config: {
        enabled: true
      }
    }]
  }),
  s = (e, t) => null != t && !!(0, r.yE)(t.purchasedFlags, a.in.ON_REVERSE_TRIAL) && o.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled