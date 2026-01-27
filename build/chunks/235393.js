/** Chunk was on web.js **/
/** chunk id: 235393, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk954571 = require("./954571.js"),
  Chunk998218 = require("./998218.js"),
  Chunk988102 = require("./988102.js"),
  Chunk376943 = require("./376943.js"),
  Chunk652215 = require("./652215.js");
let l = [e => a.A.isInvite(e) ? "Discord Server Invite" : null, e => {
  let t = i.A.safeParseWithQuery(e);
  if (null == t) return null;
  let n = (0, o.vu)(t.path);
  return null == n ? null : c({
    guildId: n.guildId,
    channelId: n.channelId,
    messageId: n.messageId
  })
}, e => a.A.isDiscoveryLink(e) ? "Discord Discovery Link" : null];

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
    r.default.track(s.HAw.LINK_CLICKED, {
      is_discord_link: true,
      discord_link_type: c(e)
    })
  },
  trackLinkClicked: function(e, t) {
    if (null == e && null == t) return;
    let n = i.A.isDiscordUrl(e, true) || null != t;
    r.default.track(s.HAw.LINK_CLICKED, {
      is_discord_link: n,
      discord_link_type: n ? d(e, t) : null
    })
  },
  trackAnnouncementMessageLinkClicked: function(e) {
    let {
      messageId: t,
      channelId: n,
      guildId: i,
      sourceChannelId: a,
      sourceGuildId: o
    } = e;
    r.default.track(s.HAw.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
      message_id: t,
      channel_id: n,
      guild_id: i,
      source_channel_id: a,
      source_guild_id: o
    })
  }
}