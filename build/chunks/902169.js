/** Chunk was on web.js **/
/** chunk id: 902169, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk723702 = require("./723702.js"),
  Chunk170148 = require("./170148.js"),
  Chunk550151 = require("./550151.js"),
  Chunk833349 = require("./833349.js"),
  Chunk652215 = require("./652215.js");

function l(e) {
  let {
    user: t,
    activity: n,
    application: l,
    channelId: c,
    currentUser: u,
    isEmbedded: d,
    ChannelStore: f,
    GuildStore: p,
    GuildMemberCountStore: _,
    RelationshipStore: h,
    SelectedChannelStore: m,
    VoiceStateStore: g,
    PermissionStore: E
  } = e, b = (0, i.A)();
  if (null == t) returnfalse;
  if (d && null != c) return (0, a.Ay)({
    userId: t.id,
    activity: n,
    channelId: c,
    currentUser: u,
    application: l,
    isActivitiesEnabledForCurrentPlatform: b,
    ChannelStore: f,
    VoiceStateStore: g,
    PermissionStore: E,
    GuildStore: p
  }) === a.Gy.CAN_JOIN;
  if (d && null == c && !(0, s.A)(n, o.jUm.CONTEXTLESS) || !(0, r.platformSupportsActivityJoin)() && !d) returnfalse;
  if ((0, s.A)(n, o.jUm.PARTY_PRIVACY_FRIENDS) && h.isFriend(t.id)) returntrue;
  if ((0, s.A)(n, o.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
    let e = f.getChannel(m.getVoiceChannelId());
    if (null == e || !g.isInChannel(e.id, t.id)) returnfalse;
    switch (e.type) {
      case o.rbe.DM:
      case o.rbe.GROUP_DM:
        returntrue
    }
    let n = p.getGuild(e.getGuildId());
    if (null == n || n.features.has(o.GuildFeatures.COMMUNITY)) returnfalse;
    let r = _.getMemberCount(n.id);
    return null != r && r < 100
  }
  returnfalse
}