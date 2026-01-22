/** Chunk was on web.js **/
/** chunk id: 424225, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => i
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2025-04_guild_profile_to_game_profile",
  label: "Enables opening game profile from guild profile",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "On",
    config: {
      enabled: true
    }
  }]
});

function i() {
  let {
    enabled: e
  } = r.useExperiment({
    location: "GuildProfileToGameProfileExperiment"
  }, {
    autoTrackExposure: true
  });
  return e
}