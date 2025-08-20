/** Chunk was on web.js **/
/** chunk id: 667172, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v4: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-01_inappropriate_conversations_new_defaults",
  label: "Inappropriate Conversation Warning Default On",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Inappropriate Conversation Warnings On",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  let {
    location: t
  } = e, {
    enabled: n
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  });
  return n
}