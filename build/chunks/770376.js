/** Chunk was on 24848 **/
/** chunk id: 770376, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => u,
  f: () => a
});
var Chunk554146 = require("./554146.js"),
  Chunk506774 = require("./506774.js"),
  Chunk367727 = require("./367727.js"),
  Chunk927813 = require("./927813.js"),
  Chunk49999 = require("./49999.js");
let s = "doNotShowReorderModal";

function a() {
  (0, c.uh)(n.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
    dismissAction: l.i.USER_DISMISS
  })
}

function u() {
  null != o.w.get(s) && o.w.remove(s);
  let {
    isDismissed: e
  } = (0, c.FZ)(n.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
    cooldownDurationMs: i.A.Millis.WEEK
  });
  return !e
}