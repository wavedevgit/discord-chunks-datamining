/** Chunk was on 21087 **/
/** chunk id: 56522, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk945577 = require("./945577.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-06_search_desktop_xdm_feedback",
  label: "Search Desktop XDM Feedback Experiment",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enables feedback in xDM control and treatment groups",
    config: {
      enabled: true
    }
  }]
});

function a(e) {
  let {
    location: t
  } = e, {
    enabled: n
  } = l.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  });
  return (0, i.Gc)({
    location: t
  }) && n
}