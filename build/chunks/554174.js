/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(808506);

function i() {
  let e = r.ZP.getFocusedPID();
  return null != e && (r.ZP.isReady(e) || r.ZP.isCrashed(e)) ? e : null
}