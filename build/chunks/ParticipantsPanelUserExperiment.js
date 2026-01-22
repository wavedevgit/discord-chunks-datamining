/** Chunk was on web.js **/
/** chunk id: 261718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
let r = (0, require("./600975.js").C)({
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