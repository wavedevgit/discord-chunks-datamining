/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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