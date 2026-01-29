/** Chunk was on 1113 **/
/** chunk id: 288989, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => U,
  k: () => j
}), require("./896048.js");
var r, l, i, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
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
  j = ((l = {}).HIDDEN = "hidden", l.UNREAD = "unread", l.MENTIONS = "mentions", l.VOICE_CHANNELS = "voice-channels", l);
let v = {
    mode: "hidden",
    mentionCount: 0,
    targetChannelId: null
  },
  E = {
    topBar: v,
    bottomBar: v
  },
  C = {},
  S = {};

function I(e) {
  let t = g.A.getChannel(e);
  return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? p.A.isMuted(t.id) : A.Ay.isChannelMuted(t.getGuildId(), t.id)) && (0, u.Y)(t)
}

function N(e) {
  let t = g.A.getChannel(e);
  if (null == t) returnfalse;
  let n = t.getGuildId();
  if (null == n) returnfalse;
  let r = A.Ay.isGuildCollapsed(n),
    l = A.Ay.isChannelMuted(n, t.id);
  return (!r || !l) && m.Ay.getMentionCount(e) > 0
}

function T(e) {
  return !A.Ay.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? d.A.getMutableParticipants(e.id, h.ip.SPEAKER).length > 0 : y.Ay.getVoiceStatesForChannel(e).length > 0)
}

function P(e) {
  var t, n, r;
  let {
    guildChannels: l
  } = _.A.getGuildWithoutChangingGuildActionRows(e), i = l.getChannels(null != (t = S[e]) ? t : []);
  if (null == i || 0 === i.length) returnfalse;
  let s = null,
    o = null,
    c = null,
    u = null,
    d = true,
    h = true,
    p = false,
    g = l.getCategoryFromSection(l.voiceChannelsSectionNumber),
    f = null != (n = null == g ? true : g.getShownChannelIds()) ? n : [],
    [b, A, y] = l.getSlicedChannels(i);
  for (let e = 0; e < A.length; e++) {
    let t = A[e];
    if ((I(t.id) || a().some(t.threadIds, I)) && (h = false), (N(t.id) || a().some(t.threadIds, N)) && (d = false), f.includes(t.id) && (p = true), !h && !d && p) break
  }
  let O = 0,
    x = false,
    j = 0,
    E = false;
  if (h || d)
    for (let e = b.length - 1; e >= 0; e--) {
      let t = b[e];
      (I(t.id) || a().some(t.threadIds, I)) && (null == o && (o = t.id), x = true), (N(t.id) || a().some(t.threadIds, N)) && (null == s && (s = t.id), O += m.Ay.getMentionCount(t.id), O += a().sumBy(t.threadIds, m.Ay.getMentionCount))
    }
  if (h || d)
    for (let e = 0; e < y.length; e++) {
      let t = y[e];
      if (!h && !d) break;
      (I(t.id) || a().some(t.threadIds, I)) && (null == u && (u = t.id), E = true), (N(t.id) || a().some(t.threadIds, N)) && (null == c && (c = t.id), j += m.Ay.getMentionCount(t.id), j += a().sumBy(t.threadIds, m.Ay.getMentionCount))
    }
  let P = null,
    w = null,
    R = null != (r = null == g ? true : g.getChannelRecords()) ? r : [];
  d && j > 0 ? P = {
    mode: "mentions",
    mentionCount: j,
    targetChannelId: c
  } : !p && a().some(R, T) ? P = {
    mode: "voice-channels",
    mentionCount: 0,
    targetChannelId: null
  } : h && E && (P = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: u
  }), d && O > 0 ? w = {
    mode: "mentions",
    mentionCount: O,
    targetChannelId: s
  } : h && x && (w = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: o
  });
  let D = null != w && (null == P || "mentions" !== P.mode && "mentions" === w.mode),
    L = null != P && ("mentions" === P.mode || !D);
  return C[e] = {
    topBar: D && null != w ? w : v,
    bottomBar: L && null != P ? P : v
  }, true
}
let w = a().throttle(P, 200);

function R(e) {
  let {
    guildId: t
  } = e, n = f.A.getGuild(t);
  return null != n && !!n.features.has(x.GuildFeatures.COMMUNITY) && w(t)
}

function D(e) {
  let {
    id: t
  } = e, n = g.A.getChannel(t);
  if (null == n) returnfalse;
  let r = f.A.getGuild(n.guild_id);
  return null != r && !!r.features.has(x.GuildFeatures.COMMUNITY) && w(n.guild_id)
}

function L(e) {
  let {
    channel: t
  } = e, n = g.A.getChannel(t.id);
  if (null == n) returnfalse;
  let r = f.A.getGuild(t.guild_id);
  return null != r && !!r.features.has(x.GuildFeatures.COMMUNITY) && w(n.guild_id)
}

function M(e) {
  let {
    channelId: t
  } = e, n = g.A.getChannel(t);
  if (null == n) returnfalse;
  let r = f.A.getGuild(n.guild_id);
  return null != r && !!r.features.has(x.GuildFeatures.COMMUNITY) && b.A.getGuildId() === n.guild_id && w(n.guild_id)
}

function k(e) {
  let {
    guildId: t
  } = e;
  return null != t && w(t)
}
class G extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(_.A, g.A, f.A, p.A, m.Ay, b.A, y.Ay, d.A, A.Ay)
  }
  getUnreadStateForGuildId(e) {
    var t;
    return null != (t = C[e]) ? t : E
  }
}(i = "displayName") in G ? Object.defineProperty(G, i, {
  value: "ChannelListUnreadsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : G[i] = "ChannelListUnreadsStore";
let U = new G(Chunk73153.h, {
  UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e, r = f.A.getGuild(t);
    return null != r && !!r.features.has(x.GuildFeatures.COMMUNITY) && null != n && !a().isEqual(S[t], n) && (S[t] = n, P(t))
  },
  BULK_ACK: function(e) {
    let {
      channels: t
    } = e, n = false;
    return a()(t).map(e => {
      var t;
      let {
        channelId: n
      } = e;
      return null == (t = g.A.getChannel(n)) ? true : t.guild_id
    }).filter(O.Vq).uniq().forEach(e => {
      let t = f.A.getGuild(e);
      null != t && t.features.has(x.GuildFeatures.COMMUNITY) && w(e) && (n = true)
    }), n
  },
  CHANNEL_ACK: M,
  CHANNEL_DELETE: L,
  CHANNEL_LOCAL_ACK: M,
  MESSAGE_ACK: M,
  MESSAGE_CREATE: M,
  MESSAGE_DELETE_BULK: M,
  MESSAGE_DELETE: M,
  PASSIVE_UPDATE_V2: function(e) {
    let t = f.A.getGuild(e.guildId);
    return !!(e.channels.length > 0 && null != t && t.features.has(x.GuildFeatures.COMMUNITY)) && w(e.guildId)
  },
  RESORT_THREADS: M,
  THREAD_CREATE: L,
  THREAD_DELETE: L,
  THREAD_LIST_SYNC: R,
  THREAD_MEMBER_UPDATE: D,
  THREAD_MEMBERS_UPDATE: D,
  THREAD_UPDATE: L,
  BULK_CLEAR_RECENTS: R,
  CATEGORY_COLLAPSE_ALL: R,
  CATEGORY_EXPAND_ALL: R,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = b.A.getGuildId();
    if (null == n || !new Set(t.map(e => e.guildId)).has(n)) returnfalse;
    let r = C[n];
    return null != r && "voice-channels" === r.bottomBar.mode && w(n)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: k,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: k,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    for (let e of t) null != e.guild_id && w(e.guild_id)
  },
  USER_GUILD_SETTINGS_GUILD_UPDATE: k,
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: k
})