/** Chunk was on web.js **/
/** chunk id: 276767, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk665260 = require("./665260.js"),
  Chunk600975 = require("./600975.js"),
  Chunk788868 = require("./788868.js");
let o = (0, Chunk600975.C)({
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
  s = (e, t) => null != t && !!(0, r.Lt)(t.purchasedFlags, a.lA.ON_REVERSE_TRIAL) && o.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled