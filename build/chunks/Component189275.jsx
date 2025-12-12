/** Chunk was on web.js **/
/** chunk id: 189275, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk799352 = require("./799352.js"),
  Chunk110223 = require("./110223.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let {
    channelId: t,
    blockedUserIds: c,
    ignoredUserIds: u
  } = e;
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("87337").then(n.bind(n, 164375));
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
      (0, o.O)(t), a.default.track(l.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: s.q.DISMISS,
        channel_id: t,
        warning_medium: s.WR.MODAL,
        blocked_user_ids: c,
        ignored_user_ids: u
      })
    }
  })
}