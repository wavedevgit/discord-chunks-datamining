/** Chunk was on 99617 **/
t.d(e, {
  Z: () => K
}), t(388685);
var i, l, r, a = t(392711),
  E = t.n(a),
  d = t(442837),
  o = t(570140),
  _ = t(317381),
  u = t(16609),
  s = t(430198),
  c = t(924301),
  C = t(601070),
  A = t(569471),
  T = t(581883),
  S = t(314897),
  I = t(680089),
  L = t(592125),
  D = t(58468),
  N = t(77498),
  h = t(496675),
  U = t(306680),
  P = t(944486),
  g = t(9156),
  R = t(823379),
  f = t(709054),
  G = t(540126),
  O = t(526761);
let m = null,
  p = null,
  Z = new G.ZP;

function x() {
  let n = P.Z.getChannelId(),
    e = P.Z.getVoiceChannelId();
  return m = n, p = e, Z.clear()
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
  let n = P.Z.getChannelId(),
    e = P.Z.getVoiceChannelId(),
    t = m !== n || p !== e;
  return !!t && (E()([m, p, n, e]).uniq().forEach(n => {
    null != n && Z.nonPositionalChannelIdUpdate(n) && (t = !0)
  }), m = n, p = e, !0)
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
class k extends(i = d.ZP.Store) {
  initialize() {
    this.waitFor(C.Z, S.default, I.Z, L.Z, D.Z, _.ZP, N.Z, s.Z, c.ZP, A.Z, h.Z, U.ZP, P.Z, g.ZP, T.Z)
  }
  getGuild(n, e) {
    var t, i;
    let l = Z.getGuild(n, null != (t = null == e ? void 0 : e.guildActionRows) ? t : [], null != (i = null == e ? void 0 : e.channelNoticeRows) ? i : []);
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
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : k[l] = r;
let K = new k(o.Z, {
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
    } = n, t = !1;
    return E()(e).map(n => {
      var e;
      return null == (e = L.Z.getChannel(n.channelId)) ? void 0 : e.guild_id
    }).filter(R.lm).uniq().forEach(n => {
      Z.clearGuildId(n) && (t = !0)
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
    return Z.clearGuildId(null == (e = L.Z.getChannel(t)) ? void 0 : e.guild_id)
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
    } = n, t = !1;
    return E()(e).map(n => n.guild_id).uniq().forEach(n => {
      Z.clearGuildId(n) && (t = !0)
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
    if (t.type !== O.yP.PRELOADED_USER_SETTINGS) return !1;
    let i = null == (e = t.proto.guilds) ? void 0 : e.guilds,
      l = !1;
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
      of e) null == l || i.has(l) || (Z.nonPositionalChannelIdUpdate(l) && (t = !0), i.add(l)), null == n || i.has(n) || (Z.nonPositionalChannelIdUpdate(n) && (t = !0), i.add(n));
    return t
  },
  WINDOW_FOCUS: function() {
    return null != m && Z.nonPositionalChannelIdUpdate(m)
  }
})