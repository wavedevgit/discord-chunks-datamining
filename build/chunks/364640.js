/** Chunk was on web.js **/
/** chunk id: 364640, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk626135 = require("./626135.js"),
  Chunk591759 = require("./591759.js"),
  Chunk777754 = require("./777754.js"),
  Chunk754688 = require("./754688.js"),
  Chunk981631 = require("./981631.js");
let l = [e => o.Z.isInvite(e) ? "Discord Server Invite" : null, e => {
  let t = i.Z.safeParseWithQuery(e);
  if (null == t) return null;
  let n = (0, a.Qj)(t.path);
  return null == n ? null : c({
    guildId: n.guildId,
    channelId: n.channelId,
    messageId: n.messageId
  })
}, e => o.Z.isDiscoveryLink(e) ? "Discord Discovery Link" : null];

function c(e) {
  return null != e.guildId && null != e.channelId && null != e.messageId ? "Discord Message Link" : null != e.guildId && null != e.channelId ? "Discord Channel Link" : "Unknown"
}

function u(e) {
  for (let t of l) {
    let n = t(e);
    if (null != n) return n
  }
  return "Unknown"
}

function d(e, t) {
  return null == t && null == e ? "Unknown" : null == t ? u(e) : c(t)
}
let f = {
  trackDiscordLinkClicked: function(e) {
    r.default.track(s.rMx.LINK_CLICKED, {
      is_discord_link: true,
      discord_link_type: c(e)
    })
  },
  trackLinkClicked: function(e, t) {
    if (null == e && null == t) return;
    let n = i.Z.isDiscordUrl(e, true) || null != t;
    r.default.track(s.rMx.LINK_CLICKED, {
      is_discord_link: n,
      discord_link_type: n ? d(e, t) : null
    })
  },
  trackAnnouncementMessageLinkClicked: function(e) {
    let {
      messageId: t,
      channelId: n,
      guildId: i,
      sourceChannelId: o,
      sourceGuildId: a
    } = e;
    r.default.track(s.rMx.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
      message_id: t,
      channel_id: n,
      guild_id: i,
      source_channel_id: o,
      source_guild_id: a
    })
  }
}