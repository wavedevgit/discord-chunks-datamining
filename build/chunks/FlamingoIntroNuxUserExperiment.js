/** Chunk was on 99904 **/
/** chunk id: 702977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  av: () => i
});
let a = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-05_flamingo_intro_nux",
  label: "Flamingo Intro NUX",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enabled - Show Intro NUX",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: n
  } = e, {
    enabled: i
  } = a.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: __OVERLAY__
  });
  return i
}