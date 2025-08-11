/** Chunk was on web.js **/
/** chunk id: 81570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-02_reaction_reply",
  label: "Reaction Reply Experiment",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable reaction reply",
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