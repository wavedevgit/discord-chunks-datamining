/** Chunk was on web.js **/
/** chunk id: 522419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk105600 = require("./105600.js"),
  Chunk64175 = require("./64175.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  let {
    channelId: t,
    blockedUserIds: c,
    ignoredUserIds: u
  } = e;
  (0, i.mMO)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("83792"), n.e("94731")]).then(n.bind(n, 876717));
    return n => {
      let {
        transitionState: i,
        onClose: a
      } = n;
      return (0, r.jsx)(e, {
        channelId: t,
        blockedUserIds: c,
        ignoredUserIds: u,
        transitionState: i,
        onClose: a
      })
    }
  }, {
    onCloseCallback: () => {
      (0, o.U)(t), a.default.track(l.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: s.Qi.DISMISS,
        channel_id: t,
        warning_medium: s.W_.MODAL,
        blocked_user_ids: c,
        ignored_user_ids: u
      })
    }
  })
}