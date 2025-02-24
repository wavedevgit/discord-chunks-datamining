/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(808506);

function i() {
  let e = r.ZP.getFocusedPID();
  return null != e && (r.ZP.isReady(e) || r.ZP.isCrashed(e)) ? e : null
}