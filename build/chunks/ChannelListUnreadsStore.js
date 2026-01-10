/** Chunk was on 81985 **/
/** chunk id: 414641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U,
  x: () => C
}), require("./388685.js");
var r, i, l, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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
  C = ((i = {}).HIDDEN = "hidden", i.UNREAD = "unread", i.MENTIONS = "mentions", i.VOICE_CHANNELS = "voice-channels", i);
let E = {
    mode: "hidden",
    mentionCount: 0,
    targetChannelId: null
  },
  S = {
    topBar: E,
    bottomBar: E
  },
  _ = {},
  I = {};

function P(e) {
  let t = h.Z.getChannel(e);
  return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? f.Z.isMuted(t.id) : y.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, u.d)(t)
}

function Z(e) {
  let t = h.Z.getChannel(e);
  if (null == t) returnfalse;
  let n = t.getGuildId();
  if (null == n) returnfalse;
  let r = y.ZP.isGuildCollapsed(n),
    i = y.ZP.isChannelMuted(n, t.id);
  return (!r || !i) && m.ZP.getMentionCount(e) > 0
}

function N(e) {
  return !y.ZP.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? d.Z.getMutableParticipants(e.id, p.pV.SPEAKER).length > 0 : v.ZP.getVoiceStatesForChannel(e).length > 0)
}

function T(e) {
  var t, n, r;
  let {
    guildChannels: i
  } = j.Z.getGuildWithoutChangingGuildActionRows(e), l = i.getChannels(null != (t = I[e]) ? t : []);
  if (null == l || 0 === l.length) returnfalse;
  let a = null,
    s = null,
    c = null,
    u = null,
    d = true,
    p = true,
    f = false,
    h = i.getCategoryFromSection(i.voiceChannelsSectionNumber),
    g = null != (n = null == h ? true : h.getShownChannelIds()) ? n : [],
    [b, y, v] = i.getSlicedChannels(l);
  for (let e = 0; e < y.length; e++) {
    let t = y[e];
    if ((P(t.id) || o().some(t.threadIds, P)) && (p = false), (Z(t.id) || o().some(t.threadIds, Z)) && (d = false), g.includes(t.id) && (f = true), !p && !d && f) break
  }
  let O = 0,
    x = false,
    C = 0,
    S = false;
  if (p || d)
    for (let e = b.length - 1; e >= 0; e--) {
      let t = b[e];
      (P(t.id) || o().some(t.threadIds, P)) && (null == s && (s = t.id), x = true), (Z(t.id) || o().some(t.threadIds, Z)) && (null == a && (a = t.id), O += m.ZP.getMentionCount(t.id), O += o().sumBy(t.threadIds, m.ZP.getMentionCount))
    }
  if (p || d)
    for (let e = 0; e < v.length; e++) {
      let t = v[e];
      if (!p && !d) break;
      (P(t.id) || o().some(t.threadIds, P)) && (null == u && (u = t.id), S = true), (Z(t.id) || o().some(t.threadIds, Z)) && (null == c && (c = t.id), C += m.ZP.getMentionCount(t.id), C += o().sumBy(t.threadIds, m.ZP.getMentionCount))
    }
  let T = null,
    A = null,
    w = null != (r = null == h ? true : h.getChannelRecords()) ? r : [];
  d && C > 0 ? T = {
    mode: "mentions",
    mentionCount: C,
    targetChannelId: c
  } : !f && o().some(w, N) ? T = {
    mode: "voice-channels",
    mentionCount: 0,
    targetChannelId: null
  } : p && S && (T = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: u
  }), d && O > 0 ? A = {
    mode: "mentions",
    mentionCount: O,
    targetChannelId: a
  } : p && x && (A = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: s
  });
  let R = null != A && (null == T || "mentions" !== T.mode && "mentions" === A.mode),
    D = null != T && ("mentions" === T.mode || !R);
  return _[e] = {
    topBar: R && null != A ? A : E,
    bottomBar: D && null != T ? T : E
  }, true
}
let A = o().throttle(T, 200);

function w(e) {
  let {
    guildId: t
  } = e, n = g.Z.getGuild(t);
  return null != n && !!n.features.has(x.GuildFeatures.COMMUNITY) && A(t)
}

function R(e) {
  let {
    id: t
  } = e, n = h.Z.getChannel(t);
  if (null == n) returnfalse;
  let r = g.Z.getGuild(n.guild_id);
  return null != r && !!r.features.has(x.GuildFeatures.COMMUNITY) && A(n.guild_id)
}

function D(e) {
  let {
    channel: t
  } = e, n = h.Z.getChannel(t.id);
  if (null == n) returnfalse;
  let r = g.Z.getGuild(t.guild_id);
  return null != r && !!r.features.has(x.GuildFeatures.COMMUNITY) && A(n.guild_id)
}

function M(e) {
  let {
    channelId: t
  } = e, n = h.Z.getChannel(t);
  if (null == n) returnfalse;
  let r = g.Z.getGuild(n.guild_id);
  return null != r && !!r.features.has(x.GuildFeatures.COMMUNITY) && b.Z.getGuildId() === n.guild_id && A(n.guild_id)
}

function k(e) {
  let {
    guildId: t
  } = e;
  return null != t && A(t)
}
class L extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(j.Z, h.Z, g.Z, f.Z, m.ZP, b.Z, v.ZP, d.Z, y.ZP)
  }
  getUnreadStateForGuildId(e) {
    var t;
    return null != (t = _[e]) ? t : S
  }
}(l = "displayName") in L ? Object.defineProperty(L, l, {
  value: "ChannelListUnreadsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : L[l] = "ChannelListUnreadsStore";
let U = new L(Chunk570140.Z, {
  UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e, r = g.Z.getGuild(t);
    return null != r && !!r.features.has(x.GuildFeatures.COMMUNITY) && null != n && !o().isEqual(I[t], n) && (I[t] = n, T(t))
  },
  BULK_ACK: function(e) {
    let {
      channels: t
    } = e, n = false;
    return o()(t).map(e => {
      var t;
      let {
        channelId: n
      } = e;
      return null == (t = h.Z.getChannel(n)) ? true : t.guild_id
    }).filter(O.lm).uniq().forEach(e => {
      let t = g.Z.getGuild(e);
      null != t && t.features.has(x.GuildFeatures.COMMUNITY) && A(e) && (n = true)
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
    return !!(e.channels.length > 0 && null != t && t.features.has(x.GuildFeatures.COMMUNITY)) && A(e.guildId)
  },
  RESORT_THREADS: M,
  THREAD_CREATE: D,
  THREAD_DELETE: D,
  THREAD_LIST_SYNC: w,
  THREAD_MEMBER_UPDATE: R,
  THREAD_MEMBERS_UPDATE: R,
  THREAD_UPDATE: D,
  BULK_CLEAR_RECENTS: w,
  CATEGORY_COLLAPSE_ALL: w,
  CATEGORY_EXPAND_ALL: w,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = b.Z.getGuildId();
    if (null == n || !new Set(t.map(e => e.guildId)).has(n)) returnfalse;
    let r = _[n];
    return null != r && "voice-channels" === r.bottomBar.mode && A(n)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: k,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: k,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    for (let e of t) null != e.guild_id && A(e.guild_id)
  },
  USER_GUILD_SETTINGS_GUILD_UPDATE: k,
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: k
})