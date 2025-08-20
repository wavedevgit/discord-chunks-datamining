/** Chunk was on web.js **/
/** chunk id: 116841, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => i
});
let r = (0, require("./987170.js").Z)({
  kind: "user",
  id: "2025-03_activity_privacy_per_guild_settings",
  label: "Show per-guild activity privacy settings",
  defaultConfig: {
    showPerGuildActivityStatusSetting: false
  },
  treatments: [{
    id: 1,
    label: "Show settings",
    config: {
      showPerGuildActivityStatusSetting: true
    }
  }]
});

function i(e) {
  return r.useExperiment({
    location: e
  }, {
    autoTrackExposure: true
  })
}