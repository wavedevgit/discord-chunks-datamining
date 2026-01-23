/** Chunk was on web.js **/
/** chunk id: 816662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AC: () => A,
  Hb: () => C,
  Ol: () => P,
  e4: () => N,
  hp: () => T,
  jA: () => w,
  zk: () => I
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  Chunk665260 = require("./665260.js"),
  Chunk873298 = require("./873298.js"),
  Chunk73153 = require("./73153.js"),
  Chunk832712 = require("./832712.js"),
  Chunk58149 = require("./58149.js"),
  Chunk529942 = require("./529942.js"),
  Chunk164956 = require("./164956.js"),
  Chunk931260 = require("./931260.js"),
  Chunk594061 = require("./594061.js"),
  Chunk734057 = require("./734057.js"),
  Chunk543465 = require("./543465.js"),
  Chunk954571 = require("./954571.js"),
  Chunk477427 = require("./477427.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
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

function A(e, t, n, r) {
  if (null == e) return;
  if (u.A.isFullServerPreview(e)) return void(0, c.$u)(e, n ? [t] : [], n ? [] : [t]);
  let a = _.Ay.getChannelIdFlags(e, t);
  n || (a = (0, i.lA)(a, E.vv.FAVORITED, false));
  let o = (0, m.ME)(e, t),
    f = {
      flags: (0, i.lA)(a, E.vv.OPT_IN_ENABLED, n)
    },
    y = {
      channel_overrides: {
        [t]: f
      }
    };
  d.A.saveUserGuildSettingsBulk({
    [e]: y
  }), s.h.dispatch({
    type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
    guildId: e,
    channelId: t,
    settings: f
  }), (0, m.ct)({
    guildId: e,
    channelId: t,
    change: f,
    previous: o,
    label: m.G_.optedIn(n),
    location: r
  }), R(e), h.default.track(g.HAw.CHANNEL_LIST_UPDATED, v(b({}, (0, l.H$)(e), (0, l.dI)(p.A.getChannel(t))), {
    action_type: n ? "add" : "remove",
    location: r
  }))
}

function I(e, t, n, r) {
  if (null == e) return;
  if (u.A.isFullServerPreview(e)) {
    (0, c.$u)(e, n ? [t] : [], n ? [] : [t]), (0, c.Z$)(e, {
      optInEnabled: true
    });
    return
  }
  let a = _.Ay.getChannelIdFlags(e, t);
  n || (a = (0, i.lA)(a, E.vv.FAVORITED, false));
  let o = (0, m.ME)(e, t),
    f = {
      flags: (0, i.lA)(a, E.vv.OPT_IN_ENABLED, n)
    };
  if (!_.Ay.isOptInEnabled(e)) {
    let n = (0, i.lA)(_.Ay.getGuildFlags(e), E.n3.OPT_IN_CHANNELS_ON, true);
    d.A.saveUserGuildSettingsBulk({
      [e]: {
        channel_overrides: {
          [t]: f
        },
        flags: n
      }
    })
  }
  s.h.dispatch({
    type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
    guildId: e,
    channelId: t,
    settings: f
  }), (0, m.ct)({
    guildId: e,
    channelId: t,
    change: f,
    previous: o,
    label: m.G_.optedIn(n),
    location: r
  }), R(e), h.default.track(g.HAw.CHANNEL_LIST_UPDATED, v(b({}, (0, l.H$)(e), (0, l.dI)(p.A.getChannel(t))), {
    action_type: n ? "add" : "remove",
    location: r
  }))
}
async function S(e, t) {
  if (null == e || u.A.isFullServerPreview(e)) return;
  let n = {
    channel_overrides: t
  };
  await d.A.saveUserGuildSettingsBulk({
    [e]: n
  }), s.h.dispatch({
    type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES",
    guildId: e,
    updates: t
  })
}
let T = (0, Chunk735438.debounce)((e, t) => S(e, t), 1e3);

function C(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 ? arguments[3] : true;
  if (null == e) return;
  if (u.A.isFullServerPreview(e)) {
    (0, c.$u)(e, t, []), n && (0, c.Z$)(e, {
      optInEnabled: true
    });
    return
  }
  let a = {};
  if (t.forEach(t => {
      let n = _.Ay.getChannelIdFlags(e, t);
      a[t] = {
        flags: (0, i.lA)(n, E.vv.OPT_IN_ENABLED, true)
      }
    }), n) {
    let t = (0, i.lA)(_.Ay.getGuildFlags(e), E.n3.OPT_IN_CHANNELS_ON, true);
    o.A.updateGuildAndChannelNotificationSettings(e, {
      flags: t,
      channel_overrides: a
    }, m.fd.OptedIn), h.default.track(g.HAw.CHANNEL_LIST_UPDATED, v(b({}, (0, l.H$)(e)), {
      action_type: "add_many_and_enable_guild",
      location: r
    }))
  } else o.A.updateChannelOverrideSettingsBulk(e, a, m.fd.OptedIn), h.default.track(g.HAw.CHANNEL_LIST_UPDATED, v(b({}, (0, l.H$)(e)), {
    action_type: "add_many",
    location: r
  }))
}

function N(e, t, n) {
  if (u.A.isFullServerPreview(e)) return void(0, c.Z$)(e, {
    optInEnabled: t
  });
  let r = _.Ay.getGuildFlags(e);
  o.A.updateGuildNotificationSettings(e, {
    flags: (0, i.lA)(r, E.n3.OPT_IN_CHANNELS_ON, t)
  }, m.G_.optedIn(t)), h.default.track(g.HAw.CHANNEL_LIST_UPDATED, v(b({}, (0, l.H$)(e)), {
    action_type: t ? "guild_enabled" : "guild_disabled",
    location: n
  }))
}

function w(e, t, n, r) {
  if (null == e || u.A.isFullServerPreview(e)) return;
  let a = _.Ay.getChannelIdFlags(e, t);
  !(0, i.Lt)(a, E.vv.OPT_IN_ENABLED) && n && (a = (0, i.lA)(a, E.vv.OPT_IN_ENABLED, true)), o.A.updateChannelOverrideSettings(e, t, {
    flags: (0, i.lA)(a, E.vv.FAVORITED, n)
  }, m.G_.favorited(n)), h.default.track(g.HAw.CHANNEL_LIST_UPDATED, v(b({}, (0, l.H$)(e)), {
    action_type: n ? "favorited" : "unfavorited",
    location: r
  }))
}

function R(e) {
  (0, f.TG)(e, e => (!(0, i.Lt)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_CLEARED) || !!(0, i.Lt)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_SHOWN)) && (e.guildOnboardingProgress = (0, i.UI)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_CLEARED), e.guildOnboardingProgress = (0, i.lA)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_SHOWN, false), true), f.Sb.INFREQUENT_USER_ACTION)
}

function P(e, t) {
  s.h.dispatch({
    type: "DISMISS_FAVORITE_SUGGESTION",
    guildId: e,
    channelId: t
  })
}