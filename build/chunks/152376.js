/** Chunk was on web.js **/
/** chunk id: 152376, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C1: () => A,
  Mo: () => C,
  QG: () => N,
  XQ: () => I,
  _U: () => D,
  dM: () => R,
  k$: () => T
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  Chunk524437 = require("./524437.js"),
  Chunk570140 = require("./570140.js"),
  Chunk87051 = require("./87051.js"),
  Chunk367907 = require("./367907.js"),
  Chunk962086 = require("./962086.js"),
  Chunk160404 = require("./160404.js"),
  Chunk149071 = require("./149071.js"),
  Chunk675478 = require("./675478.js"),
  Chunk592125 = require("./592125.js"),
  Chunk9156 = require("./9156.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
  Chunk621600 = require("./621600.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e, t, n, r) {
  if (null == e) return;
  if (c.Z.isFullServerPreview(e)) return void(0, l.zS)(e, n ? [t] : [], n ? [] : [t]);
  let i = _.ZP.getChannelIdFlags(e, t);
  n || (i = (0, h.mB)(i, E.ic.FAVORITED, false));
  let o = (0, m.I)(e, t),
    d = {
      flags: (0, h.mB)(i, E.ic.OPT_IN_ENABLED, n)
    },
    b = {
      channel_overrides: {
        [t]: d
      }
    };
  u.Z.saveUserGuildSettingsBulk({
    [e]: b
  }), a.Z.dispatch({
    type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
    guildId: e,
    channelId: t,
    settings: d
  }), (0, m.jz)({
    guildId: e,
    channelId: t,
    change: d,
    previous: o,
    label: m.UE.optedIn(n),
    location: r
  }), P(e), p.default.track(g.rMx.CHANNEL_LIST_UPDATED, v(y({}, (0, s.hH)(e), (0, s.v_)(f.Z.getChannel(t))), {
    action_type: n ? "add" : "remove",
    location: r
  }))
}

function T(e, t, n, r) {
  if (null == e) return;
  if (c.Z.isFullServerPreview(e)) {
    (0, l.zS)(e, n ? [t] : [], n ? [] : [t]), (0, l.aq)(e, {
      optInEnabled: true
    });
    return
  }
  let i = _.ZP.getChannelIdFlags(e, t);
  n || (i = (0, h.mB)(i, E.ic.FAVORITED, false));
  let o = (0, m.I)(e, t),
    d = {
      flags: (0, h.mB)(i, E.ic.OPT_IN_ENABLED, n)
    };
  if (!_.ZP.isOptInEnabled(e)) {
    let n = (0, h.mB)(_.ZP.getGuildFlags(e), E.vc.OPT_IN_CHANNELS_ON, true);
    u.Z.saveUserGuildSettingsBulk({
      [e]: {
        channel_overrides: {
          [t]: d
        },
        flags: n
      }
    })
  }
  a.Z.dispatch({
    type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
    guildId: e,
    channelId: t,
    settings: d
  }), (0, m.jz)({
    guildId: e,
    channelId: t,
    change: d,
    previous: o,
    label: m.UE.optedIn(n),
    location: r
  }), P(e), p.default.track(g.rMx.CHANNEL_LIST_UPDATED, v(y({}, (0, s.hH)(e), (0, s.v_)(f.Z.getChannel(t))), {
    action_type: n ? "add" : "remove",
    location: r
  }))
}
async function S(e, t) {
  if (null == e || c.Z.isFullServerPreview(e)) return;
  let n = {
    channel_overrides: t
  };
  await u.Z.saveUserGuildSettingsBulk({
    [e]: n
  }), a.Z.dispatch({
    type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES",
    guildId: e,
    updates: t
  })
}
let A = (0, Chunk392711.debounce)((e, t) => S(e, t), 1e3);

function C(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 ? arguments[3] : true;
  if (null == e) return;
  if (c.Z.isFullServerPreview(e)) {
    (0, l.zS)(e, t, []), n && (0, l.aq)(e, {
      optInEnabled: true
    });
    return
  }
  let i = {};
  if (t.forEach(t => {
      let n = _.ZP.getChannelIdFlags(e, t);
      i[t] = {
        flags: (0, h.mB)(n, E.ic.OPT_IN_ENABLED, true)
      }
    }), n) {
    let t = (0, h.mB)(_.ZP.getGuildFlags(e), E.vc.OPT_IN_CHANNELS_ON, true);
    o.Z.updateGuildAndChannelNotificationSettings(e, {
      flags: t,
      channel_overrides: i
    }, m.ZB.OptedIn), p.default.track(g.rMx.CHANNEL_LIST_UPDATED, v(y({}, (0, s.hH)(e)), {
      action_type: "add_many_and_enable_guild",
      location: r
    }))
  } else o.Z.updateChannelOverrideSettingsBulk(e, i, m.ZB.OptedIn), p.default.track(g.rMx.CHANNEL_LIST_UPDATED, v(y({}, (0, s.hH)(e)), {
    action_type: "add_many",
    location: r
  }))
}

function N(e, t, n) {
  if (c.Z.isFullServerPreview(e)) return void(0, l.aq)(e, {
    optInEnabled: t
  });
  let r = _.ZP.getGuildFlags(e);
  o.Z.updateGuildNotificationSettings(e, {
    flags: (0, h.mB)(r, E.vc.OPT_IN_CHANNELS_ON, t)
  }, m.UE.optedIn(t)), p.default.track(g.rMx.CHANNEL_LIST_UPDATED, v(y({}, (0, s.hH)(e)), {
    action_type: t ? "guild_enabled" : "guild_disabled",
    location: n
  }))
}

function R(e, t, n, r) {
  if (null == e || c.Z.isFullServerPreview(e)) return;
  let i = _.ZP.getChannelIdFlags(e, t);
  !(0, h.yE)(i, E.ic.OPT_IN_ENABLED) && n && (i = (0, h.mB)(i, E.ic.OPT_IN_ENABLED, true)), o.Z.updateChannelOverrideSettings(e, t, {
    flags: (0, h.mB)(i, E.ic.FAVORITED, n)
  }, m.UE.favorited(n)), p.default.track(g.rMx.CHANNEL_LIST_UPDATED, v(y({}, (0, s.hH)(e)), {
    action_type: n ? "favorited" : "unfavorited",
    location: r
  }))
}

function P(e) {
  (0, d.PS)(e, e => (!(0, h.yE)(e.guildOnboardingProgress, i.nI.GUILD_NOTICE_CLEARED) || !!(0, h.yE)(e.guildOnboardingProgress, i.nI.GUILD_NOTICE_SHOWN)) && (e.guildOnboardingProgress = (0, h.pj)(e.guildOnboardingProgress, i.nI.GUILD_NOTICE_CLEARED), e.guildOnboardingProgress = (0, h.mB)(e.guildOnboardingProgress, i.nI.GUILD_NOTICE_SHOWN, false), true), d.fy.INFREQUENT_USER_ACTION)
}

function D(e, t) {
  a.Z.dispatch({
    type: "DISMISS_FAVORITE_SUGGESTION",
    guildId: e,
    channelId: t
  })
}