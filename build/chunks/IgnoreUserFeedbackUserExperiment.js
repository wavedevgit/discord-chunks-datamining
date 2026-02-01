/** Chunk was on 15627 **/
/** chunk id: 235390, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  MA: () => o
});
let n = (0, require("./600975.js").C)({
  kind: "user",
  id: "2025-04_ignore_user_feedback",
  label: "Ignore User Feedback Experiment",
  defaultConfig: {
    enabled: false,
    shouldGetShorterIgnoreDuration: false
  },
  treatments: [{
    id: 1,
    label: "Enable Ignore User Feedback Survey",
    config: {
      enabled: true,
      shouldGetShorterIgnoreDuration: false
    }
  }, {
    id: 2,
    label: "Enable Ignore User Feedback Survey w/ shorter duration for testing",
    config: {
      enabled: true,
      shouldGetShorterIgnoreDuration: true
    }
  }]
});

function o(e) {
  return n.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: true
  })
}