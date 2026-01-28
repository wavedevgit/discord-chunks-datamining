/** Chunk was on 5606 **/
/** chunk id: 960755, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => W
}), require("./896048.js");
var r, i, Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
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
let I = null,
  N = null,
  P = new Chunk32603.Ay;

function R() {
  let e = C.A.getChannelId(),
    t = C.A.getVoiceChannelId();
  return I = e, N = t, P.clear()
}

function D(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  return P.clearGuildId(t)
}

function w(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  return P.clearGuildId(t)
}

function L(e) {
  let {
    guildId: t
  } = e;
  return P.clearGuildId(t)
}

function M(e) {
  let {
    channelId: t
  } = e;
  return P.nonPositionalChannelIdUpdate(t)
}

function G(e) {
  let {
    channel: t
  } = e;
  return P.nonPositionalChannelIdUpdate(t.id)
}

function U(e) {
  let {
    id: t
  } = e;
  return P.nonPositionalChannelIdUpdate(t)
}

function k() {
  let e = C.A.getChannelId(),
    t = C.A.getVoiceChannelId(),
    n = I !== e || N !== t;
  return !!n && (s()([I, N, e, t]).uniq().forEach(e => {
    null != e && P.nonPositionalChannelIdUpdate(e) && (n = true)
  }), I = e, N = t, true)
}

function H(e) {
  let {
    id: t
  } = e, n = h.A.getChannel(t);
  return null == n ? P.clearGuildId(t) : P.clearGuildId(n.guild_id)
}

function B(e) {
  let {
    guildId: t
  } = e;
  return P.clearGuildId(t)
}

function V() {
  return P.updateSubtitles()
}

function F(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return P.updateSubtitles(t.guild_id)
}
class Y extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(_.A, f.default, b.A, h.A, A.A, c.Ay, E.A, u.A, p.Ay, m.A, x.A, O.Ay, C.A, y.Ay, g.A)
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
}(i = "displayName") in Y ? Object.defineProperty(Y, i, {
  value: "ChannelListStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : Y[i] = "ChannelListStore";
let W = new Y(Chunk73153.h, {
  APPLICATION_FETCH_FAIL: V,
  APPLICATION_FETCH_SUCCESS: V,
  APPLICATION_FETCH: V,
  APPLICATIONS_FETCH_FAIL: V,
  APPLICATIONS_FETCH_SUCCESS: V,
  APPLICATIONS_FETCH: V,
  BACKGROUND_SYNC: R,
  BULK_ACK: function(e) {
    let {
      channels: t
    } = e, n = false;
    return s()(t).map(e => {
      var t;
      return null == (t = h.A.getChannel(e.channelId)) ? true : t.guild_id
    }).filter(j.Vq).uniq().forEach(e => {
      P.clearGuildId(e) && (n = true)
    }), n
  },
  BULK_CLEAR_RECENTS: L,
  CACHE_LOADED_LAZY: R,
  CATEGORY_COLLAPSE_ALL: L,
  CATEGORY_COLLAPSE: H,
  CATEGORY_EXPAND_ALL: L,
  CATEGORY_EXPAND: H,
  CHANNEL_ACK: M,
  CHANNEL_COLLAPSE: function(e) {
    var t;
    let {
      channelId: n
    } = e;
    return P.clearGuildId(null == (t = h.A.getChannel(n)) ? true : t.guild_id)
  },
  CHANNEL_CREATE: w,
  CHANNEL_DELETE: w,
  CHANNEL_LOCAL_ACK: M,
  CHANNEL_MUTE_EXPIRED: L,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: M,
  CHANNEL_SELECT: k,
  CHANNEL_STATUSES: function(e) {
    return P.clearGuildId(e.guildId)
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = false;
    return s()(t).map(e => e.guild_id).uniq().forEach(e => {
      P.clearGuildId(e) && (n = true)
    }), n
  },
  CONNECTION_OPEN_SUPPLEMENTAL: V,
  CONNECTION_OPEN: R,
  CURRENT_USER_UPDATE: R,
  DECAY_READ_STATES: R,
  DEV_TOOLS_DESIGN_TOGGLE_SET: R,
  DISABLE_AUTOMATIC_ACK: M,
  DISMISS_FAVORITE_SUGGESTION: function(e) {
    let {
      channelId: t
    } = e;
    return P.nonPositionalChannelIdUpdate(t)
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function(e) {
    let {
      location: t
    } = e;
    return P.updateSubtitles((0, d.D)(t), (0, d.H)(t))
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
    V()
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: V,
  ENABLE_AUTOMATIC_ACK: M,
  FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
    let {
      guildId: t
    } = e;
    return P.updateSubtitles(t)
  },
  GAMES_DATABASE_FETCH_FAIL: V,
  GAMES_DATABASE_FETCH: V,
  GAMES_DATABASE_UPDATE: V,
  GUILD_APPLICATIONS_FETCH_SUCCESS: V,
  GUILD_CREATE: D,
  GUILD_DELETE: D,
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    return f.default.getId() === n.id && P.clearGuildId(t)
  },
  GUILD_MUTE_EXPIRED: L,
  GUILD_ROLE_CREATE: L,
  GUILD_ROLE_DELETE: L,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: L,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: L,
  GUILD_ROLE_UPDATE: L,
  GUILD_SCHEDULED_EVENT_CREATE: F,
  GUILD_SCHEDULED_EVENT_DELETE: F,
  GUILD_SCHEDULED_EVENT_UPDATE: F,
  GUILD_TOGGLE_COLLAPSE_MUTED: L,
  GUILD_UPDATE: D,
  IMPERSONATE_STOP: L,
  IMPERSONATE_UPDATE: L,
  LOAD_CHANNELS: function(e) {
    e.channels.forEach(e => {
      let {
        guildId: t
      } = e;
      return P.clearGuildId(t)
    })
  },
  LOAD_MESSAGES_SUCCESS: M,
  MESSAGE_ACK: M,
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t
    } = e;
    return P.nonPositionalChannelIdUpdate(t)
  },
  MESSAGE_DELETE_BULK: M,
  MESSAGE_DELETE: M,
  NOTIFICATION_SETTINGS_UPDATE: R,
  OVERLAY_INITIALIZE: R,
  PASSIVE_UPDATE_V2: function(e) {
    return P.clearGuildId(e.guildId)
  },
  RECOMPUTE_READ_STATES: R,
  RESORT_THREADS: M,
  SET_RECENTLY_ACTIVE_COLLAPSED: R,
  THREAD_CREATE: G,
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return P.nonPositionalChannelUpdate(t)
  },
  THREAD_LIST_SYNC: L,
  THREAD_MEMBER_UPDATE: U,
  THREAD_MEMBERS_UPDATE: U,
  THREAD_UPDATE: G,
  TRY_ACK: M,
  UPDATE_CHANNEL_DIMENSIONS: M,
  UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
    let {
      guildId: t
    } = e;
    P.updateSubtitles(t)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: L,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: L,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    t.forEach(e => {
      let {
        guild_id: t
      } = e;
      return P.clearGuildId(t)
    })
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: L,
  USER_GUILD_SETTINGS_GUILD_UPDATE: L,
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    var t;
    let {
      settings: n
    } = e;
    if (n.type !== S.oD.PRELOADED_USER_SETTINGS) returnfalse;
    let r = null == (t = n.proto.guilds) ? true : t.guilds,
      i = false;
    return null != r && T.default.keys(r).forEach(e => {
      null != r[e].guildRecentsDismissedAt && (i = P.updateRecentsCategory(e) || i)
    }), i
  },
  VOICE_CATEGORY_COLLAPSE: B,
  VOICE_CATEGORY_EXPAND: B,
  VOICE_CHANNEL_SELECT: k,
  VOICE_CHANNEL_STATUS_UPDATE: function(e) {
    return P.nonPositionalChannelIdUpdate(e.id)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = k(), r = new Set;
    for (let {
        channelId: e,
        oldChannelId: i
      }
      of t) null == i || r.has(i) || (P.nonPositionalChannelIdUpdate(i) && (n = true), r.add(i)), null == e || r.has(e) || (P.nonPositionalChannelIdUpdate(e) && (n = true), r.add(e));
    return n
  },
  WINDOW_FOCUS: function() {
    return null != I && P.nonPositionalChannelIdUpdate(I)
  }
})