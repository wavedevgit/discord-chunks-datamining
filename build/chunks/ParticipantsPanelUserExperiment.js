/** Chunk was on web.js **/
/** chunk id: 185935, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-12_participants_panel",
  label: "Participants Panel",
  defaultConfig: {
    hasParticipantsPanel: false
  },
  treatments: [{
    id: 1,
    label: "Participants panel in VC and GDM",
    config: {
      hasParticipantsPanel: true
    }
  }]
});

function i(e) {
  return r.useExperiment(e)
}