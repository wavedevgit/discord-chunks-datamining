/** Chunk was on 57336 **/
/** chunk id: 71133, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk973285 = require("./973285.js");
let l = (0, Chunk818083.B)({
  kind: "guild",
  id: "2025-10_voice_invite_suggestions",
  label: "Voice Invite Suggestions",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Voice Invite Suggestions - Enabled",
    config: {
      enabled: true
    }
  }]
});

function a(e) {
  let {
    autoTrackExposure: t,
    location: n,
    guildId: i
  } = e, {
    enabled: a
  } = r.W.useExperiment({
    guildId: i,
    location: n
  });
  return l.useExperiment({
    guildId: i,
    location: n
  }, {
    autoTrackExposure: t,
    disable: !a
  })
}