/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  j: () => i
});
let r = (0, n(818083).B)({
  id: "2025-01_quest_bar_copy_simplification",
  kind: "user",
  label: "Quest Bar Copy Simplification",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Simplified copy",
    config: {
      enabled: !0
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = !0
  } = e;
  return r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  }).enabled
}