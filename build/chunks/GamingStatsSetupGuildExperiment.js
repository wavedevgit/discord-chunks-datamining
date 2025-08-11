/** Chunk was on web.js **/
/** chunk id: 556178, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "guild",
  id: "2023-09_gaming_stats_setup",
  label: "Gaming stats exposure setup",
  defaultConfig: {
    trackGamingStats: false
  },
  treatments: [{
    id: 1,
    label: "trigger gaming stats data",
    config: {
      trackGamingStats: true
    }
  }]
})