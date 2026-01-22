/** Chunk was on 97492 **/
/** chunk id: 288989, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => U,
  k: () => x
}), require("./896048.js");
var r, l, i, Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk455234 = require("./455234.js"),
  Chunk63995 = require("./63995.js"),
  Chunk69407 = require("./69407.js"),
  Chunk152007 = require("./152007.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk222823 = require("./222823.js"),
  Chunk967198 = require("./967198.js"),
  Chunk543465 = require("./543465.js"),
  Chunk607567 = require("./607567.js"),
  Chunk403362 = require("./403362.js"),
  Chunk960755 = require("./960755.js"),
  Chunk652215 = require("./652215.js"),
  x = ((l = {}).HIDDEN = "hidden", l.UNREAD = "unread", l.MENTIONS = "mentions", l.VOICE_CHANNELS = "voice-channels", l);
let E = {
    mode: "hidden",
    mentionCount: 0,
    targetChannelId: null
  },
  _ = {
    topBar: E,
    bottomBar: E
  },
  C = {},
  S = {};

function I(e) {
  let t = h.A.getChannel(e);
  return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? p.A.isMuted(t.id) : A.Ay.isChannelMuted(t.getGuildId(), t.id)) && (0, u.Y)(t)
}

function N(e) {
  let t = h.A.getChannel(e);
  if (null == t) returnfalse;
  let n = t.getGuildId();
  if (null == n) returnfalse;
  let r = A.Ay.isGuildCollapsed(n),
    l = A.Ay.isChannelMuted(n, t.id);
  return (!r || !l) && g.Ay.getMentionCount(e) > 0
}

function T(e) {
  return !A.Ay.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? d.A.getMutableParticipants(e.id, f.ip.SPEAKER).length > 0 : y.Ay.getVoiceStatesForChannel(e).length > 0)
}

function P(e) {
  var t, n, r;
  let {
    guildChannels: l
  } = j.A.getGuildWithoutChangingGuildActionRows(e), i = l.getChannels(null != (t = S[e]) ? t : []);
  if (null == i || 0 === i.length) returnfalse;
  let a = null,
    o = null,
    c = null,
    u = null,
    d = true,
    f = true,
    p = false,
    h = l.getCategoryFromSection(l.voiceChannelsSectionNumber),
    b = null != (n = null == h ? true : h.getShownChannelIds()) ? n : [],
    [m, A, y] = l.getSlicedChannels(i);
  for (let e = 0; e < A.length; e++) {
    let t = A[e];
    if ((I(t.id) || s().some(t.threadIds, I)) && (f = false), (N(t.id) || s().some(t.threadIds, N)) && (d = false), b.includes(t.id) && (p = true), !f && !d && p) break
  }
  let O = 0,
    v = false,
    x = 0,
    _ = false;
  if (f || d)
    for (let e = m.length - 1; e >= 0; e--) {
      let t = m[e];
      (I(t.id) || s().some(t.threadIds, I)) && (null == o && (o = t.id), v = true), (N(t.id) || s().some(t.threadIds, N)) && (null == a && (a = t.id), O += g.Ay.getMentionCount(t.id), O += s().sumBy(t.threadIds, g.Ay.getMentionCount))
    }
  if (f || d)
    for (let e = 0; e < y.length; e++) {
      let t = y[e];
      if (!f && !d) break;
      (I(t.id) || s().some(t.threadIds, I)) && (null == u && (u = t.id), _ = true), (N(t.id) || s().some(t.threadIds, N)) && (null == c && (c = t.id), x += g.Ay.getMentionCount(t.id), x += s().sumBy(t.threadIds, g.Ay.getMentionCount))
    }
  let P = null,
    w = null,
    R = null != (r = null == h ? true : h.getChannelRecords()) ? r : [];
  d && x > 0 ? P = {
    mode: "mentions",
    mentionCount: x,
    targetChannelId: c
  } : !p && s().some(R, T) ? P = {
    mode: "voice-channels",
    mentionCount: 0,
    targetChannelId: null
  } : f && _ && (P = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: u
  }), d && O > 0 ? w = {
    mode: "mentions",
    mentionCount: O,
    targetChannelId: a
  } : f && v && (w = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: o
  });
  let D = null != w && (null == P || "mentions" !== P.mode && "mentions" === w.mode),
    M = null != P && ("mentions" === P.mode || !D);
  return C[e] = {
    topBar: D && null != w ? w : E,
    bottomBar: M && null != P ? P : E
  }, true
}
let w = s().throttle(P, 200);

function R(e) {
  let {
    guildId: t
  } = e, n = b.A.getGuild(t);
  return null != n && !!n.features.has(v.GuildFeatures.COMMUNITY) && w(t)
}

function D(e) {
  let {
    id: t
  } = e, n = h.A.getChannel(t);
  if (null == n) returnfalse;
  let r = b.A.getGuild(n.guild_id);
  return null != r && !!r.features.has(v.GuildFeatures.COMMUNITY) && w(n.guild_id)
}

function M(e) {
  let {
    channel: t
  } = e, n = h.A.getChannel(t.id);
  if (null == n) returnfalse;
  let r = b.A.getGuild(t.guild_id);
  return null != r && !!r.features.has(v.GuildFeatures.COMMUNITY) && w(n.guild_id)
}

function L(e) {
  let {
    channelId: t
  } = e, n = h.A.getChannel(t);
  if (null == n) returnfalse;
  let r = b.A.getGuild(n.guild_id);
  return null != r && !!r.features.has(v.GuildFeatures.COMMUNITY) && m.A.getGuildId() === n.guild_id && w(n.guild_id)
}

function G(e) {
  let {
    guildId: t
  } = e;
  return null != t && w(t)
}
class k extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(j.A, h.A, b.A, p.A, g.Ay, m.A, y.Ay, d.A, A.Ay)
  }
  getUnreadStateForGuildId(e) {
    var t;
    return null != (t = C[e]) ? t : _
  }
}(i = "displayName") in k ? Object.defineProperty(k, i, {
  value: "ChannelListUnreadsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : k[i] = "ChannelListUnreadsStore";
let U = new k(Chunk73153.h, {
  UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e, r = b.A.getGuild(t);
    return null != r && !!r.features.has(v.GuildFeatures.COMMUNITY) && null != n && !s().isEqual(S[t], n) && (S[t] = n, P(t))
  },
  BULK_ACK: function(e) {
    let {
      channels: t
    } = e, n = false;
    return s()(t).map(e => {
      var t;
      let {
        channelId: n
      } = e;
      return null == (t = h.A.getChannel(n)) ? true : t.guild_id
    }).filter(O.Vq).uniq().forEach(e => {
      let t = b.A.getGuild(e);
      null != t && t.features.has(v.GuildFeatures.COMMUNITY) && w(e) && (n = true)
    }), n
  },
  CHANNEL_ACK: L,
  CHANNEL_DELETE: M,
  CHANNEL_LOCAL_ACK: L,
  MESSAGE_ACK: L,
  MESSAGE_CREATE: L,
  MESSAGE_DELETE_BULK: L,
  MESSAGE_DELETE: L,
  PASSIVE_UPDATE_V2: function(e) {
    let t = b.A.getGuild(e.guildId);
    return !!(e.channels.length > 0 && null != t && t.features.has(v.GuildFeatures.COMMUNITY)) && w(e.guildId)
  },
  RESORT_THREADS: L,
  THREAD_CREATE: M,
  THREAD_DELETE: M,
  THREAD_LIST_SYNC: R,
  THREAD_MEMBER_UPDATE: D,
  THREAD_MEMBERS_UPDATE: D,
  THREAD_UPDATE: M,
  BULK_CLEAR_RECENTS: R,
  CATEGORY_COLLAPSE_ALL: R,
  CATEGORY_EXPAND_ALL: R,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = m.A.getGuildId();
    if (null == n || !new Set(t.map(e => e.guildId)).has(n)) returnfalse;
    let r = C[n];
    return null != r && "voice-channels" === r.bottomBar.mode && w(n)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: G,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: G,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    for (let e of t) null != e.guild_id && w(e.guild_id)
  },
  USER_GUILD_SETTINGS_GUILD_UPDATE: G,
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: G
})