/** Chunk was on 71611 (6f02c158d7813e32.js) **/
n.d(t, {
  Z: () => r
});
let r = (0, n(818083).B)({
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