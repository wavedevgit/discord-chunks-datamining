/** Chunk was on web.js **/
/** chunk id: 367907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $H: () => V,
  AB: () => B,
  JS: () => U,
  ZP: () => W,
  hH: () => k,
  kO: () => H,
  oG: () => Y,
  v_: () => G,
  yw: () => F
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk149765 = require("./149765.js"),
  Chunk622822 = require("./622822.js"),
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

function L(e, t, n) {
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
      L(e, t, n[t])
    })
  }
  return e
}

function M(e) {
  let t = 0;
  for (let n in e) t += 1;
  return t
}

function k(e) {
  var t;
  if (null == e) return null;
  let n = m.Z.getGuild(e);
  if (null == n) return null;
  let r = h.Z.getNumRoles(n.id),
    i = u.default.getId(),
    o = p.ZP.getMember(e, i),
    a = f.ZP.getChannels(e),
    s = a[f.sH].length,
    l = a[f.Zb].length,
    c = A.Z.getVoiceStates(e);
  return {
    guild_id: n.id,
    guild_size_total: _.Z.getMemberCount(e),
    guild_num_channels: s + l,
    guild_num_text_channels: s,
    guild_num_voice_channels: l,
    guild_num_roles: r,
    guild_member_num_roles: null != o ? o.roles.length : 0,
    guild_member_perms: String(null != (t = E.Z.getGuildPermissions(n)) ? t : R.Hn),
    guild_is_vip: n.features.has(w.oNc.VIP_REGIONS),
    is_member: null != o,
    num_voice_channels_active: M(c)
  }
}

function j(e, t) {
  return {
    channel_static_route: t,
    channel_hidden: false
  }
}

function U(e) {
  if (null == e) return null;
  let t = d.Z.getChannel(e);
  return null == t ? null : G(t)
}

function G(e) {
  var t;
  if (null == e) return null;
  let n = false,
    r = e.getGuildId();
  if (null != r) {
    let t = e => {
      if (null == e) returnfalse;
      let t = e.permissionOverwrites[r];
      return null != t && o.e$(t.deny, w.Plq.VIEW_CHANNEL)
    };
    n = t(c.Ec.has(e.type) && null != e.parent_id ? d.Z.getChannel(e.parent_id) : e)
  }
  return {
    channel_id: e.id,
    channel_type: e.type,
    channel_size_total: e.isPrivate() ? e.recipients.length : 0,
    channel_member_perms: String(null != r && null != (t = E.Z.getChannelPermissions(e)) ? t : R.Hn),
    channel_hidden: n
  }
}

function B(e) {
  if (null == e) return null;
  let t = d.Z.getChannel(e);
  if (null == t) return null;
  let n = g.Z.isVideoEnabled(),
    r = y.Z.getMediaSessionId();
  return x({
    channel_id: t.id,
    channel_type: t.type,
    guild_id: t.getGuildId(),
    media_session_id: r
  }, H(t.getGuildId(), t.id, n), (0, P.V)())
}

function Z(e, t) {
  var n, r;
  return null == e ? null != t ? t : null : e.isPrivate() ? null : null != (r = null != (n = e.getGuildId()) ? n : t) ? r : null
}

function F(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (N.default.isThrottled(e)) return;
  let r = !("location" in t) || t.location !== w.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    i = "guild_id" in t ? t.guild_id : r ? I.Z.getGuildId() : null,
    o = "channel_id" in t ? t.channel_id : r ? v.Z.getChannelId(i) : null,
    a = d.Z.getChannel(o),
    s = x({}, t, k(Z(a, i)), null != i && null != o && (0, D.AB)(o) ? j(i, o) : G(a));
  N.default.track(e, s, {
    flush: n
  })
}

function V(e) {
  if ((0, D.AB)(e)) return {
    channel_static_route: e
  };
  let t = d.Z.getChannel(e);
  if (null == t) return {
    channel_id: e
  };
  let n = m.Z.getGuild(t.guild_id);
  if (null == n) {
    let n = false;
    if (t.isDM()) {
      let e = S.default.getUser(t.recipients[0]);
      null != e && (n = e.bot)
    }
    return {
      channel_id: e,
      is_app_dm: n
    }
  }
  let r = O.ZP.getSnapshot(e, 10 * C.Z.Millis.SECOND);
  return {
    channel_id: e,
    channel_was_unread: r.unread,
    channel_mention_count: r.mentionCount,
    channel_is_muted: T.ZP.isChannelMuted(t.guild_id, t.id),
    channel_is_nsfw: (0, a.aC)(t),
    channel_resolved_unread_setting: T.ZP.resolveUnreadSetting(t),
    channel_preset: (0, l.gs)(T.ZP.resolveUnreadSetting(t), T.ZP.resolvedMessageNotifications(t)),
    guild_id: t.guild_id,
    guild_was_unread: r.guildUnread,
    guild_mention_count: r.guildMentionCount,
    guild_is_muted: T.ZP.isMuted(t.guild_id),
    guild_resolved_unread_setting: T.ZP.resolveGuildUnreadSetting(n),
    guild_preset: (0, l.gs)(T.ZP.resolveGuildUnreadSetting(n), T.ZP.getMessageNotifications(t.guild_id)),
    parent_id: t.parent_id,
    parent_channel_type: t.parentChannelThreadType,
    has_pending_member_action: (0, s.P)(t.guild_id, e),
    can_send_message: E.Z.can(w.Plq.SEND_MESSAGES, t),
    is_app_dm: false
  }
}

function H(e, t, n) {
  let r = {
    voice_state_count: 0,
    video_stream_count: 0,
    video_enabled: n
  };
  return i()(A.Z.getVoiceStates(e)).filter(e => e.channelId === t).filter(e => e.userId !== u.default.getId()).forEach(e => {
    r.voice_state_count++, (e.selfVideo || e.selfStream) && r.video_stream_count++
  }), r
}

function Y(e, t) {
  let n = {
    custom_status_count: 0
  };
  return i()(A.Z.getVoiceStates(e)).forEach(e => {
    e.channelId === t && null != b.Z.findActivity(e.userId, e => e.type === w.IIU.CUSTOM_STATUS) && n.custom_status_count++
  }), n
}
let W = {
  trackWithMetadata: F,
  getVoiceStateMetadata: H
}