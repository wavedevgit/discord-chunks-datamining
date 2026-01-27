/** Chunk was on web.js **/
/** chunk id: 543465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => eh,
  b5: () => Q,
  wn: () => Z
}), require("./896048.js"), require("./938796.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk544743 = require("./544743.js"),
  Chunk164956 = require("./164956.js"),
  Chunk152007 = require("./152007.js"),
  Chunk95701 = require("./95701.js"),
  Chunk661191 = require("./661191.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk406535 = require("./406535.js"),
  Chunk790782 = require("./790782.js"),
  Chunk355097 = require("./355097.js");

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

function A(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = {},
  T = {},
  C = false,
  N = false,
  w = {
    flags: 0
  },
  R = new Chunk544743.Ay,
  P = new Chunk544743.Ay,
  D = {
    suppress_everyone: false,
    suppress_roles: false,
    mute_scheduled_events: false,
    mobile_push: true,
    muted: false,
    message_notifications: Chunk652215.orn.ALL_MESSAGES,
    flags: 0,
    channel_overrides: {},
    notify_highlights: Chunk652215.guM.NULL,
    hide_muted_channels: false,
    version: false,
    mute_config: null
  },
  L = {
    [Chunk652215.orn.ALL_MESSAGES]: I(v({}, D), {
      message_notifications: Chunk652215.orn.ALL_MESSAGES
    }),
    [Chunk652215.orn.ONLY_MENTIONS]: I(v({}, D), {
      message_notifications: Chunk652215.orn.ONLY_MENTIONS
    })
  },
  x = {},
  M = {},
  j = "null",
  k = new Set,
  U = new Set,
  G = {},
  F = {};

function V(e, t) {
  var n;
  let r = S[e],
    i = null != (n = null == r ? true : r.channel_overrides) ? n : {},
    s = Q(t.channel_overrides),
    l = I(v({}, Z(e), r, t), {
      channel_overrides: s
    });
  R.clearTimer(e), a().forEach(i, e => {
    P.clearTimer(e.channel_id)
  }), B(e, l), S[e] = l, x[e] = ed(S[e]);
  let c = a().filter(l.channel_overrides, e => {
    var t;
    return o.Lt(null != (t = e.flags) ? t : 0, b.vv.OPT_IN_ENABLED)
  });
  M[e] = new Set(c.map(e => e.channel_id)), H(e), delete T[e]
}

function B(e, t) {
  true === t.muted && R.setTimer(e, t.mute_config, () => {
    Y(e, {
      muted: false
    }), l.h.dispatch({
      type: "GUILD_MUTE_EXPIRED",
      guildId: e
    })
  }) && (t.muted = false), a().forEach(t.channel_overrides, t => {
    true === t.muted && P.setTimer(t.channel_id, t.mute_config, () => {
      W(e, t.channel_id, {
        muted: false
      }), l.h.dispatch({
        type: "CHANNEL_MUTE_EXPIRED",
        guildId: e,
        channelId: t.channel_id
      })
    }) && (t.muted = false)
  })
}

function H(e) {
  var t;
  if (null == e) return;
  let n = new Set(M[e]),
    r = null != (t = G[e]) ? t : {};
  for (let e in r) {
    let t = r[e];
    o.Lt(t.flags, b.vv.OPT_IN_ENABLED) ? n.add(e) : n.delete(e)
  }
  Object.keys(r).length > 0 ? F[e] = n : delete F[e]
}

function Y(e, t) {
  var n;
  let r = S[e];
  V(e, v({
    channel_overrides: null != (n = null == r ? true : r.channel_overrides) ? n : {}
  }, t))
}

function W(e, t, n) {
  let r = q(e, t, n);
  z(e, {
    [t]: r
  })
}

function K(e, t) {
  var n;
  let r = {},
    i = null != (n = null != e ? G[e] : null) ? n : {};
  p.default.keys(t).forEach(n => {
    var a;
    let o = q(e, n, t[n]);
    r[n] = o, i[n] = {
      flags: null != (a = o.flags) ? a : 0
    }
  }), null != e && (G[e] = v({}, G[e], i)), z(e, r)
}

function z(e, t) {
  var n;
  let r = S[e],
    i = null != (n = null == r ? true : r.channel_overrides) ? n : {};
  V(e, {
    channel_overrides: null == r ? t : v({}, i, t)
  })
}

function q(e, t, n) {
  var r;
  let i = S[e];
  return v({}, {
    channel_id: t,
    muted: false
  }, (null != (r = null == i ? true : i.channel_overrides) ? r : {})[t], n)
}

function Z(e) {
  let t = h.A.getGuild(e);
  return L[null != t ? t.defaultMessageNotifications : g.orn.ALL_MESSAGES]
}

function Q() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  return e instanceof Array ? a().keyBy(e, "channel_id") : e
}

function X(e) {
  var t;
  return null != (t = S[e]) ? t : Z(e)
}

function J(e) {
  null != e.userGuildSettings && 0 !== e.userGuildSettings.length && (S = {}, x = {}, M = {}, e.userGuildSettings.forEach(e => {
    let t = e.guild_id;
    S[t] = e;
    let n = new Set,
      r = new Set;
    for (let t in e.channel_overrides) {
      var i;
      let a = e.channel_overrides[t];
      (0, c.tG)(a) && n.add(t), o.Lt(null != (i = a.flags) ? i : 0, b.vv.OPT_IN_ENABLED) && r.add(t)
    }
    x[t] = n, M[t] = r
  }))
}

function $(e) {
  en(e.notificationSettings), R.reset(), P.reset(), e.userGuildSettings.partial || (S = {}, x = {}, M = {});
  let t = new Set;
  for (let n in e.userGuildSettings.entries.forEach(e => {
      let n = e;
      "channel_overrides" in n || (n.channel_overrides = {}), V(e.guild_id, n), null != e.guild_id && t.add(e.guild_id)
    }), S) t.has(n) || B(n, S[n])
}

function ee(e) {
  let {
    allUserGuildSettings: t
  } = e, {
    userGuildSettings: n,
    mutedChannels: r,
    optedInChannelsByGuild: i
  } = t;
  S = v({}, n), x = {}, M = {}, p.default.keys(r).forEach(e => {
    x[e] = new Set(r[e])
  }), p.default.keys(i).forEach(e => {
    M[e] = new Set(i[e])
  })
}

function et(e) {
  let {
    settings: t
  } = e;
  en(t)
}

function en(e) {
  C = o.Lt(e.flags, E.i.USE_NEW_NOTIFICATIONS), N = o.Lt(e.flags, E.i.MENTION_ON_ALL_MESSAGES), w = e
}

function er(e) {
  let {
    userGuildSettings: t
  } = e;
  t.forEach(e => {
    V(e.guild_id, v({
      channel_overrides: {}
    }, e))
  })
}

function ei(e) {
  let {
    guildId: t,
    settings: n
  } = e;
  Y(t, n)
}

function ea(e) {
  let {
    guildId: t,
    settings: n
  } = e;
  Y(t, n), K(t, n.channel_overrides)
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
  })), W(t, n, r)
}

function es(e) {
  let {
    guildId: t
  } = e;
  if (null == t) returnfalse;
  delete G[t], delete F[t]
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
  return !(null == t || u.A.isFullServerPreview(t)) && (K(t, n), true)
}

function eu(e) {
  let {
    guildId: t
  } = e, n = null == S[t] ? Z(t) : S[t];
  S[t] = I(v({}, n), {
    guild_id: t,
    hide_muted_channels: true !== n.hide_muted_channels
  })
}

function ed(e) {
  return new Set(null != e.channel_overrides ? a()(e.channel_overrides).filter(e => (0, c.tG)(e)).map(e => e.channel_id).value() : null)
}

function ef() {
  returntrue
}

function ep() {
  return C
}
class e_ extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (this.waitFor(_.A, h.A, u.A, d.A, m.default), null != e) {
      var t, n;
      C = null != (t = e.useNewNotifications) && t, "userGuildSettings" in e && (S = e.userGuildSettings, M = a().mapValues(null != (n = e.optedInChannelsByGuild) ? n : {}, e => new Set(e)), a().forEach(S, (e, t) => {
        x[t] = ed(e)
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
    return (0, c.tG)(t)
  }
  isTemporarilyMuted(e) {
    let t = X(e);
    return (0, c.wG)(t)
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
    return null == n || null == n.message_notifications ? g.orn.NULL : n.message_notifications
  }
  getChannelMuteConfig(e, t) {
    let n = this.getChannelOverrides(e)[t];
    return null != n ? n.mute_config : null
  }
  getMutedChannels(e) {
    var t;
    return null != (t = x[e]) ? t : k
  }
  isChannelMuted(e, t) {
    var n;
    let r = _.A.getChannel(t);
    return e = null != (n = null == r ? true : r.getGuildId()) ? n : e, this.getMutedChannels(e).has(t)
  }
  isCategoryMuted(e, t) {
    let n = _.A.getChannel(t);
    if (null == n) returnfalse;
    let r = n.parent_id;
    return null != r && this.getMutedChannels(e).has(r)
  }
  resolvedMessageNotifications(e) {
    let t = this.getChannelMessageNotifications(e.guild_id, e.id);
    if (t !== g.orn.NULL) return t;
    if (null != e.parent_id) {
      let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
      if (t !== g.orn.NULL) return t
    }
    return this.getMessageNotifications(e.guild_id)
  }
  resolveUnreadSetting(e) {
    if (f.Le.has(e.type) || (0, f.Gw)(e.type) || !ep()) return y.e.ALL_MESSAGES;
    let t = this.getChannelUnreadSetting(e.guild_id, e.id);
    if (t !== y.e.UNSET) return t;
    if (null != e.parent_id) {
      let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
      if (t !== y.e.UNSET) return t
    }
    let n = this.getGuildUnreadSetting(e.guild_id);
    return n !== y.e.UNSET ? n : this.resolvedMessageNotifications(e) === g.orn.ALL_MESSAGES ? y.e.ALL_MESSAGES : y.e.ONLY_MENTIONS
  }
  isGuildOrCategoryOrChannelMuted(e, t) {
    return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t)
  }
  allowNoMessages(e) {
    return this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) || this.resolvedMessageNotifications(e) === g.orn.NO_MESSAGES || this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e)
  }
  allowAllMessages(e) {
    return !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) && this.resolvedMessageNotifications(e) === g.orn.ALL_MESSAGES && (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e))
  }
  isGuildCollapsed(e) {
    var t;
    return (null == (t = S[e]) ? true : t.hide_muted_channels) === true
  }
  getAllSettings() {
    return {
      userGuildSettings: S,
      mutedChannels: x,
      optedInChannelsByGuild: M
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
      if (o.Lt(t.flags, b.vv.NEW_FORUM_THREADS_ON)) returntrue;
      if (o.Lt(t.flags, b.vv.NEW_FORUM_THREADS_OFF)) returnfalse
    }
    return this.resolvedMessageNotifications(e) === g.orn.ALL_MESSAGES
  }
  isOptInEnabled(e) {
    return null != e && (u.A.isFullServerPreview(e) ? u.A.isOptInEnabled(e) : o.Lt(this.getGuildFlags(e), b.n3.OPT_IN_CHANNELS_ON))
  }
  isChannelRecordOrParentOptedIn(e, t) {
    return null != e && null != e.guild_id && (this.isChannelOptedIn(e.guild_id, e.id, t) || null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, t))
  }
  isChannelOrParentOptedIn(e, t, n) {
    return this.isChannelRecordOrParentOptedIn(_.A.getChannel(t), n)
  }
  isChannelOptedIn(e, t) {
    var n, r;
    let i = arguments.length > 2 && true !== arguments[2] && arguments[2];
    if (null == e) returnfalse;
    if (u.A.isFullServerPreview(e)) return u.A.isChannelOptedIn(e, t);
    if (i && null != F[e]) return F[e].has(t);
    let a = null != (n = null == (r = this.getChannelOverrides(e)[t]) ? true : r.flags) ? n : 0;
    return o.Lt(a, b.vv.OPT_IN_ENABLED)
  }
  getOptedInChannels(e) {
    var t, n;
    return u.A.isFullServerPreview(e) ? null != (n = u.A.getViewingChannels(e)) ? n : U : null != (t = M[e]) ? t : U
  }
  getOptedInChannelsWithPendingUpdates(e) {
    return F[e]
  }
  getPendingChannelUpdates(e) {
    return G[e]
  }
  getGuildFavorites(e) {
    if (u.A.isFullServerPreview(e)) return null;
    if (null == T[e]) {
      let t = a().filter(this.getChannelOverrides(e), t => {
        var n, r;
        return o.Lt(null != (n = t.flags) ? n : 0, b.vv.FAVORITED) && (null == (r = _.A.getChannel(t.channel_id)) ? true : r.guild_id) === e
      });
      T[e] = t.map(e => e.channel_id)
    }
    return T[e]
  }
  isFavorite(e, t) {
    var n;
    return !u.A.isFullServerPreview(e) && (null == (n = this.getGuildFavorites(e)) ? true : n.includes(t)) === true
  }
  isMessagesFavorite(e) {
    var t, n;
    let r = null != (t = null == (n = this.getChannelOverrides(null)[e]) ? true : n.flags) ? t : 0;
    return o.Lt(r, b.vv.FAVORITED)
  }
  isAddedToMessages(e) {
    var t, n;
    let r = null != (t = null == (n = this.getChannelOverrides(null)[e]) ? true : n.flags) ? t : 0;
    return o.Lt(r, b.vv.OPT_IN_ENABLED)
  }
  getAddedToMessages() {
    var e;
    return null != (e = M[j]) ? e : U
  }
  get accountNotificationSettings() {
    return w
  }
  get useNewNotifications() {
    return C
  }
  getGuildUnreadSetting(e) {
    if (!ep()) return y.e.ALL_MESSAGES;
    let t = this.getGuildFlags(e);
    return o.Lt(t, b.n3.UNREADS_ALL_MESSAGES) ? y.e.ALL_MESSAGES : o.Lt(t, b.n3.UNREADS_ONLY_MENTIONS) ? y.e.ONLY_MENTIONS : y.e.UNSET
  }
  resolveGuildUnreadSetting(e) {
    let t = this.getGuildFlags(e.id);
    return !ep() || o.Lt(t, b.n3.UNREADS_ALL_MESSAGES) ? y.e.ALL_MESSAGES : o.Lt(t, b.n3.UNREADS_ONLY_MENTIONS) ? y.e.ONLY_MENTIONS : e.defaultMessageNotifications === g.orn.ALL_MESSAGES ? y.e.ALL_MESSAGES : y.e.ONLY_MENTIONS
  }
  getChannelRecordUnreadSetting(e) {
    return this.getChannelUnreadSetting(e.guild_id, e.id)
  }
  getChannelUnreadSetting(e, t) {
    let n = this.getChannelIdFlags(e, t);
    return o.Lt(n, b.vv.UNREADS_ALL_MESSAGES) ? y.e.ALL_MESSAGES : o.Lt(n, b.vv.UNREADS_ONLY_MENTIONS) ? y.e.ONLY_MENTIONS : y.e.UNSET
  }
}
O(e_, "displayName", "UserGuildSettingsStore"), O(e_, "persistKey", "collapsedGuilds");
let eh = new e_(Chunk73153.h, {
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