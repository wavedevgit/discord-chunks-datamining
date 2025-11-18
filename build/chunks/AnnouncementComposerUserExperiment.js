/** Chunk was on 71264 **/
/** chunk id: 680835, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
let i = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-07_announcement_composer",
  label: "announcement composer",
  defaultConfig: {
    announcementComposer: false
  },
  treatments: [{
    id: 1,
    label: "show announcement composer",
    config: {
      announcementComposer: true
    }
  }]
});

function r(e) {
  return i.useExperiment({
    location: e
  }, {
    autoTrackExposure: true
  }).announcementComposer
}