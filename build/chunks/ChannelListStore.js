/** Chunk was on web.js **/
/** chunk id: 960755, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eu
}), require("./896048.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk933958 = require("./933958.js"),
  Chunk969151 = require("./969151.js"),
  Chunk717125 = require("./717125.js"),
  Chunk698441 = require("./698441.js"),
  Chunk863005 = require("./863005.js"),
  Chunk152007 = require("./152007.js"),
  Chunk617617 = require("./617617.js"),
  Chunk961350 = require("./961350.js"),
  Chunk924985 = require("./924985.js"),
  Chunk734057 = require("./734057.js"),
  Chunk945886 = require("./945886.js"),
  Chunk760751 = require("./760751.js"),
  Chunk576705 = require("./576705.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk32603 = require("./32603.js"),
  Chunk355097 = require("./355097.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let R = null,
  w = null,
  P = new Chunk32603.Ay;

function D() {
  let e = v.A.getChannelId(),
    t = v.A.getVoiceChannelId();
  return R = e, w = t, P.clear()
}

function x(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  return P.clearGuildId(t)
}

function L(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  return P.clearGuildId(t)
}

function j(e) {
  let {
    channels: t
  } = e, n = false;
  return a()(t).map(e => e.guild_id).uniq().forEach(e => {
    P.clearGuildId(e) && (n = true)
  }), n
}

function M(e) {
  return P.nonPositionalChannelIdUpdate(e.id)
}

function k(e) {
  return P.clearGuildId(e.guildId)
}

function U(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return h.default.getId() === n.id && P.clearGuildId(t)
}

function G(e) {
  let {
    userGuildSettings: t
  } = e;
  t.forEach(e => {
    let {
      guild_id: t
    } = e;
    return P.clearGuildId(t)
  })
}

function V(e) {
  let {
    guildId: t
  } = e;
  return P.clearGuildId(t)
}

function F(e) {
  e.channels.forEach(e => {
    let {
      guildId: t
    } = e;
    return P.clearGuildId(t)
  })
}

function B(e) {
  var t;
  let {
    channelId: n
  } = e;
  return P.clearGuildId(null == (t = g.A.getChannel(n)) ? true : t.guild_id)
}

function H(e) {
  let {
    channelId: t
  } = e;
  return P.nonPositionalChannelIdUpdate(t)
}

function Y(e) {
  let {
    channelId: t
  } = e;
  return P.nonPositionalChannelIdUpdate(t)
}

function W(e) {
  let {
    channelId: t
  } = e;
  return P.nonPositionalChannelIdUpdate(t)
}

function K() {
  return null != R && P.nonPositionalChannelIdUpdate(R)
}

function z(e) {
  let {
    channels: t
  } = e, n = false;
  return a()(t).map(e => {
    var t;
    return null == (t = g.A.getChannel(e.channelId)) ? true : t.guild_id
  }).filter(I.Vq).uniq().forEach(e => {
    P.clearGuildId(e) && (n = true)
  }), n
}

function q(e) {
  return P.clearGuildId(e.guildId)
}

function X(e) {
  let {
    channel: t
  } = e;
  return P.nonPositionalChannelIdUpdate(t.id)
}

function Z(e) {
  let {
    channel: t
  } = e;
  return P.nonPositionalChannelUpdate(t)
}

function Q(e) {
  let {
    id: t
  } = e;
  return P.nonPositionalChannelIdUpdate(t)
}

function $() {
  let e = v.A.getChannelId(),
    t = v.A.getVoiceChannelId(),
    n = R !== e || w !== t;
  return !!n && (a()([R, w, e, t]).uniq().forEach(e => {
    null != e && P.nonPositionalChannelIdUpdate(e) && (n = true)
  }), R = e, w = t, true)
}

function J(e) {
  let {
    voiceStates: t
  } = e, n = $(), r = new Set;
  for (let {
      channelId: e,
      oldChannelId: i
    }
    of t) null == i || r.has(i) || (P.nonPositionalChannelIdUpdate(i) && (n = true), r.add(i)), null == e || r.has(e) || (P.nonPositionalChannelIdUpdate(e) && (n = true), r.add(e));
  return n
}

function ee(e) {
  let {
    id: t
  } = e, n = g.A.getChannel(t);
  return null == n ? P.clearGuildId(t) : P.clearGuildId(n.guild_id)
}

function et(e) {
  let {
    guildId: t
  } = e;
  return P.clearGuildId(t)
}

function en(e) {
  let {
    location: t
  } = e;
  return P.updateSubtitles((0, c.D)(t), (0, c.H)(t))
}

function er(e) {
  ei()
}

function ei() {
  return P.updateSubtitles()
}

function ea(e) {
  let {
    guildId: t
  } = e;
  return P.updateSubtitles(t)
}

function es(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return P.updateSubtitles(t.guild_id)
}

function eo(e) {
  let {
    guildId: t
  } = e;
  P.updateSubtitles(t)
}

function el(e) {
  var t;
  let {
    settings: n
  } = e;
  if (n.type !== C.oD.PRELOADED_USER_SETTINGS) returnfalse;
  let r = null == (t = n.proto.guilds) ? true : t.guilds,
    i = false;
  return null != r && S.default.keys(r).forEach(e => {
    null != r[e].guildRecentsDismissedAt && (i = P.updateRecentsCategory(e) || i)
  }), i
}
class ec extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(f.A, h.default, m.A, g.A, E.A, l.Ay, y.A, u.A, d.Ay, p.A, b.A, O.Ay, v.A, A.Ay, _.A)
  }
  getGuild(e, t) {
    var n, r;
    let i = P.getGuild(e, null != (n = null == t ? true : t.guildActionRows) ? n : [], null != (r = null == t ? true : t.channelNoticeRows) ? r : []);
    return {
      guildChannelsVersion: i.version,
      guildChannels: i
    }
  }
  getGuildWithoutChangingGuildActionRows(e) {
    let t = P.getGuildChannelRowsOnly(e);
    return {
      guildChannelsVersion: t.version,
      guildChannels: t
    }
  }
  recentsChannelCount(e) {
    if (null == e) return 0;
    let t = P.getGuildChannelRowsOnly(e);
    return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length
  }
}
N(ec, "displayName", "ChannelListStore");
let eu = new ec(Chunk73153.h, {
  APPLICATION_FETCH_FAIL: ei,
  APPLICATION_FETCH_SUCCESS: ei,
  APPLICATION_FETCH: ei,
  APPLICATIONS_FETCH_FAIL: ei,
  APPLICATIONS_FETCH_SUCCESS: ei,
  APPLICATIONS_FETCH: ei,
  BACKGROUND_SYNC: D,
  BULK_ACK: z,
  BULK_CLEAR_RECENTS: V,
  CACHE_LOADED_LAZY: D,
  CATEGORY_COLLAPSE_ALL: V,
  CATEGORY_COLLAPSE: ee,
  CATEGORY_EXPAND_ALL: V,
  CATEGORY_EXPAND: ee,
  CHANNEL_ACK: W,
  CHANNEL_COLLAPSE: B,
  CHANNEL_CREATE: L,
  CHANNEL_DELETE: L,
  CHANNEL_LOCAL_ACK: W,
  CHANNEL_MUTE_EXPIRED: V,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: W,
  CHANNEL_SELECT: $,
  CHANNEL_STATUSES: k,
  CHANNEL_UPDATES: j,
  CONNECTION_OPEN_SUPPLEMENTAL: ei,
  CONNECTION_OPEN: D,
  CURRENT_USER_UPDATE: D,
  DECAY_READ_STATES: D,
  DEV_TOOLS_DESIGN_TOGGLE_SET: D,
  DISABLE_AUTOMATIC_ACK: W,
  DISMISS_FAVORITE_SUGGESTION: Y,
  EMBEDDED_ACTIVITY_UPDATE_V2: en,
  EMBEDDED_ACTIVITY_LAUNCH_START: er,
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: ei,
  ENABLE_AUTOMATIC_ACK: W,
  FETCH_GUILD_EVENTS_FOR_GUILD: ea,
  GAMES_DATABASE_FETCH_FAIL: ei,
  GAMES_DATABASE_FETCH: ei,
  GAMES_DATABASE_UPDATE: ei,
  GUILD_APPLICATIONS_FETCH_SUCCESS: ei,
  GUILD_CREATE: x,
  GUILD_DELETE: x,
  GUILD_MEMBER_UPDATE: U,
  GUILD_MUTE_EXPIRED: V,
  GUILD_ROLE_CREATE: V,
  GUILD_ROLE_DELETE: V,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: V,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: V,
  GUILD_ROLE_UPDATE: V,
  GUILD_SCHEDULED_EVENT_CREATE: es,
  GUILD_SCHEDULED_EVENT_DELETE: es,
  GUILD_SCHEDULED_EVENT_UPDATE: es,
  GUILD_TOGGLE_COLLAPSE_MUTED: V,
  GUILD_UPDATE: x,
  IMPERSONATE_STOP: V,
  IMPERSONATE_UPDATE: V,
  LOAD_CHANNELS: F,
  LOAD_MESSAGES_SUCCESS: W,
  MESSAGE_ACK: W,
  MESSAGE_CREATE: H,
  MESSAGE_DELETE_BULK: W,
  MESSAGE_DELETE: W,
  NOTIFICATION_SETTINGS_UPDATE: D,
  OVERLAY_INITIALIZE: D,
  PASSIVE_UPDATE_V2: q,
  RECOMPUTE_READ_STATES: D,
  RESORT_THREADS: W,
  SET_RECENTLY_ACTIVE_COLLAPSED: D,
  THREAD_CREATE: X,
  THREAD_DELETE: Z,
  THREAD_LIST_SYNC: V,
  THREAD_MEMBER_UPDATE: Q,
  THREAD_MEMBERS_UPDATE: Q,
  THREAD_UPDATE: X,
  TRY_ACK: W,
  UPDATE_CHANNEL_DIMENSIONS: W,
  UPDATE_CHANNEL_LIST_SUBTITLES: eo,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: V,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: V,
  USER_GUILD_SETTINGS_FULL_UPDATE: G,
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: V,
  USER_GUILD_SETTINGS_GUILD_UPDATE: V,
  USER_SETTINGS_PROTO_UPDATE: el,
  VOICE_CATEGORY_COLLAPSE: et,
  VOICE_CATEGORY_EXPAND: et,
  VOICE_CHANNEL_SELECT: $,
  VOICE_CHANNEL_STATUS_UPDATE: M,
  VOICE_STATE_UPDATES: J,
  WINDOW_FOCUS: K
})