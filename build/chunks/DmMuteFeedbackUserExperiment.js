/** Chunk was on 91173 **/
/** chunk id: 305587, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Xs: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-09_dm_mute_feedback",
  label: "DM Mute Feedback Experiment",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable DM Mute Feedback Survey",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  let {
    enabled: t
  } = r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: true
  });
  return t
}