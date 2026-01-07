/** Chunk was on 9536 **/
/** chunk id: 203498, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk2070 = require("./2070.js");

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