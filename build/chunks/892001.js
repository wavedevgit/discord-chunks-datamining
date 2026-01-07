/** Chunk was on web.js **/
/** chunk id: 892001, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  closeUserProfileModal: () => h,
  openUserProfileModal: () => m
});
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk232567 = require("./232567.js"),
  Chunk911284 = require("./911284.js"),
  Chunk710845 = require("./710845.js"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk9161 = require("./9161.js"),
  Chunk484459 = require("./484459.js");
let f = (0, Chunk481060.dcp)(Chunk481060.EFr.SIZE_120),
  p = new Chunk710845.Z("UserProfileModalActionCreators"),
  _ = async e => {
    let t = l.default.getId() === e,
      {
        recentActivityTabEnabled: n
      } = (0, u.x)({
        location: "UserProfileModalActionCreators"
      });
    if (n || t) try {
      await (0, o.Z)(e)
    } catch (t) {
      p.log("Failed to fetch content inventory outbox for ".concat(e, ":"), t)
    }
  };
async function m(e) {
  let {
    userId: t,
    guildId: n,
    channelId: r,
    messageId: o,
    roleId: s,
    sessionId: l,
    joinRequestId: u,
    tabSection: p,
    scrollTarget: m,
    showGuildProfile: h,
    hideRestrictedProfile: g,
    sourceAnalyticsLocations: E,
    appContext: b,
    customStatusPrompt: y = null,
    disableActionsForPreview: O = false
  } = e, v = c.default.getUser(t);
  _(t), null == v ? await (0, a.In)(t, {
    type: "modal",
    guildId: h && null != n ? n : true,
    withMutualFriendsCount: true,
    withMutualFriends: false,
    withMutualGuilds: true,
    joinRequestId: u
  }) : (0, d.Z)(v.id, v.getAvatarURL(true, f), {
    type: "modal",
    guildId: h && null != n ? n : true,
    withMutualFriendsCount: !v.bot,
    withMutualFriends: false,
    withMutualGuilds: true,
    joinRequestId: u
  }), i.Z.dispatch({
    type: "USER_PROFILE_MODAL_OPEN",
    userId: t,
    guildId: null != n ? n : true,
    channelId: null != r ? r : true,
    messageId: null != o ? o : true,
    roleId: null != s ? s : true,
    sessionId: null != l ? l : true,
    openedAt: Date.now(),
    customStatusPrompt: y,
    tabSection: p,
    scrollTarget: m,
    showGuildProfile: h,
    hideRestrictedProfile: g,
    sourceAnalyticsLocations: E,
    appContext: b,
    disableActionsForPreview: O
  })
}

function h() {
  i.Z.dispatch({
    type: "USER_PROFILE_MODAL_CLOSE"
  })
}