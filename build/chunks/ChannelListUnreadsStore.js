/** Chunk was on 46467 **/
/** chunk id: 968847, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G,
  x: () => x
}), require("./388685.js");
var r, i, l, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk220444 = require("./220444.js"),
  Chunk565799 = require("./565799.js"),
  Chunk501655 = require("./501655.js"),
  Chunk569471 = require("./569471.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk306680 = require("./306680.js"),
  Chunk914010 = require("./914010.js"),
  Chunk9156 = require("./9156.js"),
  Chunk938475 = require("./938475.js"),
  Chunk823379 = require("./823379.js"),
  Chunk734307 = require("./734307.js"),
  Chunk981631 = require("./981631.js"),
  x = ((i = {}).HIDDEN = "hidden", i.UNREAD = "unread", i.MENTIONS = "mentions", i.VOICE_CHANNELS = "voice-channels", i);
let C = {
    mode: "hidden",
    mentionCount: 0,
    targetChannelId: null
  },
  E = {
    topBar: C,
    bottomBar: C
  },
  S = {},
  I = {};

function P(e) {
  let t = p.Z.getChannel(e);
  return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? h.Z.isMuted(t.id) : _.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, u.d)(t)
}

function N(e) {
  let t = p.Z.getChannel(e);
  if (null == t) returnfalse;
  let n = t.getGuildId();
  if (null == n) returnfalse;
  let r = _.ZP.isGuildCollapsed(n),
    i = _.ZP.isChannelMuted(n, t.id);
  return (!r || !i) && m.ZP.getMentionCount(e) > 0
}

function Z(e) {
  return !_.ZP.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? d.Z.getMutableParticipants(e.id, f.pV.SPEAKER).length > 0 : y.ZP.getVoiceStatesForChannel(e).length > 0)
}

function w(e) {
  var t, n, r;
  let {
    guildChannels: i
  } = v.Z.getGuildWithoutChangingGuildActionRows(e), l = i.getChannels(null != (t = I[e]) ? t : []);
  if (null == l || 0 === l.length) returnfalse;
  let o = null,
    s = null,
    c = null,
    u = null,
    d = true,
    f = true,
    h = false,
    p = i.getCategoryFromSection(i.voiceChannelsSectionNumber),
    g = null != (n = null == p ? true : p.getShownChannelIds()) ? n : [],
    [b, _, y] = i.getSlicedChannels(l);
  for (let e = 0; e < _.length; e++) {
    let t = _[e];
    if ((P(t.id) || a().some(t.threadIds, P)) && (f = false), (N(t.id) || a().some(t.threadIds, N)) && (d = false), g.includes(t.id) && (h = true), !f && !d && h) break
  }
  let O = 0,
    j = false,
    x = 0,
    E = false;
  if (f || d)
    for (let e = b.length - 1; e >= 0; e--) {
      let t = b[e];
      (P(t.id) || a().some(t.threadIds, P)) && (null == s && (s = t.id), j = true), (N(t.id) || a().some(t.threadIds, N)) && (null == o && (o = t.id), O += m.ZP.getMentionCount(t.id), O += a().sumBy(t.threadIds, m.ZP.getMentionCount))
    }
  if (f || d)
    for (let e = 0; e < y.length; e++) {
      let t = y[e];
      if (!f && !d) break;
      (P(t.id) || a().some(t.threadIds, P)) && (null == u && (u = t.id), E = true), (N(t.id) || a().some(t.threadIds, N)) && (null == c && (c = t.id), x += m.ZP.getMentionCount(t.id), x += a().sumBy(t.threadIds, m.ZP.getMentionCount))
    }
  let w = null,
    T = null,
    A = null != (r = null == p ? true : p.getChannelRecords()) ? r : [];
  d && x > 0 ? w = {
    mode: "mentions",
    mentionCount: x,
    targetChannelId: c
  } : !h && a().some(A, Z) ? w = {
    mode: "voice-channels",
    mentionCount: 0,
    targetChannelId: null
  } : f && E && (w = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: u
  }), d && O > 0 ? T = {
    mode: "mentions",
    mentionCount: O,
    targetChannelId: o
  } : f && j && (T = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: s
  });
  let R = null != T && (null == w || "mentions" !== w.mode && "mentions" === T.mode),
    D = null != w && ("mentions" === w.mode || !R);
  return S[e] = {
    topBar: R && null != T ? T : C,
    bottomBar: D && null != w ? w : C
  }, true
}
let T = a().throttle(w, 200);

function A(e) {
  let {
    guildId: t
  } = e, n = g.Z.getGuild(t);
  return null != n && !!n.features.has(j.GuildFeatures.COMMUNITY) && T(t)
}

function R(e) {
  let {
    id: t
  } = e, n = p.Z.getChannel(t);
  if (null == n) returnfalse;
  let r = g.Z.getGuild(n.guild_id);
  return null != r && !!r.features.has(j.GuildFeatures.COMMUNITY) && T(n.guild_id)
}

function D(e) {
  let {
    channel: t
  } = e, n = p.Z.getChannel(t.id);
  if (null == n) returnfalse;
  let r = g.Z.getGuild(t.guild_id);
  return null != r && !!r.features.has(j.GuildFeatures.COMMUNITY) && T(n.guild_id)
}

function M(e) {
  let {
    channelId: t
  } = e, n = p.Z.getChannel(t);
  if (null == n) returnfalse;
  let r = g.Z.getGuild(n.guild_id);
  return null != r && !!r.features.has(j.GuildFeatures.COMMUNITY) && b.Z.getGuildId() === n.guild_id && T(n.guild_id)
}

function L(e) {
  let {
    guildId: t
  } = e;
  return null != t && T(t)
}
class k extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk734307.Z, Chunk592125.Z, Chunk430824.Z, Chunk569471.Z, Chunk306680.ZP, Chunk914010.Z, Chunk938475.ZP, Chunk565799.Z, Chunk9156.ZP)
  }
  getUnreadStateForGuildId(e) {
    var t;
    return null != (t = S[e]) ? t : E
  }
}(l = "displayName") in k ? Object.defineProperty(k, l, {
  value: "ChannelListUnreadsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : k[l] = "ChannelListUnreadsStore";
let G = new k(Chunk570140.Z, {
  UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e, r = g.Z.getGuild(t);
    return null != r && !!r.features.has(j.GuildFeatures.COMMUNITY) && null != n && !a().isEqual(I[t], n) && (I[t] = n, w(t))
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
      return null == (t = p.Z.getChannel(n)) ? true : t.guild_id
    }).filter(O.lm).uniq().forEach(e => {
      let t = g.Z.getGuild(e);
      null != t && t.features.has(j.GuildFeatures.COMMUNITY) && T(e) && (n = true)
    }), n
  },
  CHANNEL_ACK: M,
  CHANNEL_DELETE: D,
  CHANNEL_LOCAL_ACK: M,
  MESSAGE_ACK: M,
  MESSAGE_CREATE: M,
  MESSAGE_DELETE_BULK: M,
  MESSAGE_DELETE: M,
  PASSIVE_UPDATE_V2: function(e) {
    let t = g.Z.getGuild(e.guildId);
    return !!(e.channels.length > 0 && null != t && t.features.has(j.GuildFeatures.COMMUNITY)) && T(e.guildId)
  },
  RESORT_THREADS: M,
  THREAD_CREATE: D,
  THREAD_DELETE: D,
  THREAD_LIST_SYNC: A,
  THREAD_MEMBER_UPDATE: R,
  THREAD_MEMBERS_UPDATE: R,
  THREAD_UPDATE: D,
  BULK_CLEAR_RECENTS: A,
  CATEGORY_COLLAPSE_ALL: A,
  CATEGORY_EXPAND_ALL: A,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = b.Z.getGuildId();
    if (null == n || !new Set(t.map(e => e.guildId)).has(n)) returnfalse;
    let r = S[n];
    return null != r && "voice-channels" === r.bottomBar.mode && T(n)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: L,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: L,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    for (let e of t) null != e.guild_id && T(e.guild_id)
  },
  USER_GUILD_SETTINGS_GUILD_UPDATE: L,
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: L
})