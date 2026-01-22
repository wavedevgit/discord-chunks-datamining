/** Chunk was on web.js **/
/** chunk id: 609415, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bv: () => i
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2024-10_block_user_feedback",
  label: "Block User Feedback Experiment",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable Block User Feedback Survey",
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