/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(808506);

function i() {
  let e = r.ZP.getFocusedPID();
  return null != e && (r.ZP.isReady(e) || r.ZP.isCrashed(e)) ? e : null
}