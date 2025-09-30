/** Chunk was on web.js **/
/** chunk id: 133340, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b0: () => u,
  tL: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk427164 = require("./427164.js"),
  Chunk389147 = require("./389147.js"),
  Chunk60902 = require("./60902.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-07_cloud_play_cta",
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
    label: "Cloud Play CTA Experiment",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enable Cloud Play CTA",
      config: {
        enabled: true
      }
    }]
  }),
  c = (0, Chunk427164.le)({
    name: "2025-09-fortnite-cloud-play-activity-cta",
    kind: "user",
    defaultConfig: {
      enabled: false
    },
    variations: {
      1: {
        enabled: true
      }
    }
  });

function u(e) {
  let {
    enabled: t
  } = c.useConfig({
    location: "useIsCloudPlayActivityCTAEnabled"
  }), {
    data: n
  } = (0, o.K)(a.B);
  return t && null != n && null != e && n.isFortniteActivity(e)
}