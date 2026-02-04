/** Chunk was on 17869 **/
/** chunk id: 595914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => r
});
let l = (0, require("./600975.js").C)({
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
  return l.useExperiment({
    location: e
  }, {
    autoTrackExposure: true
  }).announcementComposer
}