/** Chunk was on web.js **/
/** chunk id: 9156, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U2: () => Q,
  ZP: () => em,
  wL: () => q
}), require("./388685.js"), require("./997841.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk798140 = require("./798140.js"),
  Chunk160404 = require("./160404.js"),
  Chunk569471 = require("./569471.js"),
  Chunk131704 = require("./131704.js"),
  Chunk709054 = require("./709054.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk468788 = require("./468788.js"),
  Chunk490897 = require("./490897.js"),
  Chunk526761 = require("./526761.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = {},
  A = {},
  C = false,
  N = false,
  P = {
    flags: 0
  },
  R = new Chunk798140.ZP,
  D = new Chunk798140.ZP,
  w = {
    suppress_everyone: false,
    suppress_roles: false,
    mute_scheduled_events: false,
    mobile_push: true,
    muted: false,
    message_notifications: Chunk981631.bL.ALL_MESSAGES,
    flags: 0,
    channel_overrides: {},
    notify_highlights: Chunk981631.gLR.NULL,
    hide_muted_channels: false,
    version: false,
    mute_config: null
  },
  x = {
    [Chunk981631.bL.ALL_MESSAGES]: I(v({}, w), {
      message_notifications: Chunk981631.bL.ALL_MESSAGES
    }),
    [Chunk981631.bL.ONLY_MENTIONS]: I(v({}, w), {
      message_notifications: Chunk981631.bL.ONLY_MENTIONS
    })
  },
  L = {},
  j = {},
  M = "null",
  k = new Set,
  U = new Set,
  G = {},
  Z = {};

function B(e, t) {
  var n;
  let r = T[e],
    i = null != (n = null == r ? true : r.channel_overrides) ? n : {},
    s = Q(t.channel_overrides),
    l = I(v({}, q(e), r, t), {
      channel_overrides: s
    });
  R.clearTimer(e), a().forEach(i, e => {
    D.clearTimer(e.channel_id)
  }), F(e, l), T[e] = l, L[e] = ed(T[e]);
  let c = a().filter(l.channel_overrides, e => {
    var t;
    return o.yE(null != (t = e.flags) ? t : 0, y.ic.OPT_IN_ENABLED)
  });
  j[e] = new Set(c.map(e => e.channel_id)), V(e), delete A[e]
}

function F(e, t) {
  true === t.muted && R.setTimer(e, t.mute_config, () => {
    H(e, {
      muted: false
    }), l.Z.dispatch({
      type: "GUILD_MUTE_EXPIRED",
      guildId: e
    })
  }) && (t.muted = false), a().forEach(t.channel_overrides, t => {
    true === t.muted && D.setTimer(t.channel_id, t.mute_config, () => {
      Y(e, t.channel_id, {
        muted: false
      }), l.Z.dispatch({
        type: "CHANNEL_MUTE_EXPIRED",
        guildId: e,
        channelId: t.channel_id
      })
    }) && (t.muted = false)
  })
}

function V(e) {
  var t;
  if (null == e) return;
  let n = new Set(j[e]),
    r = null != (t = G[e]) ? t : {};
  for (let e in r) {
    let t = r[e];
    o.yE(t.flags, y.ic.OPT_IN_ENABLED) ? n.add(e) : n.delete(e)
  }
  Object.keys(r).length > 0 ? Z[e] = n : delete Z[e]
}

function H(e, t) {
  var n;
  let r = T[e];
  B(e, v({
    channel_overrides: null != (n = null == r ? true : r.channel_overrides) ? n : {}
  }, t))
}

function Y(e, t, n) {
  let r = z(e, t, n);
  K(e, {
    [t]: r
  })
}

function W(e, t) {
  var n;
  let r = {},
    i = null != (n = null != e ? G[e] : null) ? n : {};
  p.default.keys(t).forEach(n => {
    var a;
    let o = z(e, n, t[n]);
    r[n] = o, i[n] = {
      flags: null != (a = o.flags) ? a : 0
    }
  }), null != e && (G[e] = v({}, G[e], i)), K(e, r)
}

function K(e, t) {
  var n;
  let r = T[e],
    i = null != (n = null == r ? true : r.channel_overrides) ? n : {};
  B(e, {
    channel_overrides: null == r ? t : v({}, i, t)
  })
}

function z(e, t, n) {
  var r;
  let i = T[e];
  return v({}, {
    channel_id: t,
    muted: false
  }, (null != (r = null == i ? true : i.channel_overrides) ? r : {})[t], n)
}

function q(e) {
  let t = m.Z.getGuild(e);
  return x[null != t ? t.defaultMessageNotifications : g.bL.ALL_MESSAGES]
}

function Q() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  return module instanceof Array ? a().keyBy(module, "channel_id") : module
}

function X(e) {
  var t;
  return null != (t = T[e]) ? t : q(e)
}

function J(e) {
  null != e.userGuildSettings && 0 !== e.userGuildSettings.length && (T = {}, L = {}, j = {}, e.userGuildSettings.forEach(e => {
    let t = e.guild_id;
    T[t] = e;
    let n = new Set,
      r = new Set;
    for (let t in e.channel_overrides) {
      var i;
      let a = e.channel_overrides[t];
      (0, c.m$)(a) && n.add(t), o.yE(null != (i = a.flags) ? i : 0, y.ic.OPT_IN_ENABLED) && r.add(t)
    }
    L[t] = n, j[t] = r
  }))
}

function $(e) {
  en(e.notificationSettings), R.reset(), D.reset(), e.userGuildSettings.partial || (T = {}, L = {}, j = {});
  let t = new Set;
  for (let n in e.userGuildSettings.entries.forEach(e => {
      let n = e;
      "channel_overrides" in n || (n.channel_overrides = {}), B(e.guild_id, n), null != e.guild_id && t.add(e.guild_id)
    }), T) t.has(n) || F(n, T[n])
}

function ee(e) {
  let {
    allUserGuildSettings: t
  } = e, {
    userGuildSettings: n,
    mutedChannels: r,
    optedInChannelsByGuild: i
  } = t;
  T = v({}, n), L = {}, j = {}, p.default.keys(r).forEach(e => {
    L[e] = new Set(r[e])
  }), p.default.keys(i).forEach(e => {
    j[e] = new Set(i[e])
  })
}

function et(e) {
  let {
    settings: t
  } = e;
  en(t)
}

function en(e) {
  C = o.yE(e.flags, E.c.USE_NEW_NOTIFICATIONS), N = o.yE(e.flags, E.c.MENTION_ON_ALL_MESSAGES), P = e
}

function er(e) {
  let {
    userGuildSettings: t
  } = e;
  t.forEach(e => {
    B(e.guild_id, v({
      channel_overrides: {}
    }, e))
  })
}

function ei(e) {
  let {
    guildId: t,
    settings: n
  } = e;
  H(t, n)
}

function ea(e) {
  let {
    guildId: t,
    settings: n
  } = e;
  H(t, n), W(t, n.channel_overrides)
}

function eo(e) {
  let {
    guildId: t,
    channelId: n,
    settings: r
  } = e;
  null != t && null != r.flags && (G[t] = I(v({}, G[t]), {
    [n]: {
      flags: r.flags
    }
  })), Y(t, n, r)
}

function es(e) {
  let {
    guildId: t
  } = e;
  if (null == t) returnfalse;
  delete G[t], delete Z[t]
}

function el(e) {
  let {
    guildId: t,
    updates: n
  } = e;
  if (null == t) returnfalse;
  let r = G[t];
  if (null == r) returnfalse;
  for (let e in n) a().isEqual(n[e], r[e]) && delete r[e]
}

function ec(e) {
  let {
    guildId: t,
    overrides: n
  } = e;
  return !(null == t || u.Z.isFullServerPreview(t)) && (W(t, n), true)
}

function eu(e) {
  let {
    guildId: t
  } = e, n = null == T[t] ? q(t) : T[t];
  T[t] = I(v({}, n), {
    guild_id: t,
    hide_muted_channels: true !== n.hide_muted_channels
  })
}

function ed(e) {
  return new Set(null != e.channel_overrides ? a()(e.channel_overrides).filter(e => (0, c.m$)(e)).map(e => e.channel_id).value() : null)
}

function ef() {
  returntrue
}

function ep() {
  return C
}
class e_ extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(_.Z, m.Z, u.Z, d.Z, h.default), null != e) {
      var t, n;
      C = null != (t = e.useNewNotifications) && t, "userGuildSettings" in e && (T = e.userGuildSettings, j = a().mapValues(null != (n = e.optedInChannelsByGuild) ? n : {}, e => new Set(e)), a().forEach(T, (e, t) => {
        L[t] = ed(e)
      }))
    }
  }
  getState() {
    return {
      useNewNotifications: C
    }
  }
  get mentionOnAllMessages() {
    return N
  }
  isSuppressEveryoneEnabled(e) {
    return X(e).suppress_everyone
  }
  isSuppressRolesEnabled(e) {
    return X(e).suppress_roles
  }
  isMuteScheduledEventsEnabled(e) {
    return X(e).mute_scheduled_events
  }
  isMobilePushEnabled(e) {
    return X(e).mobile_push
  }
  isMuted(e) {
    let t = X(e);
    return (0, c.m$)(t)
  }
  isTemporarilyMuted(e) {
    let t = X(e);
    return (0, c.Cl)(t)
  }
  getMuteConfig(e) {
    return X(e).mute_config
  }
  getMessageNotifications(e) {
    return X(e).message_notifications
  }
  getChannelOverrides(e) {
    var t;
    return null != (t = X(e).channel_overrides) ? t : {}
  }
  getNotifyHighlights(e) {
    return X(e).notify_highlights
  }
  getGuildFlags(e) {
    return X(e).flags
  }
  getChannelMessageNotifications(e, t) {
    let n = this.getChannelOverrides(e)[t];
    return null == n || null == n.message_notifications ? g.bL.NULL : n.message_notifications
  }
  getChannelMuteConfig(e, t) {
    let n = this.getChannelOverrides(e)[t];
    return null != n ? n.mute_config : null
  }
  getMutedChannels(e) {
    var t;
    return null != (t = L[e]) ? t : k
  }
  isChannelMuted(e, t) {
    var n;
    let r = _.Z.getChannel(t);
    return e = null != (n = null == r ? true : r.getGuildId()) ? n : e, this.getMutedChannels(e).has(t)
  }
  isCategoryMuted(e, t) {
    let n = _.Z.getChannel(t);
    if (null == n) returnfalse;
    let r = n.parent_id;
    return null != r && this.getMutedChannels(e).has(r)
  }
  resolvedMessageNotifications(e) {
    let t = this.getChannelMessageNotifications(e.guild_id, e.id);
    if (t !== g.bL.NULL) return t;
    if (null != e.parent_id) {
      let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
      if (t !== g.bL.NULL) return t
    }
    return this.getMessageNotifications(e.guild_id)
  }
  resolveUnreadSetting(e) {
    if (f.Ec.has(e.type) || (0, f.hv)(e.type) || !ep()) return b.i.ALL_MESSAGES;
    let t = this.getChannelUnreadSetting(e.guild_id, e.id);
    if (t !== b.i.UNSET) return t;
    if (null != e.parent_id) {
      let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
      if (t !== b.i.UNSET) return t
    }
    let n = this.getGuildUnreadSetting(e.guild_id);
    return n !== b.i.UNSET ? n : this.resolvedMessageNotifications(e) === g.bL.ALL_MESSAGES ? b.i.ALL_MESSAGES : b.i.ONLY_MENTIONS
  }
  isGuildOrCategoryOrChannelMuted(e, t) {
    return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t)
  }
  allowNoMessages(e) {
    return this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) || this.resolvedMessageNotifications(e) === g.bL.NO_MESSAGES || this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e)
  }
  allowAllMessages(e) {
    return !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) && this.resolvedMessageNotifications(e) === g.bL.ALL_MESSAGES && (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e))
  }
  isGuildCollapsed(e) {
    var t;
    return (null == (t = T[e]) ? true : t.hide_muted_channels) === true
  }
  getAllSettings() {
    return {
      userGuildSettings: T,
      mutedChannels: L,
      optedInChannelsByGuild: j
    }
  }
  getChannelIdFlags(e, t) {
    var n;
    let r = this.getChannelOverrides(e)[t];
    return null != (n = null == r ? true : r.flags) ? n : 0
  }
  getChannelFlags(e) {
    return this.getChannelIdFlags(e.guild_id, e.id)
  }
  getNewForumThreadsCreated(e) {
    let t = this.getChannelOverrides(e.guild_id)[e.id];
    if (null != t && null != t.flags) {
      if (o.yE(t.flags, y.ic.NEW_FORUM_THREADS_ON)) returntrue;
      if (o.yE(t.flags, y.ic.NEW_FORUM_THREADS_OFF)) returnfalse
    }
    return this.resolvedMessageNotifications(e) === g.bL.ALL_MESSAGES
  }
  isOptInEnabled(e) {
    return null != e && (u.Z.isFullServerPreview(e) ? u.Z.isOptInEnabled(e) : o.yE(this.getGuildFlags(e), y.vc.OPT_IN_CHANNELS_ON))
  }
  isChannelRecordOrParentOptedIn(e, t) {
    return null != e && null != e.guild_id && (this.isChannelOptedIn(e.guild_id, e.id, t) || null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, t))
  }
  isChannelOrParentOptedIn(e, t, n) {
    return this.isChannelRecordOrParentOptedIn(_.Z.getChannel(t), n)
  }
  isChannelOptedIn(e, t) {
    var n, r;
    let i = arguments.length > 2 && true !== arguments[2] && arguments[2];
    if (null == e) returnfalse;
    if (u.Z.isFullServerPreview(e)) return u.Z.isChannelOptedIn(e, t);
    if (i && null != Z[e]) return Z[e].has(t);
    let a = null != (r = null == (n = this.getChannelOverrides(e)[t]) ? true : n.flags) ? r : 0;
    return o.yE(a, y.ic.OPT_IN_ENABLED)
  }
  getOptedInChannels(e) {
    var t, n;
    return u.Z.isFullServerPreview(e) ? null != (t = u.Z.getViewingChannels(e)) ? t : U : null != (n = j[e]) ? n : U
  }
  getOptedInChannelsWithPendingUpdates(e) {
    return Z[e]
  }
  getPendingChannelUpdates(e) {
    return G[e]
  }
  getGuildFavorites(e) {
    if (u.Z.isFullServerPreview(e)) return null;
    if (null == A[e]) {
      let t = a().filter(this.getChannelOverrides(e), t => {
        var n, r;
        return o.yE(null != (r = t.flags) ? r : 0, y.ic.FAVORITED) && (null == (n = _.Z.getChannel(t.channel_id)) ? true : n.guild_id) === e
      });
      A[e] = t.map(e => e.channel_id)
    }
    return A[e]
  }
  isFavorite(e, t) {
    var n;
    return !u.Z.isFullServerPreview(e) && (null == (n = this.getGuildFavorites(e)) ? true : n.includes(t)) === true
  }
  isMessagesFavorite(e) {
    var t, n;
    let r = null != (n = null == (t = this.getChannelOverrides(null)[e]) ? true : t.flags) ? n : 0;
    return o.yE(r, y.ic.FAVORITED)
  }
  isAddedToMessages(e) {
    var t, n;
    let r = null != (n = null == (t = this.getChannelOverrides(null)[e]) ? true : t.flags) ? n : 0;
    return o.yE(r, y.ic.OPT_IN_ENABLED)
  }
  getAddedToMessages() {
    var e;
    return null != (e = j[M]) ? module : U
  }
  get accountNotificationSettings() {
    return P
  }
  get useNewNotifications() {
    return C
  }
  getGuildUnreadSetting(e) {
    if (!ep()) return b.i.ALL_MESSAGES;
    let t = this.getGuildFlags(e);
    return o.yE(t, y.vc.UNREADS_ALL_MESSAGES) ? b.i.ALL_MESSAGES : o.yE(t, y.vc.UNREADS_ONLY_MENTIONS) ? b.i.ONLY_MENTIONS : b.i.UNSET
  }
  resolveGuildUnreadSetting(e) {
    let t = this.getGuildFlags(e.id);
    return !ep() || o.yE(t, y.vc.UNREADS_ALL_MESSAGES) ? b.i.ALL_MESSAGES : o.yE(t, y.vc.UNREADS_ONLY_MENTIONS) ? b.i.ONLY_MENTIONS : e.defaultMessageNotifications === g.bL.ALL_MESSAGES ? b.i.ALL_MESSAGES : b.i.ONLY_MENTIONS
  }
  getChannelRecordUnreadSetting(e) {
    return this.getChannelUnreadSetting(e.guild_id, e.id)
  }
  getChannelUnreadSetting(e, t) {
    let n = this.getChannelIdFlags(e, t);
    return o.yE(n, y.ic.UNREADS_ALL_MESSAGES) ? b.i.ALL_MESSAGES : o.yE(n, y.ic.UNREADS_ONLY_MENTIONS) ? b.i.ONLY_MENTIONS : b.i.UNSET
  }
}
O(e_, "displayName", "UserGuildSettingsStore"), O(e_, "persistKey", "collapsedGuilds");
let em = new e_(Chunk570140.Z, {
  USER_GUILD_SETTINGS_FULL_UPDATE: er,
  USER_GUILD_SETTINGS_GUILD_UPDATE: ei,
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: ea,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: eo,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: ec,
  CONNECTION_OPEN: $,
  CACHE_LOADED: J,
  OVERLAY_INITIALIZE: ee,
  GUILD_CREATE: ef,
  GUILD_UPDATE: ef,
  GUILD_TOGGLE_COLLAPSE_MUTED: eu,
  IMPERSONATE_UPDATE: ef,
  IMPERSONATE_STOP: ef,
  USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: el,
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: es,
  NOTIFICATION_SETTINGS_UPDATE: et,
  GUILD_MUTE_EXPIRED: () => true,
  CHANNEL_MUTE_EXPIRED: () => true
})