/** Chunk was on 82560 **/
/** chunk id: 437152, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  E: () => a,
  N: () => u
});
var Chunk704215 = require("./704215.js"),
  Chunk433517 = require("./433517.js"),
  Chunk605236 = require("./605236.js"),
  Chunk70956 = require("./70956.js"),
  Chunk921944 = require("./921944.js");
let s = "doNotShowReorderModal";

function a() {
  (0, Chunk605236.Ow)(Chunk704215.z.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
    dismissAction: Chunk921944.L.USER_DISMISS
  })
}

function u() {
  null != Chunk433517.K.get(s) && Chunk433517.K.remove(s);
  let {
    isDismissed: e
  } = (0, Chunk605236.Fo)(Chunk704215.z.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
    cooldownDurationMs: Chunk70956.Z.Millis.WEEK
  });
  return !module
}