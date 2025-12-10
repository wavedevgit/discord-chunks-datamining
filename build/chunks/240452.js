/** Chunk was on 37220 **/
/** chunk id: 240452, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => o
});
var Chunk427164 = require("./427164.js"),
  Chunk480218 = require("./480218.js");
let l = (0, Chunk427164.le)({
  name: "2025-12-video-stats-for-nerds",
  kind: "user",
  defaultConfig: {
    enableVideoStatsForNerds: false
  },
  variations: {
    0: {
      enableVideoStatsForNerds: false
    },
    1: {
      enableVideoStatsForNerds: true
    }
  }
});

function o(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = i._.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n ? {
    enableVideoStatsForNerds: false
  } : l.getConfig({
    location: t
  })
}