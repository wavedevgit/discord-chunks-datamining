/** Chunk was on 82560 **/
/** chunk id: 437152, original params: t,e,r (module,exports,require) **/
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
  (0, c.Ow)(n.z.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
    dismissAction: l.L.USER_DISMISS
  })
}

function u() {
  null != o.K.get(s) && o.K.remove(s);
  let {
    isDismissed: t
  } = (0, c.Fo)(n.z.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
    cooldownDurationMs: i.Z.Millis.WEEK
  });
  return !t
}