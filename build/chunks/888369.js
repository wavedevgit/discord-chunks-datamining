/** Chunk was on web.js **/
"use strict";
n.r(t), n.d(t, {
  default: () => eO
}), n(47120), n(789020);
var r = n(392711),
  i = n.n(r),
  o = n(109911);
n(140155);
var a = n(398758),
  s = n(455199),
  l = n(601070),
  c = n(569471),
  u = n(195663),
  d = n(131704),
  f = n(709054),
  _ = n(314897),
  p = n(592125),
  h = n(430824),
  g = n(496675),
  m = n(306680),
  E = n(944486),
  v = n(412788),
  b = n(9156),
  y = n(594174),
  O = n(981631),
  S = n(176505),
  I = n(490897);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}
let A = O.kod,
  C = {},
  R = new Set,
  P = 0;

function D(e) {
  var t;
  let n = C[null != e ? e : A];
  return {
    unread: !1,
    unreadByType: {},
    unreadChannelId: null,
    lowImportanceMentionCount: 0,
    highImportanceMentionCount: 0,
    mentionCounts: {},
    ncMentionCount: 0,
    sentinel: null !== (t = null == n ? void 0 : n.sentinel) && void 0 !== t ? t : 0
  }
}

function w(e) {
  var t;
  return C[null != e ? e : A] = null !== (t = C[null != e ? e : A]) && void 0 !== t ? t : D(e)
}

function L(e) {
  let t = w(e);
  t.sentinel++, P++
}

function x(e, t, n) {
  return null != e.guild_id && n && !((0, d.Q5)(e.type) || b.ZP.isChannelRecordOrParentOptedIn(e)) && 0 === t
}

function M(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return !(null == e || e.isGuildVocal() && 0 === t || e.hasFlag(S.zZ.IS_GUILD_RESOURCE_CHANNEL) || (0 === t || n) && (e.isThread() ? c.Z.isMuted(e.id) || b.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : b.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)) || !e.isPrivate() && (x(e, t, (0, a.r1)(e.guild_id)) || !g.Z.can(e.accessPermissions, e))) && (t > 0 || b.ZP.resolveUnreadSetting(e) === I.i.ALL_MESSAGES)
}

function k(e) {
  return "flags" in e
}

function j(e, t, n) {
  return !((0, d.bw)(e.type) && 0 === t || !g.Z.canBasicChannel((0, d.Gz)(e.type), e) || x(e, t, n) || k(e) && e.hasFlag(S.zZ.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || b.ZP.resolveUnreadSetting(e) === I.i.ALL_MESSAGES)
}

function U(e) {
  switch (e) {
    case A:
    case null:
    case void 0:
      return null;
    default:
      return e
  }
}

function G(e, t) {
  let n = m.ZP.hasUnread(e, t);
  return t === I.W.GUILD_EVENT ? !(b.ZP.isMuted(e) || b.ZP.isMuteScheduledEventsEnabled(e)) && n : n
}

function B(e, t) {
  let n = D(e);
  return n.mentionCounts = N({}, t.mentionCounts), n.unreadByType = N({}, t.unreadByType), n
}

function V(e) {
  return e.unread = Object.values(e.unreadByType).some(e => e), e
}

function F(e, t) {}

function Z(e, t, n) {
  return V(t), t.lowImportanceMentionCount = 0, t.highImportanceMentionCount = 0, f.default.forEach(t.mentionCounts, e => {
    let {
      count: n,
      isMentionLowImportance: r
    } = e;
    r ? t.lowImportanceMentionCount += n : t.highImportanceMentionCount += n
  }), (t.unread !== n.unread || t.lowImportanceMentionCount !== n.lowImportanceMentionCount || t.highImportanceMentionCount !== n.highImportanceMentionCount) && (C[null != e ? e : A] = t, null != e && (t.unread ? R.add(e) : R.delete(e)), P++, L(null != e ? e : A), !0)
}

function H(e, t) {
  let n = U(e),
    r = w(n),
    i = B(n, r),
    {
      enabled: a,
      removeHomeMentionBadges: l
    } = (0, o.XN)({
      location: "GuildReadStateStore.recountGuild"
    }),
    c = a && l,
    u = !1;
  if (t.forEach(e => {
      let t = p.Z.getChannel(e);
      if (null == t) {
        delete i.mentionCounts[e];
        return
      }
      if (t.getGuildId() !== n) return;
      let r = c ? s.Z.getMentionCountForChannel(e) : 0,
        o = m.ZP.getMentionCount(e) - r;
      null !== n && !u && m.ZP.hasUnread(t.id) && M(t, o, !0) && (u = !0, i.unreadChannelId = t.id), o > 0 && M(t, o) ? i.mentionCounts[t.id] = {
        count: o,
        isMentionLowImportance: m.ZP.getIsMentionLowImportance(e)
      } : delete i.mentionCounts[t.id]
    }), i.unreadByType[I.W.CHANNEL] = u, i.unreadByType[I.W.CHANNEL] !== r.unreadByType[I.W.CHANNEL] && !i.unreadByType[I.W.CHANNEL]) {
    let e = p.Z.getChannel(r.unreadChannelId);
    if (!(null != e && !t.includes(e.id) && m.ZP.hasUnread(e.id) && M(e))) return Y(n);
    null != n && R.add(n), i.unreadByType[I.W.CHANNEL] = !0
  }
  return Z(n, i, r)
}

function W(e, t) {
  if (null == e) return;
  let n = w(e),
    r = B(e, n);
  return r.unreadByType[I.W.GUILD_EVENT] = G(e, t), Z(e, r, n)
}

function Y(e, t) {
  let n = U(e),
    r = D(n),
    {
      enabled: i,
      removeHomeMentionBadges: u
    } = (0, o.XN)({
      location: "GuildReadStateStore.recountGuild"
    }),
    d = i && u;
  if (null == n) {
    let e = p.Z.getMutablePrivateChannels();
    for (let t in e) {
      let n = e[t],
        i = m.ZP.getMentionCount(t);
      i > 0 && M(n, i) && (r.highImportanceMentionCount += i, r.mentionCounts[n.id] = {
        count: i,
        isMentionLowImportance: !1
      })
    }
  } else {
    let e = b.ZP.isMuted(n);
    if (e && !1 === t) return !1;
    let i = b.ZP.getMutedChannels(n),
      o = b.ZP.getChannelOverrides(n),
      u = (0, a.r1)(n),
      f = p.Z.getMutableBasicGuildChannelsForGuild(n);
    for (let t in f) {
      let n = f[t],
        a = e || i.has(t) || null != n.parent_id && i.has(n.parent_id),
        l = r.unreadByType[I.W.CHANNEL],
        {
          mentionCount: c,
          unread: _,
          isMentionLowImportance: p
        } = m.ZP.getGuildChannelUnreadState(n, u, o, a, l),
        h = c > 0;
      if (!h && a) continue;
      let g = !l && (!a || h) && _;
      if ((g || h) && j(n, c, u) && (g && (r.unreadByType[I.W.CHANNEL] = !0, r.unreadChannelId = t), h)) {
        let e = Math.max(c - (d ? s.Z.getMentionCountForChannel(n.id) : 0), 0);
        p ? r.lowImportanceMentionCount += e : r.highImportanceMentionCount += e, r.mentionCounts[n.id] = {
          count: e,
          isMentionLowImportance: p
        }
      }
    }
    let _ = l.Z.getActiveJoinedThreadsForGuild(n);
    for (let t in _)
      for (let n in _[t]) {
        !r.unreadByType[I.W.CHANNEL] && m.ZP.hasUnread(n) && !c.Z.isMuted(n) && !e && (r.unreadByType[I.W.CHANNEL] = !0, r.unreadChannelId = n);
        let t = m.ZP.getMentionCount(n),
          i = m.ZP.getIsMentionLowImportance(n);
        t > 0 && (i ? r.lowImportanceMentionCount += t : r.highImportanceMentionCount += t, r.mentionCounts[n] = {
          count: t,
          isMentionLowImportance: i
        })
      }!r.unreadByType[I.W.GUILD_EVENT] && G(n, I.W.GUILD_EVENT) && (r.unreadByType[I.W.GUILD_EVENT] = !0)
  }
  V(r);
  let f = w(n);
  return (r.unread !== f.unread || r.highImportanceMentionCount !== f.highImportanceMentionCount || r.lowImportanceMentionCount !== f.lowImportanceMentionCount) && (C[null != n ? n : A] = r, null != n && (r.unread ? R.add(n) : R.delete(n)), P++, L(null != n ? n : A), !0)
}

function K(e) {
  let {
    guilds: t
  } = e;
  C = {}, P = 0, R = new Set, Y(null);
  let {
    length: n
  } = t;
  for (let e = 0; e < n; e++) {
    let n = t[e];
    null != n && Y(n.id)
  }
}

function z(e) {
  let {
    guilds: t,
    readState: n
  } = e;
  C = {}, P = 0, R = new Set;
  let r = n.entries.length < 500,
    i = new Set;
  for (let e of (r && n.entries.forEach(e => {
      if (null != e.mention_count && e.mention_count > 0) {
        if (null == e.read_state_type || e.read_state_type === I.W.CHANNEL) {
          var t;
          i.add(null === (t = p.Z.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id)
        } else i.add(e.id)
      }
    }), Y(null), t)) Y(e.id, r ? i.has(e.id) : void 0)
}

function q() {
  for (let e of (C = {}, R = new Set, Y(null), Object.values(h.Z.getGuildIds()))) Y(e)
}

function Q(e) {
  let {
    guild: t
  } = e;
  return Y(t.id)
}

function X(e) {
  let {
    guild: t
  } = e;
  return null != C[t.id] && (delete C[t.id], R.delete(t.id), P++, !0)
}

function J(e) {
  let {
    channel: {
      id: t,
      guild_id: n
    }
  } = e;
  return H(n, [t])
}

function $() {
  let e = p.Z.getChannel(E.Z.getChannelId());
  return null != e && H(e.getGuildId(), [e.id])
}

function ee(e) {
  let {
    user: t,
    guildId: n
  } = e;
  return t.id === _.default.getId() && Y(n)
}

function et(e) {
  let {
    channelId: t
  } = e, n = p.Z.getChannel(t);
  return null != n && H(n.getGuildId(), [n.id])
}

function en(e) {
  let {
    channelId: t
  } = e, n = p.Z.getChannel(t);
  if (null == n) return !1;
  if (null != n.guild_id) {
    let e = w(n.guild_id);
    if (((n.isThread() ? !c.Z.hasJoined(n.id) || c.Z.isMuted(n.id) : b.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) || e.unreadByType[I.W.CHANNEL]) && 0 === m.ZP.getMentionCount(t)) return !1
  }
  return H(n.getGuildId(), [n.id])
}

function er(e) {
  let {
    channelId: t,
    guildId: n
  } = e;
  return n !== O.I_8 && null != t && H(n, [t])
}

function ei(e) {
  let {
    channel: t
  } = e;
  return H(t.getGuildId(), [t.id])
}

function eo(e) {
  let {
    channels: t
  } = e;
  return i()(t).groupBy(e => e.getGuildId()).reduce((e, t, n) => H(n, t.map(e => e.id)) || e, !1)
}

function ea(e) {
  let {
    channels: t
  } = e;
  return i()(t).map(e => {
    let {
      channelId: t
    } = e;
    return t
  }).filter(e => null != p.Z.getChannel(e)).groupBy(e => {
    var t;
    return null === (t = p.Z.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
  }).reduce((e, t, n) => H(n, t) || e, !1)
}

function es(e) {
  let {
    channel: t
  } = e;
  return H(t.getGuildId(), [t.id, t.parent_id])
}

function el(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return W(t.guild_id, I.W.GUILD_EVENT)
}

function ec(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return W(t.guild_id, I.W.GUILD_EVENT)
}

function eu(e) {
  let {
    id: t,
    ackType: n
  } = e;
  return W(t, n)
}

function ed(e) {
  let {
    id: t,
    guildId: n
  } = e;
  return H(n, [t])
}

function ef(e) {
  return (0, u.s)(e) && H(e.guildId, [e.id])
}

function e_(e) {
  let {
    threads: t,
    guildId: n
  } = e;
  return H(n, t.filter(e => c.Z.hasJoined(e.id)).map(e => e.id))
}

function ep(e) {
  return e.channels.length > 0 && H(e.guildId, e.channels.map(e => e.id))
}

function eh(e) {
  let {
    guildId: t
  } = e;
  return Y(t)
}

function eg(e) {
  let {
    guildId: t
  } = e;
  return Y(t)
}

function em(e) {
  let {
    userGuildSettings: t
  } = e, n = new Set(t.map(e => {
    var t;
    return null !== (t = e.guild_id) && void 0 !== t ? t : A
  }));
  return f.default.keys(C).reduce((e, t) => n.has(t) && Y(t) || e, !1)
}

function eE() {
  for (let e in C) C[e].ncMentionCount = 0
}

function ev(e) {
  let {
    guildId: t
  } = e;
  return Y(t)
}

function eb(e) {
  let {
    messages: t
  } = e;
  new Set(t.map(e => e.channel_id)).forEach(e => {
    let t = p.Z.getChannel(e);
    null != t && H(t.getGuildId(), [e])
  })
}
class ey extends v.Z {
  initialize() {
    this.waitFor(p.Z, E.Z, m.ZP, g.Z, _.default, y.default, b.ZP, l.Z, c.Z, s.Z)
  }
  loadCache() {
    let e = this.readSnapshot(ey.LATEST_SNAPSHOT_VERSION);
    null != e && (C = e.guilds, R = new Set(e.unreadGuilds))
  }
  takeSnapshot() {
    return {
      version: ey.LATEST_SNAPSHOT_VERSION,
      data: {
        guilds: C,
        unreadGuilds: Array.from(R)
      }
    }
  }
  hasAnyUnread() {
    return R.size > 0
  }
  getStoreChangeSentinel() {
    return P
  }
  getMutableUnreadGuilds() {
    return R
  }
  getMutableGuildStates() {
    return C
  }
  hasUnread(e) {
    return R.has(e)
  }
  getMentionCount(e) {
    let t = w(e);
    return t.highImportanceMentionCount + t.lowImportanceMentionCount
  }
  getIsMentionLowImportance(e) {
    return 0 === w(e).highImportanceMentionCount
  }
  getGuildHasUnreadIgnoreMuted(e) {
    let t = p.Z.getMutableGuildChannelsForGuild(e);
    for (let e in t) {
      let n = t[e];
      if (null != n && (!n.isGuildVocal() || 0 !== m.ZP.getMentionCount(e)) && g.Z.can(n.accessPermissions, n) && m.ZP.hasUnreadOrMentions(e)) return !0
    }
    let n = l.Z.getActiveJoinedThreadsForGuild(e);
    for (let e in n)
      if (null != p.Z.getChannel(e)) {
        for (let t in n[e])
          if (m.ZP.hasUnreadOrMentions(t)) return !0
      } return !!m.ZP.hasUnreadOrMentions(e, I.W.GUILD_EVENT)
  }
  getTotalMentionCount(e) {
    let t = 0;
    for (let n in C) {
      let r = C[n];
      (!0 !== e || n !== A) && (t += r.highImportanceMentionCount)
    }
    return t
  }
  getTotalNotificationsMentionCount(e) {
    let t = 0;
    for (let n in C) {
      let r = C[n];
      (!0 !== e || n !== A) && (t += r.ncMentionCount)
    }
    return t
  }
  getPrivateChannelMentionCount() {
    var e;
    let t = C[A];
    return null !== (e = null == t ? void 0 : t.highImportanceMentionCount) && void 0 !== e ? e : 0
  }
  getMentionCountForPrivateChannel(e) {
    var t, n;
    return null !== (n = null === (t = C[A]) || void 0 === t ? void 0 : t.mentionCounts[e]) && void 0 !== n ? n : 0
  }
  getGuildChangeSentinel(e) {
    return w(e).sentinel
  }
  constructor() {
    super({
      CONNECTION_OPEN: z,
      OVERLAY_INITIALIZE: K,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      GUILD_CREATE: Q,
      GUILD_DELETE: X,
      MESSAGE_CREATE: en,
      MESSAGE_ACK: et,
      BULK_ACK: ea,
      UPDATE_CHANNEL_DIMENSIONS: et,
      CHANNEL_SELECT: er,
      CHANNEL_DELETE: J,
      WINDOW_FOCUS: $,
      GUILD_ACK: eh,
      GUILD_ROLE_CREATE: eg,
      GUILD_ROLE_DELETE: eg,
      GUILD_ROLE_UPDATE: eg,
      CHANNEL_CREATE: ei,
      CHANNEL_UPDATES: eo,
      THREAD_CREATE: es,
      THREAD_UPDATE: es,
      THREAD_DELETE: es,
      THREAD_LIST_SYNC: e_,
      THREAD_MEMBER_UPDATE: ed,
      THREAD_MEMBERS_UPDATE: ef,
      PASSIVE_UPDATE_V2: ep,
      GUILD_MEMBER_UPDATE: ee,
      USER_GUILD_SETTINGS_FULL_UPDATE: em,
      USER_GUILD_SETTINGS_CHANNEL_UPDATE: ev,
      USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: ev,
      USER_GUILD_SETTINGS_GUILD_UPDATE: ev,
      USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: ev,
      GUILD_FEATURE_ACK: eu,
      GUILD_SCHEDULED_EVENT_CREATE: el,
      GUILD_SCHEDULED_EVENT_UPDATE: el,
      GUILD_SCHEDULED_EVENT_DELETE: ec,
      CHANNEL_RTC_UPDATE_CHAT_OPEN: et,
      LOAD_MESSAGES_SUCCESS: et,
      CHANNEL_ACK: et,
      CHANNEL_LOCAL_ACK: et,
      NOTIFICATION_SETTINGS_UPDATE: q,
      RECOMPUTE_READ_STATES: q,
      VOICE_CHANNEL_SELECT: et,
      ENABLE_AUTOMATIC_ACK: et,
      RESORT_THREADS: et,
      NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eE,
      TRY_ACK: et,
      LOAD_RECENT_MENTIONS_SUCCESS: eb
    })
  }
}
T(ey, "displayName", "GuildReadStateStore"), T(ey, "LATEST_SNAPSHOT_VERSION", 1);
let eO = new ey