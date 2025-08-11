/** Chunk was on 34779 **/
/** chunk id: 968847, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G,
  x: () => E
}), require("./388685.js");
var r, i, l, o, Chunk392711 = require("./392711.js"),
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
  E = ((i = {}).HIDDEN = "hidden", i.UNREAD = "unread", i.MENTIONS = "mentions", i.VOICE_CHANNELS = "voice-channels", i);
let S = {
    mode: "hidden",
    mentionCount: 0,
    targetChannelId: null
  },
  x = {
    topBar: S,
    bottomBar: S
  },
  I = {},
  P = {};

function N(e) {
  let t = g.Z.getChannel(e);
  return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? f.Z.isMuted(t.id) : _.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, d.d)(t)
}

function w(e) {
  let t = g.Z.getChannel(e);
  if (null == t) returnfalse;
  let n = t.getGuildId();
  if (null == n) returnfalse;
  let r = _.ZP.isGuildCollapsed(n),
    i = _.ZP.isChannelMuted(n, t.id);
  return (!r || !i) && b.ZP.getMentionCount(e) > 0
}

function Z(e) {
  return !_.ZP.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? h.Z.getMutableParticipants(e.id, p.pV.SPEAKER).length > 0 : y.ZP.getVoiceStatesForChannel(e).length > 0)
}

function T(e) {
  var t, n, r;
  let {
    guildChannels: i
  } = v.Z.getGuildWithoutChangingGuildActionRows(e), l = i.getChannels(null != (t = P[e]) ? t : []);
  if (null == l || 0 === l.length) returnfalse;
  let o = null,
    s = null,
    c = null,
    u = null,
    d = true,
    h = true,
    p = false,
    f = i.getCategoryFromSection(i.voiceChannelsSectionNumber),
    g = null != (n = null == f ? true : f.getShownChannelIds()) ? n : [],
    [m, O, _] = i.getSlicedChannels(l);
  for (let e = 0; e < O.length; e++) {
    let t = O[e];
    if ((N(t.id) || a().some(t.threadIds, N)) && (h = false), (w(t.id) || a().some(t.threadIds, w)) && (d = false), g.includes(t.id) && (p = true), !h && !d && p) break
  }
  let y = 0,
    C = false,
    j = 0,
    E = false;
  if (h || d)
    for (let e = m.length - 1; e >= 0; e--) {
      let t = m[e];
      (N(t.id) || a().some(t.threadIds, N)) && (null == s && (s = t.id), C = true), (w(t.id) || a().some(t.threadIds, w)) && (null == o && (o = t.id), y += b.ZP.getMentionCount(t.id), y += a().sumBy(t.threadIds, b.ZP.getMentionCount))
    }
  if (h || d)
    for (let e = 0; e < _.length; e++) {
      let t = _[e];
      if (!h && !d) break;
      (N(t.id) || a().some(t.threadIds, N)) && (null == u && (u = t.id), E = true), (w(t.id) || a().some(t.threadIds, w)) && (null == c && (c = t.id), j += b.ZP.getMentionCount(t.id), j += a().sumBy(t.threadIds, b.ZP.getMentionCount))
    }
  let x = null,
    T = null,
    A = null != (r = null == f ? true : f.getChannelRecords()) ? r : [];
  d && j > 0 ? x = {
    mode: "mentions",
    mentionCount: j,
    targetChannelId: c
  } : !p && a().some(A, Z) ? x = {
    mode: "voice-channels",
    mentionCount: 0,
    targetChannelId: null
  } : h && E && (x = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: u
  }), d && y > 0 ? T = {
    mode: "mentions",
    mentionCount: y,
    targetChannelId: o
  } : h && C && (T = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: s
  });
  let R = null != T && (null == x || "mentions" !== x.mode && "mentions" === T.mode),
    D = null != x && ("mentions" === x.mode || !R);
  return I[e] = {
    topBar: R && null != T ? T : S,
    bottomBar: D && null != x ? x : S
  }, true
}
let A = a().throttle(T, 200);

function R(e) {
  let {
    guildId: t
  } = e, n = m.Z.getGuild(t);
  return null != n && !!n.features.has(j.oNc.COMMUNITY) && A(t)
}

function D(e) {
  let {
    id: t
  } = e, n = g.Z.getChannel(t);
  if (null == n) returnfalse;
  let r = m.Z.getGuild(n.guild_id);
  return null != r && !!r.features.has(j.oNc.COMMUNITY) && A(n.guild_id)
}

function L(e) {
  let {
    channel: t
  } = e, n = g.Z.getChannel(t.id);
  if (null == n) returnfalse;
  let r = m.Z.getGuild(t.guild_id);
  return null != r && !!r.features.has(j.oNc.COMMUNITY) && A(n.guild_id)
}

function M(e) {
  let {
    channelId: t
  } = e, n = g.Z.getChannel(t);
  if (null == n) returnfalse;
  let r = m.Z.getGuild(n.guild_id);
  return null != r && !!r.features.has(j.oNc.COMMUNITY) && O.Z.getGuildId() === n.guild_id && A(n.guild_id)
}

function k(e) {
  let {
    guildId: t
  } = e;
  return null != t && A(t)
}
class U extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk734307.Z, Chunk306680.ZP, Chunk9156.ZP, Chunk569471.Z, Chunk938475.ZP, Chunk914010.Z, Chunk430824.Z)
  }
  getUnreadStateForGuildId(e) {
    var t;
    return null != (t = I[e]) ? t : x
  }
}
o = "ChannelListUnreadsStore", (l = "displayName") in U ? Object.defineProperty(U, l, {
  value: o,
  enumerable: true,
  configurable: true,
  writable: true
}) : U[l] = o;
let G = new U(Chunk570140.Z, {
  UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e, r = m.Z.getGuild(t);
    return null != r && !!r.features.has(j.oNc.COMMUNITY) && null != n && !a().isEqual(P[t], n) && (P[t] = n, T(t))
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
      return null == (t = g.Z.getChannel(n)) ? true : t.guild_id
    }).filter(C.lm).uniq().forEach(e => {
      let t = m.Z.getGuild(e);
      null != t && t.features.has(j.oNc.COMMUNITY) && A(e) && (n = true)
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
    let t = m.Z.getGuild(e.guildId);
    return !!(e.channels.length > 0 && null != t && t.features.has(j.oNc.COMMUNITY)) && A(e.guildId)
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
    } = e, n = O.Z.getGuildId();
    if (null == n || !new Set(t.map(e => e.guildId)).has(n)) returnfalse;
    let r = I[n];
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