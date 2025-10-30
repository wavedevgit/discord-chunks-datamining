/** Chunk was on 87665 **/
/** chunk id: 702977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  av: () => r
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

function r(e) {
  let {
    location: t,
    autoTrackExposure: n
  } = e, {
    enabled: r
  } = a.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: __OVERLAY__
  });
  return r
}