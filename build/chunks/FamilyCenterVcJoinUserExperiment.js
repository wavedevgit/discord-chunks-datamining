/** Chunk was on 75708 **/
/** chunk id: 259756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Xi: () => r
});
let i = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-02_family_center_vc_join",
  label: "Family Center VC Join",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable VC Join in Family Center",
    config: {
      enabled: true
    }
  }]
});

function r(e) {
  let {
    location: t,
    autoTrackExposure: n = false
  } = e, {
    enabled: r
  } = i.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return r
}