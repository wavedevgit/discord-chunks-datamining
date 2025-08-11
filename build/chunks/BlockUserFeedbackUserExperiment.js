/** Chunk was on web.js **/
/** chunk id: 869031, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  nZ: () => i
});
let r = (0, require("./818083.js").B)({
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