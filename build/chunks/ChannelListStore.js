/** Chunk was on 99617 **/
/** chunk id: 734307, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => K
}), require("./388685.js");
var i, l, r, Chunk392711 = require("./392711.js"),
  E = require.n(Chunk392711),
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
let m = null,
  p = null,
  Z = new Chunk540126.ZP;

function x() {
  let n = Chunk944486.Z.getChannelId(),
    e = Chunk944486.Z.getVoiceChannelId();
  return m = module, p = exports, Z.clear()
}

function H(n) {
  let {
    guild: {
      id: e
    }
  } = n;
  return Z.clearGuildId(e)
}

function v(n) {
  let {
    channel: {
      guild_id: e
    }
  } = n;
  return Z.clearGuildId(e)
}

function b(n) {
  let {
    guildId: e
  } = n;
  return Z.clearGuildId(e)
}

function j(n) {
  let {
    channelId: e
  } = n;
  return Z.nonPositionalChannelIdUpdate(e)
}

function M(n) {
  let {
    channel: e
  } = n;
  return Z.nonPositionalChannelIdUpdate(e.id)
}

function w(n) {
  let {
    id: e
  } = n;
  return Z.nonPositionalChannelIdUpdate(e)
}

function y() {
  let n = Chunk944486.Z.getChannelId(),
    e = Chunk944486.Z.getVoiceChannelId(),
    t = m !== module || p !== exports;
  return !!require && (E()([m, p, module, exports]).uniq().forEach(n => {
    null != n && Z.nonPositionalChannelIdUpdate(n) && (t = true)
  }), m = module, p = exports, true)
}

function F(n) {
  let {
    id: e
  } = n, t = L.Z.getChannel(e);
  return null == t ? Z.clearGuildId(e) : Z.clearGuildId(t.guild_id)
}

function V(n) {
  let {
    guildId: e
  } = n;
  return Z.clearGuildId(e)
}

function B() {
  return Z.updateSubtitles()
}

function Y(n) {
  let {
    guildScheduledEvent: e
  } = n;
  return Z.updateSubtitles(e.guild_id)
}
class k extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk601070.Z, Chunk314897.default, Chunk680089.Z, Chunk592125.Z, Chunk58468.Z, Chunk317381.ZP, Chunk77498.Z, Chunk430198.Z, Chunk924301.ZP, Chunk569471.Z, Chunk496675.Z, Chunk306680.ZP, Chunk944486.Z, Chunk9156.ZP, Chunk581883.Z)
  }
  getGuild(n, e) {
    var t, i;
    let l = Z.getGuild(n, null != (t = null == e ? true : e.guildActionRows) ? t : [], null != (i = null == e ? true : e.channelNoticeRows) ? i : []);
    return {
      guildChannelsVersion: l.version,
      guildChannels: l
    }
  }
  getGuildWithoutChangingGuildActionRows(n) {
    let e = Z.getGuildChannelRowsOnly(n);
    return {
      guildChannelsVersion: e.version,
      guildChannels: e
    }
  }
  recentsChannelCount(n) {
    if (null == n) return 0;
    let e = Z.getGuildChannelRowsOnly(n);
    return e.getCategoryFromSection(e.recentsSectionNumber).getShownChannelIds().length
  }
}
r = "ChannelListStore", (l = "displayName") in k ? Object.defineProperty(k, l, {
  value: r,
  enumerable: true,
  configurable: true,
  writable: true
}) : k[l] = r;
let K = new k(Chunk570140.Z, {
  APPLICATION_FETCH_FAIL: B,
  APPLICATION_FETCH_SUCCESS: B,
  APPLICATION_FETCH: B,
  APPLICATIONS_FETCH_FAIL: B,
  APPLICATIONS_FETCH_SUCCESS: B,
  APPLICATIONS_FETCH: B,
  BACKGROUND_SYNC: x,
  BULK_ACK: function(n) {
    let {
      channels: e
    } = n, t = false;
    return E()(e).map(n => {
      var e;
      return null == (e = L.Z.getChannel(n.channelId)) ? true : e.guild_id
    }).filter(R.lm).uniq().forEach(n => {
      Z.clearGuildId(n) && (t = true)
    }), t
  },
  BULK_CLEAR_RECENTS: b,
  CACHE_LOADED_LAZY: x,
  CATEGORY_COLLAPSE_ALL: b,
  CATEGORY_COLLAPSE: F,
  CATEGORY_EXPAND_ALL: b,
  CATEGORY_EXPAND: F,
  CHANNEL_ACK: j,
  CHANNEL_COLLAPSE: function(n) {
    var e;
    let {
      channelId: t
    } = n;
    return Z.clearGuildId(null == (e = L.Z.getChannel(t)) ? true : e.guild_id)
  },
  CHANNEL_CREATE: v,
  CHANNEL_DELETE: v,
  CHANNEL_LOCAL_ACK: j,
  CHANNEL_MUTE_EXPIRED: b,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: j,
  CHANNEL_SELECT: y,
  CHANNEL_STATUSES: function(n) {
    return Z.clearGuildId(n.guildId)
  },
  CHANNEL_UPDATES: function(n) {
    let {
      channels: e
    } = n, t = false;
    return E()(e).map(n => n.guild_id).uniq().forEach(n => {
      Z.clearGuildId(n) && (t = true)
    }), t
  },
  CONNECTION_OPEN_SUPPLEMENTAL: B,
  CONNECTION_OPEN: x,
  CURRENT_USER_UPDATE: x,
  DECAY_READ_STATES: x,
  DEV_TOOLS_DESIGN_TOGGLE_SET: x,
  DISABLE_AUTOMATIC_ACK: j,
  DISMISS_FAVORITE_SUGGESTION: function(n) {
    let {
      channelId: e
    } = n;
    return Z.nonPositionalChannelIdUpdate(e)
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function(n) {
    let {
      location: e
    } = n;
    return Z.updateSubtitles((0, u.j)(e), (0, u.p)(e))
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function(n) {
    B()
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: B,
  ENABLE_AUTOMATIC_ACK: j,
  FETCH_GUILD_EVENTS_FOR_GUILD: function(n) {
    let {
      guildId: e
    } = n;
    return Z.updateSubtitles(e)
  },
  GAMES_DATABASE_FETCH_FAIL: B,
  GAMES_DATABASE_FETCH: B,
  GAMES_DATABASE_UPDATE: B,
  GUILD_APPLICATIONS_FETCH_SUCCESS: B,
  GUILD_CREATE: H,
  GUILD_DELETE: H,
  GUILD_MEMBER_UPDATE: function(n) {
    let {
      guildId: e,
      user: t
    } = n;
    return S.default.getId() === t.id && Z.clearGuildId(e)
  },
  GUILD_MUTE_EXPIRED: b,
  GUILD_ROLE_CREATE: b,
  GUILD_ROLE_DELETE: b,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: b,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: b,
  GUILD_ROLE_UPDATE: b,
  GUILD_SCHEDULED_EVENT_CREATE: Y,
  GUILD_SCHEDULED_EVENT_DELETE: Y,
  GUILD_SCHEDULED_EVENT_UPDATE: Y,
  GUILD_TOGGLE_COLLAPSE_MUTED: b,
  GUILD_UPDATE: H,
  IMPERSONATE_STOP: b,
  IMPERSONATE_UPDATE: b,
  LOAD_CHANNELS: function(n) {
    n.channels.forEach(n => {
      let {
        guildId: e
      } = n;
      return Z.clearGuildId(e)
    })
  },
  LOAD_MESSAGES_SUCCESS: j,
  MESSAGE_ACK: j,
  MESSAGE_CREATE: function(n) {
    let {
      channelId: e
    } = n;
    return Z.nonPositionalChannelIdUpdate(e)
  },
  MESSAGE_DELETE_BULK: j,
  MESSAGE_DELETE: j,
  NOTIFICATION_SETTINGS_UPDATE: x,
  OVERLAY_INITIALIZE: x,
  PASSIVE_UPDATE_V2: function(n) {
    return Z.clearGuildId(n.guildId)
  },
  RECOMPUTE_READ_STATES: x,
  RESORT_THREADS: j,
  SET_RECENTLY_ACTIVE_COLLAPSED: x,
  THREAD_CREATE: M,
  THREAD_DELETE: function(n) {
    let {
      channel: e
    } = n;
    return Z.nonPositionalChannelUpdate(e)
  },
  THREAD_LIST_SYNC: b,
  THREAD_MEMBER_UPDATE: w,
  THREAD_MEMBERS_UPDATE: w,
  THREAD_UPDATE: M,
  TRY_ACK: j,
  UPDATE_CHANNEL_DIMENSIONS: j,
  UPDATE_CHANNEL_LIST_SUBTITLES: function(n) {
    let {
      guildId: e
    } = n;
    Z.updateSubtitles(e)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: b,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: b,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(n) {
    let {
      userGuildSettings: e
    } = n;
    e.forEach(n => {
      let {
        guild_id: e
      } = n;
      return Z.clearGuildId(e)
    })
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: b,
  USER_GUILD_SETTINGS_GUILD_UPDATE: b,
  USER_SETTINGS_PROTO_UPDATE: function(n) {
    var e;
    let {
      settings: t
    } = n;
    if (t.type !== O.yP.PRELOADED_USER_SETTINGS) returnfalse;
    let i = null == (e = t.proto.guilds) ? true : e.guilds,
      l = false;
    return null != i && f.default.keys(i).forEach(n => {
      null != i[n].guildRecentsDismissedAt && (l = Z.updateRecentsCategory(n) || l)
    }), l
  },
  VOICE_CATEGORY_COLLAPSE: V,
  VOICE_CATEGORY_EXPAND: V,
  VOICE_CHANNEL_SELECT: y,
  VOICE_CHANNEL_STATUS_UPDATE: function(n) {
    return Z.nonPositionalChannelIdUpdate(n.id)
  },
  VOICE_STATE_UPDATES: function(n) {
    let {
      voiceStates: e
    } = n, t = y(), i = new Set;
    for (let {
        channelId: n,
        oldChannelId: l
      }
      of e) null == l || i.has(l) || (Z.nonPositionalChannelIdUpdate(l) && (t = true), i.add(l)), null == n || i.has(n) || (Z.nonPositionalChannelIdUpdate(n) && (t = true), i.add(n));
    return t
  },
  WINDOW_FOCUS: function() {
    return null != m && Z.nonPositionalChannelIdUpdate(m)
  }
})