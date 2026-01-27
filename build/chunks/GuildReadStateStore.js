/** Chunk was on web.js **/
/** chunk id: 458294, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => eO
}), require("./896048.js"), require("./938796.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438);
require("./252431.js");
var Chunk395504 = require("./395504.js"),
  Chunk187508 = require("./187508.js"),
  Chunk863005 = require("./863005.js"),
  Chunk152007 = require("./152007.js"),
  Chunk882733 = require("./882733.js"),
  Chunk95701 = require("./95701.js"),
  Chunk661191 = require("./661191.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk536802 = require("./536802.js"),
  Chunk576705 = require("./576705.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk790782 = require("./790782.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}
let T = Chunk652215.eGj,
  C = {},
  N = new Set,
  w = 0;

function R(e) {
  var t;
  let n = C[null != e ? e : T];
  return {
    unread: false,
    unreadByType: {},
    unreadChannelId: null,
    lowImportanceMentionCount: 0,
    highImportanceMentionCount: 0,
    mentionCounts: {},
    ncMentionCount: 0,
    sentinel: null != (t = null == n ? true : n.sentinel) ? t : 0
  }
}

function P(e) {
  var t;
  return C[null != e ? e : T] = null != (t = C[null != e ? e : T]) ? t : R(e)
}

function D(e) {
  let t = P(e);
  t.sentinel++, w++
}

function L(e, t, n) {
  return null != e.guild_id && n && !((0, u.fT)(e.type) || y.Ay.isChannelRecordOrParentOptedIn(e)) && 0 === t
}

function x(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return !(null == e || e.isGuildVocal() && 0 === t || e.hasFlag(v.lx.IS_GUILD_RESOURCE_CHANNEL) || (0 === t || n) && (e.isThread() ? l.A.isMuted(e.id) || y.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : y.Ay.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)) || !e.isPrivate() && (L(e, t, (0, a.WW)(e.guild_id)) || !m.A.can(e.accessPermissions, e))) && (t > 0 || y.Ay.resolveUnreadSetting(e) === A.e.ALL_MESSAGES)
}

function M(e) {
  return "flags" in e
}

function j(e, t, n) {
  return !((0, u.ay)(e.type) && 0 === t || !m.A.canBasicChannel((0, u.pd)(e.type), e) || L(e, t, n) || M(e) && e.hasFlag(v.lx.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || y.Ay.resolveUnreadSetting(e) === A.e.ALL_MESSAGES)
}

function k(e) {
  switch (e) {
    case T:
    case null:
    case true:
      return null;
    default:
      return e
  }
}

function U(e, t) {
  let n = g.Ay.hasUnread(e, t);
  return t !== A.P.GUILD_EVENT ? n : !(y.Ay.isMuted(e) || y.Ay.isMuteScheduledEventsEnabled(e)) && n
}

function G(e, t) {
  let n = R(e);
  return n.mentionCounts = S({}, t.mentionCounts), n.unreadByType = S({}, t.unreadByType), n
}

function F(e) {
  return e.unread = Object.values(e.unreadByType).some(e => e), e
}

function V(e, t) {}

function B(e, t, n) {
  return F(t), t.lowImportanceMentionCount = 0, t.highImportanceMentionCount = 0, d.default.forEach(t.mentionCounts, e => {
    let {
      count: n,
      isMentionLowImportance: r
    } = e;
    r ? t.lowImportanceMentionCount += n : t.highImportanceMentionCount += n
  }), (t.unread !== n.unread || t.lowImportanceMentionCount !== n.lowImportanceMentionCount || t.highImportanceMentionCount !== n.highImportanceMentionCount) && (C[null != e ? e : T] = t, null != e && (t.unread ? N.add(e) : N.delete(e)), w++, D(null != e ? e : T), V(t, n), true)
}

function H(e, t) {
  let n = k(e),
    r = P(n),
    i = G(n, r),
    a = false;
  if (t.forEach(e => {
      let t = p.A.getChannel(e);
      if (null == t) return void delete i.mentionCounts[e];
      if (t.getGuildId() !== n) return;
      let r = g.Ay.getMentionCount(e);
      null !== n && !a && g.Ay.hasUnread(t.id) && x(t, r, true) && (a = true, i.unreadChannelId = t.id), r > 0 && x(t, r) ? i.mentionCounts[t.id] = {
        count: r,
        isMentionLowImportance: g.Ay.getIsMentionLowImportance(e)
      } : delete i.mentionCounts[t.id]
    }), i.unreadByType[A.P.CHANNEL] = a, i.unreadByType[A.P.CHANNEL] !== r.unreadByType[A.P.CHANNEL] && !i.unreadByType[A.P.CHANNEL]) {
    let e = p.A.getChannel(r.unreadChannelId);
    if (!(null != e && !t.includes(e.id) && g.Ay.hasUnread(e.id) && x(e))) return W(n);
    null != n && N.add(n), i.unreadByType[A.P.CHANNEL] = true
  }
  return B(n, i, r)
}

function Y(e, t) {
  if (null == e) return;
  let n = P(e),
    r = G(e, n);
  return r.unreadByType[A.P.GUILD_EVENT] = U(e, t), B(e, r, n)
}

function W(e, t) {
  let n = k(e),
    r = R(n);
  if (null == n) {
    let e = p.A.getMutablePrivateChannels();
    for (let t in e) {
      let n = e[t],
        i = g.Ay.getMentionCount(t);
      i > 0 && x(n, i) && (r.highImportanceMentionCount += i, r.mentionCounts[n.id] = {
        count: i,
        isMentionLowImportance: false
      })
    }
  } else {
    let e = y.Ay.isMuted(n);
    if (e && false === t) returnfalse;
    let i = y.Ay.getMutedChannels(n),
      o = y.Ay.getChannelOverrides(n),
      c = (0, a.WW)(n),
      u = p.A.getMutableBasicGuildChannelsForGuild(n);
    for (let t in u) {
      let n = u[t],
        a = e || i.has(t) || null != n.parent_id && i.has(n.parent_id),
        s = r.unreadByType[A.P.CHANNEL],
        {
          mentionCount: l,
          unread: d,
          isMentionLowImportance: f
        } = g.Ay.getGuildChannelUnreadState(n, c, o, a, s),
        p = l > 0;
      if (!p && a) continue;
      let _ = !s && (!a || p) && d;
      (_ || p) && j(n, l, c) && (_ && (r.unreadByType[A.P.CHANNEL] = true, r.unreadChannelId = t), p && (f ? r.lowImportanceMentionCount += l : r.highImportanceMentionCount += l, r.mentionCounts[n.id] = {
        count: l,
        isMentionLowImportance: f
      }))
    }
    let d = s.A.getActiveJoinedThreadsForGuild(n);
    for (let t in d)
      for (let n in d[t]) {
        !r.unreadByType[A.P.CHANNEL] && g.Ay.hasUnread(n) && !l.A.isMuted(n) && !e && (r.unreadByType[A.P.CHANNEL] = true, r.unreadChannelId = n);
        let t = g.Ay.getMentionCount(n),
          i = g.Ay.getIsMentionLowImportance(n);
        t > 0 && (i ? r.lowImportanceMentionCount += t : r.highImportanceMentionCount += t, r.mentionCounts[n] = {
          count: t,
          isMentionLowImportance: i
        })
      }!r.unreadByType[A.P.GUILD_EVENT] && U(n, A.P.GUILD_EVENT) && (r.unreadByType[A.P.GUILD_EVENT] = true)
  }
  F(r);
  let i = P(n);
  return (r.unread !== i.unread || r.highImportanceMentionCount !== i.highImportanceMentionCount || r.lowImportanceMentionCount !== i.lowImportanceMentionCount) && (C[null != n ? n : T] = r, null != n && (r.unread ? N.add(n) : N.delete(n)), w++, D(null != n ? n : T), V(r, i), true)
}

function K(e) {
  let {
    guilds: t
  } = e;
  C = {}, w = 0, N = new Set, W(null);
  let {
    length: n
  } = t;
  for (let e = 0; e < n; e++) {
    let n = t[e];
    null != n && W(n.properties.id)
  }
}

function z(e) {
  let {
    guilds: t,
    readState: n
  } = e;
  C = {}, w = 0, N = new Set;
  let r = n.entries.length < 500,
    i = new Set;
  for (let e of (r && n.entries.forEach(e => {
      if (null != e.mention_count && e.mention_count > 0)
        if (null == e.read_state_type || e.read_state_type === A.P.CHANNEL) {
          var t;
          i.add(null == (t = p.A.getChannel(e.id)) ? true : t.guild_id)
        } else i.add(e.id)
    }), W(null), t)) W(e.id, r ? i.has(e.id) : true)
}

function q() {
  for (let e of (C = {}, N = new Set, W(null), Object.values(_.A.getGuildIds()))) W(e)
}

function Z(e) {
  let {
    guild: t
  } = e;
  return W(t.id)
}

function Q(e) {
  let {
    guild: t
  } = e;
  return null != C[t.id] && (delete C[t.id], N.delete(t.id), w++, true)
}

function X(e) {
  let {
    channel: {
      id: t,
      guild_id: n
    }
  } = e;
  return H(n, [t])
}

function J() {
  let e = p.A.getChannel(E.A.getChannelId());
  return null != e && H(e.getGuildId(), [e.id])
}

function $(e) {
  let {
    user: t,
    guildId: n
  } = e;
  return t.id === f.default.getId() && W(n)
}

function ee(e) {
  let {
    channelId: t
  } = e, n = p.A.getChannel(t);
  return null != n && H(n.getGuildId(), [n.id])
}

function et(e) {
  let {
    channelId: t
  } = e, n = p.A.getChannel(t);
  if (null == n) returnfalse;
  if (null != n.guild_id) {
    let e = P(n.guild_id);
    if (((n.isThread() ? !l.A.hasJoined(n.id) || l.A.isMuted(n.id) : y.Ay.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) || e.unreadByType[A.P.CHANNEL]) && 0 === g.Ay.getMentionCount(t)) returnfalse
  }
  return H(n.getGuildId(), [n.id])
}

function en(e) {
  let {
    channelId: t,
    guildId: n
  } = e;
  return n !== O.YYv && null != t && H(n, [t])
}

function er(e) {
  let {
    channel: t
  } = e;
  return H(t.getGuildId(), [t.id])
}

function ei(e) {
  let {
    channels: t
  } = e;
  return i()(t).groupBy(e => e.getGuildId()).reduce((e, t, n) => H(n, t.map(e => e.id)) || e, false)
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
  }).filter(e => null != p.A.getChannel(e)).groupBy(e => {
    var t;
    return null == (t = p.A.getChannel(e)) ? true : t.getGuildId()
  }).reduce((e, t, n) => H(n, t) || e, false)
}

function eo(e) {
  let {
    channel: t
  } = e;
  return H(t.getGuildId(), [t.id, t.parent_id])
}

function es(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return Y(t.guild_id, A.P.GUILD_EVENT)
}

function el(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return Y(t.guild_id, A.P.GUILD_EVENT)
}

function ec(e) {
  let {
    id: t,
    ackType: n
  } = e;
  return Y(t, n)
}

function eu(e) {
  let {
    id: t,
    guildId: n
  } = e;
  return H(n, [t])
}

function ed(e) {
  return (0, c.k)(e) && H(e.guildId, [e.id])
}

function ef(e) {
  let {
    threads: t,
    guildId: n
  } = e;
  return H(n, t.filter(e => l.A.hasJoined(e.id)).map(e => e.id))
}

function ep(e) {
  return e.channels.length > 0 && H(e.guildId, e.channels.map(e => e.id))
}

function e_(e) {
  let {
    guildId: t
  } = e;
  return W(t)
}

function eh(e) {
  let {
    guildId: t
  } = e;
  return W(t)
}

function em(e) {
  let {
    userGuildSettings: t
  } = e, n = new Set(t.map(e => {
    var t;
    return null != (t = e.guild_id) ? t : T
  }));
  return d.default.keys(C).reduce((e, t) => n.has(t) && W(t) || e, false)
}

function eg() {
  for (let e in C) C[e].ncMentionCount = 0
}

function eE(e) {
  let {
    guildId: t
  } = e;
  return W(t)
}

function ey(e) {
  let {
    messages: t
  } = e;
  new Set(t.map(e => e.channel_id)).forEach(e => {
    let t = p.A.getChannel(e);
    null != t && H(t.getGuildId(), [e])
  })
}
class eb extends Chunk536802.A {
  initialize() {
    this.waitFor(p.A, E.A, g.Ay, m.A, f.default, b.default, y.Ay, s.A, l.A, o.Ay)
  }
  loadCache() {
    let e = this.readSnapshot(eb.LATEST_SNAPSHOT_VERSION);
    null != e && (C = e.guilds, N = new Set(e.unreadGuilds))
  }
  takeSnapshot() {
    return {
      version: eb.LATEST_SNAPSHOT_VERSION,
      data: {
        guilds: C,
        unreadGuilds: Array.from(N)
      }
    }
  }
  hasAnyUnread() {
    return N.size > 0
  }
  getStoreChangeSentinel() {
    return w
  }
  getMutableUnreadGuilds() {
    return N
  }
  getMutableGuildStates() {
    return C
  }
  hasUnread(e) {
    return N.has(e)
  }
  getMentionCount(e) {
    let t = P(e);
    return t.highImportanceMentionCount + t.lowImportanceMentionCount
  }
  getIsMentionLowImportance(e) {
    return 0 === P(e).highImportanceMentionCount
  }
  getGuildHasUnreadIgnoreMuted(e) {
    let t = p.A.getMutableGuildChannelsForGuild(e);
    for (let e in t) {
      let n = t[e];
      if (null != n && (!n.isGuildVocal() || 0 !== g.Ay.getMentionCount(e)) && m.A.can(n.accessPermissions, n) && g.Ay.hasUnreadOrMentions(e)) returntrue
    }
    let n = s.A.getActiveJoinedThreadsForGuild(e);
    for (let e in n)
      if (null != p.A.getChannel(e)) {
        for (let t in n[e])
          if (g.Ay.hasUnreadOrMentions(t)) returntrue
      } return !!g.Ay.hasUnreadOrMentions(e, A.P.GUILD_EVENT)
  }
  getTotalMentionCount(e) {
    let t = 0;
    for (let n in C) {
      let r = C[n];
      (true !== e || n !== T) && (t += r.highImportanceMentionCount)
    }
    return t
  }
  getTotalNotificationsMentionCount(e) {
    let t = 0;
    for (let n in C) {
      let r = C[n];
      (true !== e || n !== T) && (t += r.ncMentionCount)
    }
    return t
  }
  getPrivateChannelMentionCount() {
    var e;
    let t = C[T];
    return null != (e = null == t ? true : t.highImportanceMentionCount) ? e : 0
  }
  getMentionCountForPrivateChannel(e) {
    var t, n;
    return null != (t = null == (n = C[T]) ? true : n.mentionCounts[e]) ? t : 0
  }
  getGuildChangeSentinel(e) {
    return P(e).sentinel
  }
  constructor() {
    super({
      CONNECTION_OPEN: z,
      OVERLAY_INITIALIZE: K,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      GUILD_CREATE: Z,
      GUILD_DELETE: Q,
      MESSAGE_CREATE: et,
      MESSAGE_ACK: ee,
      BULK_ACK: ea,
      UPDATE_CHANNEL_DIMENSIONS: ee,
      CHANNEL_SELECT: en,
      CHANNEL_DELETE: X,
      WINDOW_FOCUS: J,
      GUILD_ACK: e_,
      GUILD_ROLE_CREATE: eh,
      GUILD_ROLE_DELETE: eh,
      GUILD_ROLE_UPDATE: eh,
      CHANNEL_CREATE: er,
      CHANNEL_UPDATES: ei,
      THREAD_CREATE: eo,
      THREAD_UPDATE: eo,
      THREAD_DELETE: eo,
      THREAD_LIST_SYNC: ef,
      THREAD_MEMBER_UPDATE: eu,
      THREAD_MEMBERS_UPDATE: ed,
      PASSIVE_UPDATE_V2: ep,
      GUILD_MEMBER_UPDATE: $,
      USER_GUILD_SETTINGS_FULL_UPDATE: em,
      USER_GUILD_SETTINGS_CHANNEL_UPDATE: eE,
      USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eE,
      USER_GUILD_SETTINGS_GUILD_UPDATE: eE,
      USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: eE,
      GUILD_FEATURE_ACK: ec,
      GUILD_SCHEDULED_EVENT_CREATE: es,
      GUILD_SCHEDULED_EVENT_UPDATE: es,
      GUILD_SCHEDULED_EVENT_DELETE: el,
      CHANNEL_RTC_UPDATE_CHAT_OPEN: ee,
      LOAD_MESSAGES_SUCCESS: ee,
      CHANNEL_ACK: ee,
      CHANNEL_LOCAL_ACK: ee,
      NOTIFICATION_SETTINGS_UPDATE: q,
      RECOMPUTE_READ_STATES: q,
      VOICE_CHANNEL_SELECT: ee,
      ENABLE_AUTOMATIC_ACK: ee,
      RESORT_THREADS: ee,
      NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eg,
      TRY_ACK: ee,
      LOAD_RECENT_MENTIONS_SUCCESS: ey
    })
  }
}
I(eb, "displayName", "GuildReadStateStore"), I(eb, "LATEST_SNAPSHOT_VERSION", 1);
let eO = new eb