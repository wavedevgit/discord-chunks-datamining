/** Chunk was on web.js **/
/** chunk id: 400634, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => o,
  g: () => a
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let a = (0, Chunk600975.C)({
  kind: "guild",
  id: "2025-10_voice_invite_suggestions",
  label: "Voice Invite Suggestions",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk688151.$G.VOICE_CALL,
  treatments: [{
    id: 1,
    label: "Voice Invite Suggestions - Enabled",
    config: {
      enabled: true
    }
  }]
});

function o(e) {
  let {
    autoTrackExposure: t,
    location: n,
    guildId: r
  } = e;
  return a.useExperiment({
    guildId: r,
    location: n
  }, {
    autoTrackExposure: t
  })
}