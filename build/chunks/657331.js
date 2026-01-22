/** Chunk was on web.js **/
/** chunk id: 657331, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  closeUserProfileModal: () => m,
  openUserProfileModal: () => h
});
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk803306 = require("./803306.js"),
  Chunk993327 = require("./993327.js"),
  Chunk626584 = require("./626584.js"),
  Chunk961350 = require("./961350.js"),
  Chunk287809 = require("./287809.js"),
  Chunk840907 = require("./840907.js"),
  Chunk576622 = require("./576622.js");
let f = (0, Chunk397927.FT9)(Chunk397927._3J.SIZE_120),
  p = new Chunk626584.A("UserProfileModalActionCreators"),
  _ = async e => {
    let t = l.default.getId() === e,
      {
        recentActivityTabEnabled: n
      } = (0, u.f)({
        location: "UserProfileModalActionCreators"
      });
    if (n || t) try {
      await (0, s.A)(e)
    } catch (t) {
      p.log("Failed to fetch content inventory outbox for ".concat(e, ":"), t)
    }
  };
async function h(e) {
  let {
    userId: t,
    guildId: n,
    channelId: r,
    messageId: s,
    roleId: o,
    sessionId: l,
    joinRequestId: u,
    tabSection: p,
    scrollTarget: h,
    showGuildProfile: m,
    hideRestrictedProfile: g,
    sourceAnalyticsLocations: E,
    appContext: b,
    customStatusPrompt: y = null,
    disableActionsForPreview: O = false
  } = e, A = c.default.getUser(t);
  _(t), null == A ? await (0, a.eO)(t, {
    type: "modal",
    guildId: m && null != n ? n : true,
    withMutualFriendsCount: true,
    withMutualFriends: false,
    withMutualGuilds: true,
    joinRequestId: u
  }) : (0, d.A)(A.id, A.getAvatarURL(true, f), {
    type: "modal",
    guildId: m && null != n ? n : true,
    withMutualFriendsCount: !A.bot,
    withMutualFriends: false,
    withMutualGuilds: true,
    joinRequestId: u
  }), i.h.dispatch({
    type: "USER_PROFILE_MODAL_OPEN",
    userId: t,
    guildId: null != n ? n : true,
    channelId: null != r ? r : true,
    messageId: null != s ? s : true,
    roleId: null != o ? o : true,
    sessionId: null != l ? l : true,
    openedAt: Date.now(),
    customStatusPrompt: y,
    tabSection: p,
    scrollTarget: h,
    showGuildProfile: m,
    hideRestrictedProfile: g,
    sourceAnalyticsLocations: E,
    appContext: b,
    disableActionsForPreview: O
  })
}

function m() {
  i.h.dispatch({
    type: "USER_PROFILE_MODAL_CLOSE"
  })
}