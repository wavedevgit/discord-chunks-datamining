/** Chunk was on 7654 **/
/** chunk id: 156953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => i
});
let l = (0, require("./818083.js").B)({
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