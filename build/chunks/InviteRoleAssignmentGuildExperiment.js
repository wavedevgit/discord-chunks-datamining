/** Chunk was on 86736 **/
/** chunk id: 156953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => r
});
let i = (0, require("./818083.js").B)({
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

function r(e, t) {
  return i.useExperiment({
    guildId: e,
    location: t
  })
}