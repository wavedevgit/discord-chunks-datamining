/** Chunk was on web.js **/
/** chunk id: 338234, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Uw: () => a,
  fC: () => i
});
let r = (0, require("./600975.js").C)({
  kind: "guild",
  id: "2025-01_voice_user_activities",
  label: "Voice User Activities on Hover",
  defaultConfig: {
    enableUserHoverActivities: false
  },
  treatments: [{
    id: 1,
    label: "Enable activities on user hover",
    config: {
      enableUserHoverActivities: true
    }
  }]
});

function i(e) {
  let {
    guildId: t,
    location: n
  } = e;
  return r.useExperiment({
    guildId: t,
    location: n
  }, {
    autoTrackExposure: true
  })
}

function a(e) {
  let {
    guildId: t,
    location: n
  } = e;
  return r.getCurrentConfig({
    guildId: t,
    location: n
  }, {
    autoTrackExposure: true
  })
}