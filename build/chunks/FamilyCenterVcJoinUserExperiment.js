/** Chunk was on web.js **/
/** chunk id: 259756, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Xi: () => i
});
let r = (0, require("./818083.js").B)({
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

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = false
  } = e, {
    enabled: i
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i
}