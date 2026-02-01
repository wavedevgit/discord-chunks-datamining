/** Chunk was on 61344 **/
/** chunk id: 662367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
let l = (0, require("./600975.js").C)({
  kind: "user",
  id: "2021-04_longer_group_dm_invites",
  label: "Longer Group DM Invites",
  defaultConfig: {
    inviteMaxAgeSeconds: 86400
  },
  treatments: [{
    id: 1,
    label: "Makes group DM invites expire after 1 week.",
    config: {
      inviteMaxAgeSeconds: 604800
    }
  }]
})