/** Chunk was on 71018 **/
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