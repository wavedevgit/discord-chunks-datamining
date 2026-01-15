/** Chunk was on web.js **/
/** chunk id: 255621, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk358085 = require("./358085.js"),
  Chunk790920 = require("./790920.js"),
  Chunk527805 = require("./527805.js"),
  Chunk620662 = require("./620662.js"),
  Chunk981631 = require("./981631.js");

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
  } = e, b = (0, i.a)();
  if (null == t) returnfalse;
  if (d && null != c) return (0, a.ZP)({
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
  }) === a.Fw.CAN_JOIN;
  if (d && null == c && !(0, o.Z)(n, s.xjy.CONTEXTLESS) || !(0, r.platformSupportsActivityJoin)() && !d) returnfalse;
  if ((0, o.Z)(n, s.xjy.PARTY_PRIVACY_FRIENDS) && h.isFriend(t.id)) returntrue;
  if ((0, o.Z)(n, s.xjy.PARTY_PRIVACY_VOICE_CHANNEL)) {
    let e = f.getChannel(m.getVoiceChannelId());
    if (null == e || !g.isInChannel(e.id, t.id)) returnfalse;
    switch (e.type) {
      case s.d4z.DM:
      case s.d4z.GROUP_DM:
        returntrue
    }
    let n = p.getGuild(e.getGuildId());
    if (null == n || n.features.has(s.GuildFeatures.COMMUNITY)) returnfalse;
    let r = _.getMemberCount(n.id);
    return null != r && r < 100
  }
  returnfalse
}