/** Chunk was on web.js **/
/** chunk id: 794691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk652215 = require("./652215.js");
let i = false;

function a() {
  let {
    default: e
  } = n(242286), {
    default: t
  } = n(256415), {
    DEV_PID: a,
    getPID: o
  } = n(9302), s = i ? o() === a : e.isFocusedPidOutOfProcess() || e.isCurrentPidOutOfProcess(), l = t.isPinned(r.uss.TEXT);
  switch (true) {
    case __OVERLAY__ && t.isInstanceLocked():
      return r.Xmn.OVERLAY_LOCKED_ACTIVATED;
    case __OVERLAY__ && l:
      return r.Xmn.OVERLAY_UNLOCKED_PINNED;
    case __OVERLAY__ && !t.isInstanceLocked():
      return r.Xmn.OVERLAY_UNLOCKED;
    case s && e.isFocusedPidInputLocked():
      return r.Xmn.OVERLAY_LOCKED_ACTIVATED;
    case s && !e.isFocusedPidInputLocked():
      return r.Xmn.OVERLAY_UNLOCKED;
    default:
      return null
  }
}