/** Chunk was on 99617 **/
/** chunk id: 734307, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var i, l, Chunk392711 = require("./392711.js"),
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
let O = null,
  m = null,
  p = new Chunk540126.ZP;

function Z() {
  let n = Chunk944486.Z.getChannelId(),
    e = Chunk944486.Z.getVoiceChannelId();
  return O = module, m = exports, p.clear()
}

function x(n) {
  let {
    guild: {
      id: e
    }
  } = n;
  return p.clearGuildId(e)
}

function H(n) {
  let {
    channel: {
      guild_id: e
    }
  } = n;
  return p.clearGuildId(e)
}

function v(n) {
  let {
    guildId: e
  } = n;
  return p.clearGuildId(e)
}

function b(n) {
  let {
    channelId: e
  } = n;
  return p.nonPositionalChannelIdUpdate(e)
}

function j(n) {
  let {
    channel: e
  } = n;
  return p.nonPositionalChannelIdUpdate(e.id)
}

function M(n) {
  let {
    id: e
  } = n;
  return p.nonPositionalChannelIdUpdate(e)
}

function w() {
  let n = Chunk944486.Z.getChannelId(),
    e = Chunk944486.Z.getVoiceChannelId(),
    t = O !== module || m !== exports;
  return !!require && (a()([O, m, module, exports]).uniq().forEach(n => {
    null != n && p.nonPositionalChannelIdUpdate(n) && (t = true)
  }), O = module, m = exports, true)
}

function y(n) {
  let {
    id: e
  } = n, t = I.Z.getChannel(e);
  return null == t ? p.clearGuildId(e) : p.clearGuildId(t.guild_id)
}

function F(n) {
  let {
    guildId: e
  } = n;
  return p.clearGuildId(e)
}

function V() {
  return p.updateSubtitles()
}

function B(n) {
  let {
    guildScheduledEvent: e
  } = n;
  return p.updateSubtitles(e.guild_id)
}
class Y extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk601070.Z, Chunk314897.default, Chunk680089.Z, Chunk592125.Z, Chunk58468.Z, Chunk317381.ZP, Chunk77498.Z, Chunk430198.Z, Chunk924301.ZP, Chunk569471.Z, Chunk496675.Z, Chunk306680.ZP, Chunk944486.Z, Chunk9156.ZP, Chunk581883.Z)
  }
  getGuild(n, e) {
    var t, i;
    let l = p.getGuild(n, null != (t = null == e ? true : e.guildActionRows) ? t : [], null != (i = null == e ? true : e.channelNoticeRows) ? i : []);
    return {
      guildChannelsVersion: l.version,
      guildChannels: l
    }
  }
  getGuildWithoutChangingGuildActionRows(n) {
    let e = p.getGuildChannelRowsOnly(n);
    return {
      guildChannelsVersion: e.version,
      guildChannels: e
    }
  }
  recentsChannelCount(n) {
    if (null == n) return 0;
    let e = p.getGuildChannelRowsOnly(n);
    return e.getCategoryFromSection(e.recentsSectionNumber).getShownChannelIds().length
  }
}(l = "displayName") in Y ? Object.defineProperty(Y, l, {
  value: "ChannelListStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : Y[l] = "ChannelListStore";
let k = new Y(Chunk570140.Z, {
  APPLICATION_FETCH_FAIL: V,
  APPLICATION_FETCH_SUCCESS: V,
  APPLICATION_FETCH: V,
  APPLICATIONS_FETCH_FAIL: V,
  APPLICATIONS_FETCH_SUCCESS: V,
  APPLICATIONS_FETCH: V,
  BACKGROUND_SYNC: Z,
  BULK_ACK: function(n) {
    let {
      channels: e
    } = n, t = false;
    return a()(e).map(n => {
      var e;
      return null == (e = I.Z.getChannel(n.channelId)) ? true : e.guild_id
    }).filter(g.lm).uniq().forEach(n => {
      p.clearGuildId(n) && (t = true)
    }), t
  },
  BULK_CLEAR_RECENTS: v,
  CACHE_LOADED_LAZY: Z,
  CATEGORY_COLLAPSE_ALL: v,
  CATEGORY_COLLAPSE: y,
  CATEGORY_EXPAND_ALL: v,
  CATEGORY_EXPAND: y,
  CHANNEL_ACK: b,
  CHANNEL_COLLAPSE: function(n) {
    var e;
    let {
      channelId: t
    } = n;
    return p.clearGuildId(null == (e = I.Z.getChannel(t)) ? true : e.guild_id)
  },
  CHANNEL_CREATE: H,
  CHANNEL_DELETE: H,
  CHANNEL_LOCAL_ACK: b,
  CHANNEL_MUTE_EXPIRED: v,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: b,
  CHANNEL_SELECT: w,
  CHANNEL_STATUSES: function(n) {
    return p.clearGuildId(n.guildId)
  },
  CHANNEL_UPDATES: function(n) {
    let {
      channels: e
    } = n, t = false;
    return a()(e).map(n => n.guild_id).uniq().forEach(n => {
      p.clearGuildId(n) && (t = true)
    }), t
  },
  CONNECTION_OPEN_SUPPLEMENTAL: V,
  CONNECTION_OPEN: Z,
  CURRENT_USER_UPDATE: Z,
  DECAY_READ_STATES: Z,
  DEV_TOOLS_DESIGN_TOGGLE_SET: Z,
  DISABLE_AUTOMATIC_ACK: b,
  DISMISS_FAVORITE_SUGGESTION: function(n) {
    let {
      channelId: e
    } = n;
    return p.nonPositionalChannelIdUpdate(e)
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function(n) {
    let {
      location: e
    } = n;
    return p.updateSubtitles((0, _.j)(e), (0, _.p)(e))
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function(n) {
    V()
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: V,
  ENABLE_AUTOMATIC_ACK: b,
  FETCH_GUILD_EVENTS_FOR_GUILD: function(n) {
    let {
      guildId: e
    } = n;
    return p.updateSubtitles(e)
  },
  GAMES_DATABASE_FETCH_FAIL: V,
  GAMES_DATABASE_FETCH: V,
  GAMES_DATABASE_UPDATE: V,
  GUILD_APPLICATIONS_FETCH_SUCCESS: V,
  GUILD_CREATE: x,
  GUILD_DELETE: x,
  GUILD_MEMBER_UPDATE: function(n) {
    let {
      guildId: e,
      user: t
    } = n;
    return T.default.getId() === t.id && p.clearGuildId(e)
  },
  GUILD_MUTE_EXPIRED: v,
  GUILD_ROLE_CREATE: v,
  GUILD_ROLE_DELETE: v,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: v,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: v,
  GUILD_ROLE_UPDATE: v,
  GUILD_SCHEDULED_EVENT_CREATE: B,
  GUILD_SCHEDULED_EVENT_DELETE: B,
  GUILD_SCHEDULED_EVENT_UPDATE: B,
  GUILD_TOGGLE_COLLAPSE_MUTED: v,
  GUILD_UPDATE: x,
  IMPERSONATE_STOP: v,
  IMPERSONATE_UPDATE: v,
  LOAD_CHANNELS: function(n) {
    n.channels.forEach(n => {
      let {
        guildId: e
      } = n;
      return p.clearGuildId(e)
    })
  },
  LOAD_MESSAGES_SUCCESS: b,
  MESSAGE_ACK: b,
  MESSAGE_CREATE: function(n) {
    let {
      channelId: e
    } = n;
    return p.nonPositionalChannelIdUpdate(e)
  },
  MESSAGE_DELETE_BULK: b,
  MESSAGE_DELETE: b,
  NOTIFICATION_SETTINGS_UPDATE: Z,
  OVERLAY_INITIALIZE: Z,
  PASSIVE_UPDATE_V2: function(n) {
    return p.clearGuildId(n.guildId)
  },
  RECOMPUTE_READ_STATES: Z,
  RESORT_THREADS: b,
  SET_RECENTLY_ACTIVE_COLLAPSED: Z,
  THREAD_CREATE: j,
  THREAD_DELETE: function(n) {
    let {
      channel: e
    } = n;
    return p.nonPositionalChannelUpdate(e)
  },
  THREAD_LIST_SYNC: v,
  THREAD_MEMBER_UPDATE: M,
  THREAD_MEMBERS_UPDATE: M,
  THREAD_UPDATE: j,
  TRY_ACK: b,
  UPDATE_CHANNEL_DIMENSIONS: b,
  UPDATE_CHANNEL_LIST_SUBTITLES: function(n) {
    let {
      guildId: e
    } = n;
    p.updateSubtitles(e)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: v,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: v,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(n) {
    let {
      userGuildSettings: e
    } = n;
    e.forEach(n => {
      let {
        guild_id: e
      } = n;
      return p.clearGuildId(e)
    })
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: v,
  USER_GUILD_SETTINGS_GUILD_UPDATE: v,
  USER_SETTINGS_PROTO_UPDATE: function(n) {
    var e;
    let {
      settings: t
    } = n;
    if (t.type !== G.yP.PRELOADED_USER_SETTINGS) returnfalse;
    let i = null == (e = t.proto.guilds) ? true : e.guilds,
      l = false;
    return null != i && R.default.keys(i).forEach(n => {
      null != i[n].guildRecentsDismissedAt && (l = p.updateRecentsCategory(n) || l)
    }), l
  },
  VOICE_CATEGORY_COLLAPSE: F,
  VOICE_CATEGORY_EXPAND: F,
  VOICE_CHANNEL_SELECT: w,
  VOICE_CHANNEL_STATUS_UPDATE: function(n) {
    return p.nonPositionalChannelIdUpdate(n.id)
  },
  VOICE_STATE_UPDATES: function(n) {
    let {
      voiceStates: e
    } = n, t = w(), i = new Set;
    for (let {
        channelId: n,
        oldChannelId: l
      }
      of e) null == l || i.has(l) || (p.nonPositionalChannelIdUpdate(l) && (t = true), i.add(l)), null == n || i.has(n) || (p.nonPositionalChannelIdUpdate(n) && (t = true), i.add(n));
    return t
  },
  WINDOW_FOCUS: function() {
    return null != O && p.nonPositionalChannelIdUpdate(O)
  }
})