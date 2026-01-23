/** Chunk was on web.js **/
/** chunk id: 58149, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => W,
  H$: () => j,
  JK: () => H,
  Ou: () => k,
  QS: () => G,
  dI: () => U,
  dL: () => Y,
  qL: () => B,
  zV: () => F
});
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk136722 = require("./136722.js"),
  Chunk880527 = require("./880527.js"),
  Chunk24873 = require("./24873.js"),
  Chunk95701 = require("./95701.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk498642 = require("./498642.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk383501 = require("./383501.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk488926 = require("./488926.js"),
  Chunk287146 = require("./287146.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function L(e) {
  let t = 0;
  for (let n in e) t += 1;
  return t
}

function j(e) {
  var t;
  if (null == e) return null;
  let n = h.A.getGuild(e);
  if (null == n) return null;
  let r = _.A.getNumRoles(n.id),
    i = c.default.getId(),
    a = p.Ay.getMember(e, i),
    s = d.Ay.getChannels(e),
    o = s[d.I6].length,
    l = s[d.vM].length,
    u = S.A.getVoiceStates(e);
  return {
    guild_id: n.id,
    guild_size_total: f.A.getMemberCount(e),
    guild_num_channels: o + l,
    guild_num_text_channels: o,
    guild_num_voice_channels: l,
    guild_num_roles: r,
    guild_member_num_roles: null != a ? a.roles.length : 0,
    guild_member_perms: String(null != (t = g.A.getGuildPermissions(n)) ? t : N.x3),
    guild_is_vip: n.features.has(R.GuildFeatures.VIP_REGIONS),
    is_member: null != a,
    num_voice_channels_active: L(u)
  }
}

function M(e, t) {
  return {
    channel_static_route: t,
    channel_hidden: false
  }
}

function k(e) {
  if (null == e) return null;
  let t = u.A.getChannel(e);
  return null == t ? null : U(t)
}

function U(e) {
  var t;
  if (null == e) return null;
  let n = false,
    r = e.getGuildId();
  if (null != r) {
    let t = e => {
      if (null == e) returnfalse;
      let t = e.permissionOverwrites[r];
      return null != t && a.zy(t.deny, R.xBc.VIEW_CHANNEL)
    };
    n = t(l.Le.has(e.type) && null != e.parent_id ? u.A.getChannel(e.parent_id) : e)
  }
  return {
    channel_id: e.id,
    channel_type: e.type,
    channel_size_total: e.isPrivate() ? e.recipients.length : 0,
    channel_member_perms: String(null != r && null != (t = g.A.getChannelPermissions(e)) ? t : N.x3),
    channel_hidden: n
  }
}

function G(e) {
  if (null == e) return null;
  let t = u.A.getChannel(e);
  if (null == t) return null;
  let n = m.A.isVideoEnabled(),
    r = y.A.getMediaSessionId();
  return x({
    channel_id: t.id,
    channel_type: t.type,
    guild_id: t.getGuildId(),
    media_session_id: r
  }, H(t.getGuildId(), t.id, n), (0, w.V)())
}

function V(e, t) {
  var n, r;
  return null == e ? null != t ? t : null : e.isPrivate() ? null : null != (n = null != (r = e.getGuildId()) ? r : t) ? n : null
}

function F(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (T.default.isThrottled(e)) return;
  let r = !("location" in t) || t.location !== R.ThZ.GUILD_CREATE_INVITE_SUGGESTION,
    i = "guild_id" in t ? t.guild_id : r ? v.A.getGuildId() : null,
    a = "channel_id" in t ? t.channel_id : r ? O.A.getChannelId(i) : null,
    s = u.A.getChannel(a),
    o = x({}, t, j(V(s, i)), null != i && null != a && (0, P.jq)(a) ? M(i, a) : U(s));
  T.default.track(e, o, {
    flush: n
  })
}

function B(e) {
  if ((0, P.jq)(e)) return {
    channel_static_route: e
  };
  let t = u.A.getChannel(e);
  if (null == t) return {
    channel_id: e
  };
  let n = h.A.getGuild(t.guild_id);
  if (null == n) {
    let n = false;
    if (t.isDM()) {
      let e = I.default.getUser(t.recipients[0]);
      null != e && (n = e.bot)
    }
    return {
      channel_id: e,
      is_app_dm: n
    }
  }
  let r = b.Ay.getSnapshot(e, 10 * C.A.Millis.SECOND);
  return {
    channel_id: e,
    channel_was_unread: r.unread,
    channel_mention_count: r.mentionCount,
    channel_is_muted: A.Ay.isChannelMuted(t.guild_id, t.id),
    channel_is_nsfw: t.isNSFW(),
    channel_resolved_unread_setting: A.Ay.resolveUnreadSetting(t),
    channel_preset: (0, o.jU)(A.Ay.resolveUnreadSetting(t), A.Ay.resolvedMessageNotifications(t)),
    guild_id: t.guild_id,
    guild_was_unread: r.guildUnread,
    guild_mention_count: r.guildMentionCount,
    guild_is_muted: A.Ay.isMuted(t.guild_id),
    guild_resolved_unread_setting: A.Ay.resolveGuildUnreadSetting(n),
    guild_preset: (0, o.jU)(A.Ay.resolveGuildUnreadSetting(n), A.Ay.getMessageNotifications(t.guild_id)),
    parent_id: t.parent_id,
    parent_channel_type: t.parentChannelThreadType,
    has_pending_member_action: (0, s.c)(t.guild_id, e),
    can_send_message: g.A.can(R.xBc.SEND_MESSAGES, t),
    is_app_dm: false
  }
}

function H(e, t, n) {
  let r = {
    voice_state_count: 0,
    video_stream_count: 0,
    video_enabled: n
  };
  return i()(S.A.getVoiceStates(e)).filter(e => e.channelId === t).filter(e => e.userId !== c.default.getId()).forEach(e => {
    r.voice_state_count++, (e.selfVideo || e.selfStream) && r.video_stream_count++
  }), r
}

function Y(e, t) {
  let n = {
    custom_status_count: 0
  };
  return i()(S.A.getVoiceStates(e)).forEach(e => {
    e.channelId === t && null != E.A.findActivity(e.userId, e => e.type === R.$pd.CUSTOM_STATUS) && n.custom_status_count++
  }), n
}
let W = {
  trackWithMetadata: F,
  getVoiceStateMetadata: H
}