/** Chunk was on web.js **/
/** chunk id: 931301, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk981631 = require("./981631.js");
let i = false;

function a() {
  let {
    default: e
  } = n(808506), {
    default: t
  } = n(237997), {
    DEV_PID: a,
    getPID: o
  } = n(145597), s = i ? o() === a : e.isFocusedPidOutOfProcess(), l = t.isPinned(r.Odu.TEXT);
  switch (true) {
    case __OVERLAY__ && t.isInstanceLocked():
      return r.ADE.OVERLAY_LOCKED_ACTIVATED;
    case __OVERLAY__ && l:
      return r.ADE.OVERLAY_UNLOCKED_PINNED;
    case __OVERLAY__ && !t.isInstanceLocked():
      return r.ADE.OVERLAY_UNLOCKED;
    case s && e.isFocusedPidInputLocked():
      return r.ADE.OVERLAY_LOCKED_ACTIVATED;
    case s && l:
      return r.ADE.OVERLAY_UNLOCKED_PINNED;
    case s && !e.isFocusedPidInputLocked():
      return r.ADE.OVERLAY_UNLOCKED;
    default:
      return null
  }
}