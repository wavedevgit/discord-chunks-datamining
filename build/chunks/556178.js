/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  g: () => r
});
let r = (0, n(818083).B)({
  kind: "guild",
  id: "2023-09_gaming_stats_setup",
  label: "Gaming stats exposure setup",
  defaultConfig: {
    trackGamingStats: !1
  },
  treatments: [{
    id: 1,
    label: "trigger gaming stats data",
    config: {
      trackGamingStats: !0
    }
  }]
})