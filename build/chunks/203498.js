/** Chunk was on 71567 (60ad2434a2d9f37a.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(2070);

function i() {
  let {
    createGuildApplication: e,
    submitting: t,
    error: n
  } = (0, r.Z)();
  return {
    enableGuildMonetizationForTeam: (t, n, r) => e(t, n, r, "guildcr".concat(t.id)),
    submitting: t,
    error: n
  }
}