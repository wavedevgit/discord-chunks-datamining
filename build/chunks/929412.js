/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  _: () => i
});
var r = n(36056);

function i(e, t) {
  switch (t) {
    case r.pz.BIGINT:
      return e.toBigInt();
    case r.pz.NUMBER:
      return e.toNumber();
    default:
      return e.toString()
  }
}