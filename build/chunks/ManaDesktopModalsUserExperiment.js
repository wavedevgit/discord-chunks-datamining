/** Chunk was on web.js **/
/** chunk id: 724723, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i,
  q: () => a
});
let r = (0, require("./818083.js").B)({
    kind: "user",
    id: "2025-06_mana_desktop_modals",
    label: "Mana Desktop Modals",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "New modal components",
      config: {
        enabled: true
      }
    }]
  }),
  i = r;

function a(e) {
  return r.useExperiment({
    location: e
  }).enabled
}