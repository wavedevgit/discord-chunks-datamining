/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(818083),
  i = n(987338);
let o = (0, r.B)({
    kind: "user",
    id: "2024-12_shop_link_mention",
    label: "Collectibles Shop Link Mention Experiment",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Render shop link as mention",
      config: {
        enabled: !0
      }
    }],
    commonTriggerPoint: i.$P.CONNECTION_OPEN
  }),
  a = e => o.getCurrentConfig({
    location: e
  }).enabled