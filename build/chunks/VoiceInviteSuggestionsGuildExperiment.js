/** Chunk was on web.js **/
/** chunk id: 71133, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => a,
  o: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "guild",
  id: "2025-10_voice_invite_suggestions",
  label: "Voice Invite Suggestions",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.VOICE_CALL,
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