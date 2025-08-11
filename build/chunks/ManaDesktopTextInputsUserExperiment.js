/** Chunk was on web.js **/
/** chunk id: 377089, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-07_mana_desktop_text_inputs",
  label: "Mana Desktop Text Inputs",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "New text input styles",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  return r.useExperiment({
    location: e
  }).enabled
}