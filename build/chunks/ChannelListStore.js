/** Chunk was on web.js **/
/** chunk id: 734307, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eu
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317381 = require("./317381.js"),
  Chunk16609 = require("./16609.js"),
  Chunk430198 = require("./430198.js"),
  Chunk924301 = require("./924301.js"),
  Chunk601070 = require("./601070.js"),
  Chunk569471 = require("./569471.js"),
  Chunk581883 = require("./581883.js"),
  Chunk314897 = require("./314897.js"),
  Chunk680089 = require("./680089.js"),
  Chunk592125 = require("./592125.js"),
  Chunk58468 = require("./58468.js"),
  Chunk77498 = require("./77498.js"),
  Chunk496675 = require("./496675.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk9156 = require("./9156.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk540126 = require("./540126.js"),
  Chunk526761 = require("./526761.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let P = null,
  R = null,
  D = new Chunk540126.ZP;

function w() {
  let e = Chunk944486.Z.getChannelId(),
    t = Chunk944486.Z.getVoiceChannelId();
  return P = module, R = exports, D.clear()
}

function x(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  return D.clearGuildId(t)
}

function L(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  return D.clearGuildId(t)
}

function j(e) {
  let {
    channels: t
  } = e, n = false;
  return a()(t).map(e => e.guild_id).uniq().forEach(e => {
    D.clearGuildId(e) && (n = true)
  }), n
}

function M(e) {
  return D.nonPositionalChannelIdUpdate(e.id)
}

function k(e) {
  return D.clearGuildId(e.guildId)
}

function U(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return m.default.getId() === n.id && D.clearGuildId(t)
}

function G(e) {
  let {
    userGuildSettings: t
  } = e;
  t.forEach(e => {
    let {
      guild_id: t
    } = e;
    return D.clearGuildId(t)
  })
}

function Z(e) {
  let {
    guildId: t
  } = e;
  return D.clearGuildId(t)
}

function B(e) {
  e.channels.forEach(e => {
    let {
      guildId: t
    } = e;
    return D.clearGuildId(t)
  })
}

function F(e) {
  var t;
  let {
    channelId: n
  } = e;
  return D.clearGuildId(null == (t = g.Z.getChannel(n)) ? true : t.guild_id)
}

function V(e) {
  let {
    channelId: t
  } = e;
  return D.nonPositionalChannelIdUpdate(t)
}

function H(e) {
  let {
    channelId: t
  } = e;
  return D.nonPositionalChannelIdUpdate(t)
}

function Y(e) {
  let {
    channelId: t
  } = e;
  return D.nonPositionalChannelIdUpdate(t)
}

function W() {
  return null != P && D.nonPositionalChannelIdUpdate(P)
}

function K(e) {
  let {
    channels: t
  } = e, n = false;
  return a()(t).map(e => {
    var t;
    return null == (t = g.Z.getChannel(e.channelId)) ? true : t.guild_id
  }).filter(I.lm).uniq().forEach(e => {
    D.clearGuildId(e) && (n = true)
  }), n
}

function z(e) {
  return D.clearGuildId(e.guildId)
}

function q(e) {
  let {
    channel: t
  } = e;
  return D.nonPositionalChannelIdUpdate(t.id)
}

function Q(e) {
  let {
    channel: t
  } = e;
  return D.nonPositionalChannelUpdate(t)
}

function X(e) {
  let {
    id: t
  } = e;
  return D.nonPositionalChannelIdUpdate(t)
}

function J() {
  let e = Chunk944486.Z.getChannelId(),
    t = Chunk944486.Z.getVoiceChannelId(),
    n = P !== module || R !== exports;
  return !!require && (a()([P, R, module, exports]).uniq().forEach(e => {
    null != e && D.nonPositionalChannelIdUpdate(e) && (n = true)
  }), P = module, R = exports, true)
}

function $(e) {
  let {
    voiceStates: t
  } = e, n = J(), r = new Set;
  for (let {
      channelId: e,
      oldChannelId: i
    }
    of t) null == i || r.has(i) || (D.nonPositionalChannelIdUpdate(i) && (n = true), r.add(i)), null == e || r.has(e) || (D.nonPositionalChannelIdUpdate(e) && (n = true), r.add(e));
  return n
}

function ee(e) {
  let {
    id: t
  } = e, n = g.Z.getChannel(t);
  return null == n ? D.clearGuildId(t) : D.clearGuildId(n.guild_id)
}

function et(e) {
  let {
    guildId: t
  } = e;
  return D.clearGuildId(t)
}

function en(e) {
  let {
    location: t
  } = e;
  return D.updateSubtitles((0, c.j)(t), (0, c.p)(t))
}

function er(e) {
  ei()
}

function ei() {
  return D.updateSubtitles()
}

function ea(e) {
  let {
    guildId: t
  } = e;
  return D.updateSubtitles(t)
}

function eo(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return D.updateSubtitles(t.guild_id)
}

function es(e) {
  let {
    guildId: t
  } = e;
  D.updateSubtitles(t)
}

function el(e) {
  var t;
  let {
    settings: n
  } = e;
  if (n.type !== C.yP.PRELOADED_USER_SETTINGS) returnfalse;
  let r = null == (t = n.proto.guilds) ? true : t.guilds,
    i = false;
  return null != r && T.default.keys(r).forEach(e => {
    null != r[e].guildRecentsDismissedAt && (i = D.updateRecentsCategory(e) || i)
  }), i
}
class ec extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk601070.Z, Chunk314897.default, Chunk680089.Z, Chunk592125.Z, Chunk58468.Z, Chunk317381.ZP, Chunk77498.Z, Chunk430198.Z, Chunk924301.ZP, Chunk569471.Z, Chunk496675.Z, Chunk306680.ZP, Chunk944486.Z, Chunk9156.ZP, Chunk581883.Z)
  }
  getGuild(e, t) {
    var n, r;
    let i = D.getGuild(e, null != (n = null == t ? true : t.guildActionRows) ? n : [], null != (r = null == t ? true : t.channelNoticeRows) ? r : []);
    return {
      guildChannelsVersion: i.version,
      guildChannels: i
    }
  }
  getGuildWithoutChangingGuildActionRows(e) {
    let t = D.getGuildChannelRowsOnly(e);
    return {
      guildChannelsVersion: t.version,
      guildChannels: t
    }
  }
  recentsChannelCount(e) {
    if (null == e) return 0;
    let t = D.getGuildChannelRowsOnly(e);
    return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length
  }
}
N(ec, "displayName", "ChannelListStore");
let eu = new ec(Chunk570140.Z, {
  APPLICATION_FETCH_FAIL: ei,
  APPLICATION_FETCH_SUCCESS: ei,
  APPLICATION_FETCH: ei,
  APPLICATIONS_FETCH_FAIL: ei,
  APPLICATIONS_FETCH_SUCCESS: ei,
  APPLICATIONS_FETCH: ei,
  BACKGROUND_SYNC: w,
  BULK_ACK: K,
  BULK_CLEAR_RECENTS: Z,
  CACHE_LOADED_LAZY: w,
  CATEGORY_COLLAPSE_ALL: Z,
  CATEGORY_COLLAPSE: ee,
  CATEGORY_EXPAND_ALL: Z,
  CATEGORY_EXPAND: ee,
  CHANNEL_ACK: Y,
  CHANNEL_COLLAPSE: F,
  CHANNEL_CREATE: L,
  CHANNEL_DELETE: L,
  CHANNEL_LOCAL_ACK: Y,
  CHANNEL_MUTE_EXPIRED: Z,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: Y,
  CHANNEL_SELECT: J,
  CHANNEL_STATUSES: k,
  CHANNEL_UPDATES: j,
  CONNECTION_OPEN_SUPPLEMENTAL: ei,
  CONNECTION_OPEN: w,
  CURRENT_USER_UPDATE: w,
  DECAY_READ_STATES: w,
  DEV_TOOLS_DESIGN_TOGGLE_SET: w,
  DISABLE_AUTOMATIC_ACK: Y,
  DISMISS_FAVORITE_SUGGESTION: H,
  EMBEDDED_ACTIVITY_UPDATE_V2: en,
  EMBEDDED_ACTIVITY_LAUNCH_START: er,
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: ei,
  ENABLE_AUTOMATIC_ACK: Y,
  FETCH_GUILD_EVENTS_FOR_GUILD: ea,
  GAMES_DATABASE_FETCH_FAIL: ei,
  GAMES_DATABASE_FETCH: ei,
  GAMES_DATABASE_UPDATE: ei,
  GUILD_APPLICATIONS_FETCH_SUCCESS: ei,
  GUILD_CREATE: x,
  GUILD_DELETE: x,
  GUILD_MEMBER_UPDATE: U,
  GUILD_MUTE_EXPIRED: Z,
  GUILD_ROLE_CREATE: Z,
  GUILD_ROLE_DELETE: Z,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: Z,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: Z,
  GUILD_ROLE_UPDATE: Z,
  GUILD_SCHEDULED_EVENT_CREATE: eo,
  GUILD_SCHEDULED_EVENT_DELETE: eo,
  GUILD_SCHEDULED_EVENT_UPDATE: eo,
  GUILD_TOGGLE_COLLAPSE_MUTED: Z,
  GUILD_UPDATE: x,
  IMPERSONATE_STOP: Z,
  IMPERSONATE_UPDATE: Z,
  LOAD_CHANNELS: B,
  LOAD_MESSAGES_SUCCESS: Y,
  MESSAGE_ACK: Y,
  MESSAGE_CREATE: V,
  MESSAGE_DELETE_BULK: Y,
  MESSAGE_DELETE: Y,
  NOTIFICATION_SETTINGS_UPDATE: w,
  OVERLAY_INITIALIZE: w,
  PASSIVE_UPDATE_V2: z,
  RECOMPUTE_READ_STATES: w,
  RESORT_THREADS: Y,
  SET_RECENTLY_ACTIVE_COLLAPSED: w,
  THREAD_CREATE: q,
  THREAD_DELETE: Q,
  THREAD_LIST_SYNC: Z,
  THREAD_MEMBER_UPDATE: X,
  THREAD_MEMBERS_UPDATE: X,
  THREAD_UPDATE: q,
  TRY_ACK: Y,
  UPDATE_CHANNEL_DIMENSIONS: Y,
  UPDATE_CHANNEL_LIST_SUBTITLES: es,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: Z,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: Z,
  USER_GUILD_SETTINGS_FULL_UPDATE: G,
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: Z,
  USER_GUILD_SETTINGS_GUILD_UPDATE: Z,
  USER_SETTINGS_PROTO_UPDATE: el,
  VOICE_CATEGORY_COLLAPSE: et,
  VOICE_CATEGORY_EXPAND: et,
  VOICE_CHANNEL_SELECT: J,
  VOICE_CHANNEL_STATUS_UPDATE: M,
  VOICE_STATE_UPDATES: $,
  WINDOW_FOCUS: W
})