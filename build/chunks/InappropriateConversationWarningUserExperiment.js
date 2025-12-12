/** Chunk was on web.js **/
/** chunk id: 237292, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  mG: () => i,
  y0: () => o
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-01_inappropriate_conversation_warning",
  label: "Inappropriate Conversation Warning",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable Inappropriate Conversation Warning",
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
  } = r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i
}

function o(e) {
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