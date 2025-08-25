/** Chunk was on web.js **/
/** chunk id: 530691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => a,
  f: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk818083 = require("./818083.js"),
  Chunk46140 = require("./46140.js");
let a = (0, Chunk818083.B)({
  id: "2025-08_mobile_video_quests_on_desktop",
  kind: "user",
  label: "Mobile Video Quests on Desktop",
  defaultConfig: {
    enabled: false,
    enrollOnDesktop: false
  },
  treatments: [{
    id: 1,
    label: "Enabled, enrollment occurs on desktop",
    config: {
      enabled: true,
      enrollOnDesktop: true
    }
  }, {
    id: 2,
    label: "Enabled, enrollment occurs on mobile",
    config: {
      enabled: true,
      enrollOnDesktop: false
    }
  }]
});

function s(e) {
  let {
    location: t,
    questFeatures: n
  } = e, i = r.useMemo(() => n.includes(o.S7.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE), [n]);
  return a.useExperiment({
    location: t
  }, {
    autoTrackExposure: i
  }).enabled && i
}