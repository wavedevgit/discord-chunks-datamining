/** Chunk was on web.js **/
/** chunk id: 368326, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-03_custom_status_prompts",
  label: "Custom Status Prompts Experiment",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable custom status prompts",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    enabled: i
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i
}