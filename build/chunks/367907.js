/** Chunk was on web.js **/
/** chunk id: 367907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $H: () => F,
  AB: () => G,
  JS: () => j,
  ZP: () => Y,
  hH: () => M,
  kO: () => V,
  oG: () => H,
  v_: () => U,
  yw: () => Z
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk149765 = require("./149765.js"),
  Chunk50244 = require("./50244.js"),
  Chunk686660 = require("./686660.js"),
  Chunk131704 = require("./131704.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk650774 = require("./650774.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk19780 = require("./19780.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk700785 = require("./700785.js"),
  Chunk546416 = require("./546416.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function x(e) {
  let t = 0;
  for (let n in e) t += 1;
  return t
}

function M(e) {
  var t;
  if (null == e) return null;
  let n = h.Z.getGuild(e);
  if (null == n) return null;
  let r = p.Z.getNumRoles(n.id),
    i = c.default.getId(),
    a = _.ZP.getMember(e, i),
    o = d.ZP.getChannels(e),
    s = o[d.sH].length,
    l = o[d.Zb].length,
    u = S.Z.getVoiceStates(e);
  return {
    guild_id: n.id,
    guild_size_total: f.Z.getMemberCount(e),
    guild_num_channels: s + l,
    guild_num_text_channels: s,
    guild_num_voice_channels: l,
    guild_num_roles: r,
    guild_member_num_roles: null != a ? a.roles.length : 0,
    guild_member_perms: String(null != (t = g.Z.getGuildPermissions(n)) ? t : N.Hn),
    guild_is_vip: n.features.has(P.GuildFeatures.VIP_REGIONS),
    is_member: null != a,
    num_voice_channels_active: x(u)
  }
}

function k(e, t) {
  return {
    channel_static_route: t,
    channel_hidden: false
  }
}

function j(e) {
  if (null == e) return null;
  let t = u.Z.getChannel(e);
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
      return null != t && a.e$(t.deny, P.Plq.VIEW_CHANNEL)
    };
    n = t(l.Ec.has(e.type) && null != e.parent_id ? u.Z.getChannel(e.parent_id) : e)
  }
  return {
    channel_id: e.id,
    channel_type: e.type,
    channel_size_total: e.isPrivate() ? e.recipients.length : 0,
    channel_member_perms: String(null != r && null != (t = g.Z.getChannelPermissions(e)) ? t : N.Hn),
    channel_hidden: n
  }
}

function G(e) {
  if (null == e) return null;
  let t = u.Z.getChannel(e);
  if (null == t) return null;
  let n = m.Z.isVideoEnabled(),
    r = b.Z.getMediaSessionId();
  return L({
    channel_id: t.id,
    channel_type: t.type,
    guild_id: t.getGuildId(),
    media_session_id: r
  }, V(t.getGuildId(), t.id, n), (0, R.V)())
}

function B(e, t) {
  var n, r;
  return null == e ? null != t ? t : null : e.isPrivate() ? null : null != (r = null != (n = e.getGuildId()) ? n : t) ? r : null
}

function Z(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (A.default.isThrottled(e)) return;
  let r = !("location" in t) || t.location !== P.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    i = "guild_id" in t ? t.guild_id : r ? v.Z.getGuildId() : null,
    a = "channel_id" in t ? t.channel_id : r ? O.Z.getChannelId(i) : null,
    o = u.Z.getChannel(a),
    s = L({}, t, M(B(o, i)), null != i && null != a && (0, D.AB)(a) ? k(i, a) : U(o));
  A.default.track(e, s, {
    flush: n
  })
}

function F(e) {
  if ((0, D.AB)(e)) return {
    channel_static_route: e
  };
  let t = u.Z.getChannel(e);
  if (null == t) return {
    channel_id: e
  };
  let n = h.Z.getGuild(t.guild_id);
  if (null == n) {
    let n = false;
    if (t.isDM()) {
      let e = T.default.getUser(t.recipients[0]);
      null != e && (n = e.bot)
    }
    return {
      channel_id: e,
      is_app_dm: n
    }
  }
  let r = y.ZP.getSnapshot(e, 10 * C.Z.Millis.SECOND);
  return {
    channel_id: e,
    channel_was_unread: r.unread,
    channel_mention_count: r.mentionCount,
    channel_is_muted: I.ZP.isChannelMuted(t.guild_id, t.id),
    channel_is_nsfw: t.isNSFW(),
    channel_resolved_unread_setting: I.ZP.resolveUnreadSetting(t),
    channel_preset: (0, s.gs)(I.ZP.resolveUnreadSetting(t), I.ZP.resolvedMessageNotifications(t)),
    guild_id: t.guild_id,
    guild_was_unread: r.guildUnread,
    guild_mention_count: r.guildMentionCount,
    guild_is_muted: I.ZP.isMuted(t.guild_id),
    guild_resolved_unread_setting: I.ZP.resolveGuildUnreadSetting(n),
    guild_preset: (0, s.gs)(I.ZP.resolveGuildUnreadSetting(n), I.ZP.getMessageNotifications(t.guild_id)),
    parent_id: t.parent_id,
    parent_channel_type: t.parentChannelThreadType,
    has_pending_member_action: (0, o.P)(t.guild_id, e),
    can_send_message: g.Z.can(P.Plq.SEND_MESSAGES, t),
    is_app_dm: false
  }
}

function V(e, t, n) {
  let r = {
    voice_state_count: 0,
    video_stream_count: 0,
    video_enabled: n
  };
  return i()(S.Z.getVoiceStates(e)).filter(e => e.channelId === t).filter(e => e.userId !== c.default.getId()).forEach(e => {
    r.voice_state_count++, (e.selfVideo || e.selfStream) && r.video_stream_count++
  }), r
}

function H(e, t) {
  let n = {
    custom_status_count: 0
  };
  return i()(S.Z.getVoiceStates(e)).forEach(e => {
    e.channelId === t && null != E.Z.findActivity(e.userId, e => e.type === P.IIU.CUSTOM_STATUS) && n.custom_status_count++
  }), n
}
let Y = {
  trackWithMetadata: Z,
  getVoiceStateMetadata: V
}