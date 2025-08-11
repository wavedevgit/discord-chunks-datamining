/** Chunk was on web.js **/
/** chunk id: 694859, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-12_save_voice_message_menu_item",
  label: "Save voice message menu item on web",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Save voice message menu item active",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return r.useExperiment({
    location: e
  }, {
    autoTrackExposure: t
  }).enabled
}