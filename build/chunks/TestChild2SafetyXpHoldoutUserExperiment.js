/** Chunk was on web.js **/
/** chunk id: 493364, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => i
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2024-09_test_child_2_safety_xp_holdout",
  label: "Holdout experiment",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enables the holdout experiment",
    config: {
      enabled: true
    }
  }]
});

function i() {
  let {
    enabled: e
  } = r.getCurrentConfig({
    location: "686da2_1"
  }, {
    autoTrackExposure: true
  });
  return e
}