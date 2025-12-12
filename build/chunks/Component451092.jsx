/** Chunk was on web.js **/
/** chunk id: 451092, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk699516 = require("./699516.js"),
  Chunk626135 = require("./626135.js"),
  Chunk110223 = require("./110223.js"),
  Chunk981631 = require("./981631.js");
let c = "blocked_user_joined_voice_channel_modal";

function u(e, t) {
  let u = o.Z.isBlocked(t);
  (0, i.ZDy)(async () => {
    let {
      default: i
    } = await n.e("85505").then(n.bind(n, 232837));
    return n => {
      let {
        transitionState: o,
        onClose: a
      } = n;
      return (0, r.jsx)(i, {
        channelId: e,
        userId: t,
        transitionState: o,
        onClose: a
      })
    }
  }, {
    modalKey: c,
    onCloseCallback: () => {
      a.default.track(l.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: s.q.DISMISS,
        channel_id: e,
        blocked_user_ids: u ? [t] : [],
        ignored_user_ids: u ? [] : [t],
        warning_surface: s.fz.POST_JOIN_MODAL
      })
    }
  })
}