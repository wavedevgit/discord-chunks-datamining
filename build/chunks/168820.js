/** Chunk was on 1636 **/
/** chunk id: 168820, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => o
});
var Chunk945810 = require("./945810.js"),
  Chunk332628 = require("./332628.js");
let i = (0, Chunk945810.mj)({
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
  } = l.i.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n ? {
    enableVideoStatsForNerds: false
  } : i.getConfig({
    location: t
  })
}