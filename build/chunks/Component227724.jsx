/** Chunk was on web.js **/
/** chunk id: 227724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk994500 = require("./994500.js"),
  Chunk954571 = require("./954571.js"),
  Chunk64175 = require("./64175.js"),
  Chunk652215 = require("./652215.js");
let c = "blocked_user_joined_voice_channel_modal";

function u(e, t) {
  let u = a.A.isBlocked(t);
  (0, i.mMO)(async () => {
    let {
      default: i
    } = await n.e("39679").then(n.bind(n, 552258));
    return n => {
      let {
        transitionState: a,
        onClose: s
      } = n;
      return (0, r.jsx)(i, {
        channelId: e,
        userId: t,
        transitionState: a,
        onClose: s
      })
    }
  }, {
    modalKey: c,
    onCloseCallback: () => {
      s.default.track(l.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: o.Qi.DISMISS,
        channel_id: e,
        blocked_user_ids: u ? [t] : [],
        ignored_user_ids: u ? [] : [t],
        warning_surface: o.gD.POST_JOIN_MODAL
      })
    }
  })
}