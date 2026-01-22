/** Chunk was on 43600 **/
/** chunk id: 540683, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => i
});
let l = (0, require("./600975.js").C)({
  kind: "guild",
  id: "2025-08_invite_role_assignment",
  label: "Invite Role Assignment",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable Invite Role Assignment",
    config: {
      enabled: true
    }
  }]
});

function i(e, t) {
  return l.useExperiment({
    guildId: e,
    location: t
  })
}