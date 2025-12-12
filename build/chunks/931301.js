/** Chunk was on web.js **/
/** chunk id: 931301, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk981631 = require("./981631.js");
let i = false;

function o() {
  letChunk808506 = require("./808506.js"), Chunk237997 = require("./237997.js"), Chunk145597 = require("./145597.js"), s = i ? a() === o : module.isFocusedPidOutOfProcess(), l = exports.isPinned(Chunk981631.Odu.TEXT);
  switch (true) {
    case __OVERLAY__ && exports.isInstanceLocked():
      return Chunk981631.ADE.OVERLAY_LOCKED_ACTIVATED;
    case __OVERLAY__ && l:
      return Chunk981631.ADE.OVERLAY_UNLOCKED_PINNED;
    case __OVERLAY__ && !exports.isInstanceLocked():
      return Chunk981631.ADE.OVERLAY_UNLOCKED;
    case s && module.isFocusedPidInputLocked():
      return Chunk981631.ADE.OVERLAY_LOCKED_ACTIVATED;
    case s && l:
      return Chunk981631.ADE.OVERLAY_UNLOCKED_PINNED;
    case s && !module.isFocusedPidInputLocked():
      return Chunk981631.ADE.OVERLAY_UNLOCKED;
    default:
      return null
  }
}