/** Chunk was on 52199 **/
/** chunk id: 261718, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => l
});
let n = (0, require("./600975.js").C)({
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

function l(e) {
  return n.useExperiment(e)
}