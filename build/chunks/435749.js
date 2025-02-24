/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  A: () => i
});
let r = (0, n(818083).B)({
  kind: "user",
  id: "2024-03_clickstream_analytics",
  label: "Clickstream Analytics",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Clickstream Analytics",
    config: {
      enabled: !0
    }
  }]
});

function i() {
  let {
    enabled: e
  } = r.getCurrentConfig({
    location: "clickstream"
  });
  return e
}