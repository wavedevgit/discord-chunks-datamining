/** Chunk was on web.js **/
/** chunk id: 749958, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-07_guild_profile_invite_embed_holdout_two",
  label: "Holdout for guild profile invite embeds",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Guild profile invite embed holdout",
    config: {
      enabled: true
    }
  }]
});

function i() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    {
      enabled: t
    } = r.useExperiment({
      location: "GuildProfileEmbedExperiment"
    }, {
      autoTrackExposure: module
    });
  return exports
}