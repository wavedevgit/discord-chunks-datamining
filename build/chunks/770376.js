/** Chunk was on 41727 **/
/** chunk id: 770376, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u,
  f: () => c
});
var Chunk554146 = require("./554146.js"),
  Chunk506774 = require("./506774.js"),
  Chunk367727 = require("./367727.js"),
  Chunk927813 = require("./927813.js"),
  Chunk49999 = require("./49999.js");
let o = "doNotShowReorderModal";

function c() {
  (0, i.uh)(r.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
    dismissAction: a.i.USER_DISMISS
  })
}

function u() {
  null != l.w.get(o) && l.w.remove(o);
  let {
    isDismissed: e
  } = (0, i.FZ)(r.M.CHANNEL_REORDER_MODAL_DISMISS_SETTING, {
    cooldownDurationMs: s.A.Millis.WEEK
  });
  return !e
}