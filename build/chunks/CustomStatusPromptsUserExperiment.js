/** Chunk was on web.js **/
/** chunk id: 576241, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => i
});
let r = (0, require("./600975.js").C)({
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