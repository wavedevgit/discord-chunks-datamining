/** Chunk was on 30829 **/
n.d(t, {
  Z: () => B,
  x: () => x
}), n(47120);
var r, i, l, o, a = n(392711),
  s = n.n(a),
  c = n(442837),
  u = n(570140),
  d = n(220444),
  p = n(565799),
  h = n(501655),
  f = n(569471),
  g = n(592125),
  m = n(430824),
  b = n(306680),
  y = n(914010),
  v = n(9156),
  O = n(938475),
  j = n(823379),
  _ = n(734307),
  C = n(981631),
  x = ((i = {}).HIDDEN = "hidden", i.UNREAD = "unread", i.MENTIONS = "mentions", i.VOICE_CHANNELS = "voice-channels", i);
let P = {
    mode: "hidden",
    mentionCount: 0,
    targetChannelId: null
  },
  N = {
    topBar: P,
    bottomBar: P
  },
  S = {},
  Z = {};

function I(e) {
  let t = g.Z.getChannel(e);
  return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? f.Z.isMuted(t.id) : v.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, d.d)(t)
}

function w(e) {
  let t = g.Z.getChannel(e);
  if (null == t) return !1;
  let n = t.getGuildId();
  if (null == n) return !1;
  let r = v.ZP.isGuildCollapsed(n),
    i = v.ZP.isChannelMuted(n, t.id);
  return (!r || !i) && b.ZP.getMentionCount(e) > 0
}

function E(e) {
  return !v.ZP.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? p.Z.getMutableParticipants(e.id, h.pV.SPEAKER).length > 0 : O.ZP.getVoiceStatesForChannel(e).length > 0)
}

function T(e) {
  var t, n, r;
  let {
    guildChannels: i
  } = _.Z.getGuildWithoutChangingGuildActionRows(e), l = i.getChannels(null !== (t = Z[e]) && void 0 !== t ? t : []);
  if (null == l || 0 === l.length) return !1;
  let o = null,
    a = null,
    c = null,
    u = null,
    d = !0,
    p = !0,
    h = !1,
    f = i.getCategoryFromSection(i.voiceChannelsSectionNumber),
    g = null !== (n = null == f ? void 0 : f.getShownChannelIds()) && void 0 !== n ? n : [],
    [m, y, v] = i.getSlicedChannels(l);
  for (let e = 0; e < y.length; e++) {
    let t = y[e];
    if ((I(t.id) || s().some(t.threadIds, I)) && (p = !1), (w(t.id) || s().some(t.threadIds, w)) && (d = !1), g.includes(t.id) && (h = !0), !p && !d && h) break
  }
  let O = 0,
    j = !1,
    C = 0,
    x = !1;
  if (p || d)
    for (let e = m.length - 1; e >= 0; e--) {
      let t = m[e];
      (I(t.id) || s().some(t.threadIds, I)) && (null == a && (a = t.id), j = !0), (w(t.id) || s().some(t.threadIds, w)) && (null == o && (o = t.id), O += b.ZP.getMentionCount(t.id), O += s().sumBy(t.threadIds, b.ZP.getMentionCount))
    }
  if (p || d)
    for (let e = 0; e < v.length; e++) {
      let t = v[e];
      if (!p && !d) break;
      (I(t.id) || s().some(t.threadIds, I)) && (null == u && (u = t.id), x = !0), (w(t.id) || s().some(t.threadIds, w)) && (null == c && (c = t.id), C += b.ZP.getMentionCount(t.id), C += s().sumBy(t.threadIds, b.ZP.getMentionCount))
    }
  let N = null,
    T = null,
    D = null !== (r = null == f ? void 0 : f.getChannelRecords()) && void 0 !== r ? r : [];
  d && C > 0 ? N = {
    mode: "mentions",
    mentionCount: C,
    targetChannelId: c
  } : !h && s().some(D, E) ? N = {
    mode: "voice-channels",
    mentionCount: 0,
    targetChannelId: null
  } : p && x && (N = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: u
  }), d && O > 0 ? T = {
    mode: "mentions",
    mentionCount: O,
    targetChannelId: o
  } : p && j && (T = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: a
  });
  let A = null != T && (null == N || "mentions" !== N.mode && "mentions" === T.mode),
    R = null != N && ("mentions" === N.mode || !A);
  return S[e] = {
    topBar: A && null != T ? T : P,
    bottomBar: R && null != N ? N : P
  }, !0
}
let D = s().throttle(T, 200);

function A(e) {
  let {
    guildId: t
  } = e, n = m.Z.getGuild(t);
  return !!(null != n && n.hasFeature(C.oNc.COMMUNITY)) && D(t)
}

function R(e) {
  let {
    id: t
  } = e, n = g.Z.getChannel(t);
  if (null == n) return !1;
  let r = m.Z.getGuild(n.guild_id);
  return !!(null != r && r.hasFeature(C.oNc.COMMUNITY)) && D(n.guild_id)
}

function L(e) {
  let {
    channel: t
  } = e, n = g.Z.getChannel(t.id);
  if (null == n) return !1;
  let r = m.Z.getGuild(t.guild_id);
  return !!(null != r && r.hasFeature(C.oNc.COMMUNITY)) && D(n.guild_id)
}

function k(e) {
  let {
    channelId: t
  } = e, n = g.Z.getChannel(t);
  if (null == n) return !1;
  let r = m.Z.getGuild(n.guild_id);
  return !!(null != r && r.hasFeature(C.oNc.COMMUNITY)) && y.Z.getGuildId() === n.guild_id && D(n.guild_id)
}

function M(e) {
  let {
    guildId: t
  } = e;
  return null != t && D(t)
}
class G extends(r = c.ZP.Store) {
  initialize() {
    this.waitFor(_.Z, b.ZP, v.ZP, f.Z, O.ZP, y.Z, m.Z)
  }
  getUnreadStateForGuildId(e) {
    var t;
    return null !== (t = S[e]) && void 0 !== t ? t : N
  }
}
o = "ChannelListUnreadsStore", (l = "displayName") in G ? Object.defineProperty(G, l, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : G[l] = o;
let B = new G(u.Z, {
  UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e, r = m.Z.getGuild(t);
    return !!(null != r && r.hasFeature(C.oNc.COMMUNITY)) && null != n && !s().isEqual(Z[t], n) && (Z[t] = n, T(t))
  },
  BULK_ACK: function(e) {
    let {
      channels: t
    } = e, n = !1;
    return s()(t).map(e => {
      var t;
      let {
        channelId: n
      } = e;
      return null === (t = g.Z.getChannel(n)) || void 0 === t ? void 0 : t.guild_id
    }).filter(j.lm).uniq().forEach(e => {
      let t = m.Z.getGuild(e);
      null != t && t.hasFeature(C.oNc.COMMUNITY) && D(e) && (n = !0)
    }), n
  },
  CHANNEL_ACK: k,
  CHANNEL_DELETE: L,
  CHANNEL_LOCAL_ACK: k,
  MESSAGE_ACK: k,
  MESSAGE_CREATE: k,
  MESSAGE_DELETE_BULK: k,
  MESSAGE_DELETE: k,
  PASSIVE_UPDATE_V2: function(e) {
    let t = m.Z.getGuild(e.guildId);
    return !!(e.channels.length > 0 && null != t && t.hasFeature(C.oNc.COMMUNITY)) && D(e.guildId)
  },
  RESORT_THREADS: k,
  THREAD_CREATE: L,
  THREAD_DELETE: L,
  THREAD_LIST_SYNC: A,
  THREAD_MEMBER_UPDATE: R,
  THREAD_MEMBERS_UPDATE: R,
  THREAD_UPDATE: L,
  BULK_CLEAR_RECENTS: A,
  CATEGORY_COLLAPSE_ALL: A,
  CATEGORY_EXPAND_ALL: A,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = y.Z.getGuildId();
    if (null == n || !new Set(t.map(e => e.guildId)).has(n)) return !1;
    let r = S[n];
    return null != r && "voice-channels" === r.bottomBar.mode && D(n)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: M,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: M,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    for (let e of t) null != e.guild_id && D(e.guild_id)
  },
  USER_GUILD_SETTINGS_GUILD_UPDATE: M,
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: M
})