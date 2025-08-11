/** Chunk was on web.js **/
/** chunk id: 957575, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-03_user_profile_voice_activity_card_status",
  label: "User Profile Voice Activity Card Status Experiment",
  defaultConfig: {
    channelStatusEnabled: false
  },
  treatments: [{
    id: 1,
    label: "Channel status enabled",
    config: {
      channelStatusEnabled: true
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e;
  return r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  })
}