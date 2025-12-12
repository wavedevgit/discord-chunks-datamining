/** Chunk was on web.js **/
/** chunk id: 624864, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./467055.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk237997 = require("./237997.js"),
  Chunk823379 = require("./823379.js"),
  Chunk486016 = require("./486016.js"),
  Chunk987650 = require("./987650.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _() {
  return g()
}

function m() {
  return {
    gameSettings: {},
    notificationSettings: new Set
  }
}
let h = m();

function g() {
  h = m()
}

function E(e) {
  let {
    applicationId: t,
    enabled: n
  } = e;
  return h.gameSettings[t] = {
    limitedInteractionOverride: n
  }, true
}

function b(e) {
  let {
    setting: t,
    disabled: n
  } = e;
  return n ? h.notificationSettings.add(t) : h.notificationSettings.delete(t), h.notificationSettings = new Set(h.notificationSettings), true
}

function y(e) {
  switch (e) {
    case c.n0.TextChat:
      return l.i.TEXT_CHAT;
    case c.n0.WelcomeNudge:
      return l.i.WELCOME_GENERAL;
    case c.n0.GoLiveNudge:
    case c.n0.GoLiveNonVoiceNudge:
      return l.i.GO_LIVE_NUDGE;
    case c.n0.NowPlayingNotification:
      return l.i.NOW_PLAYING;
    case c.n0.StreamWatchNudge:
      return l.i.FRIEND_STREAM_WATCH_NUDGE;
    case c.n0.ClipsReminderNotification:
    case c.n0.ClipsNotification:
      return l.i.CLIPS;
    case c.n0.RequestToStream:
      return l.i.REQUEST_TO_STREAM;
    case c.n0.ActivityUserJoin:
    case c.n0.ActivityInvite:
    case c.n0.SendGameInvitesNotification:
      return l.i.GAME_ACTIVITY;
    case c.n0.IncomingCall:
    case c.n0.NewsNudge:
    case c.n0.KeybindIndicatorsNotification:
    case c.n0.OverlayCrashed:
      return null;
    default:
      (0, s.vE)(e)
  }
}

function O(e) {
  let {
    overlayNotificationSettings: t
  } = e;
  h.notificationSettings = new Set(t.notificationSettings);
  let n = Object.fromEntries(Object.entries(t.gameSettings).filter(e => {
    let [t, n] = e;
    return null != n.limitedInteractionOverride
  }).map(e => {
    var t;
    let [n, r] = e;
    return [n, {
      limitedInteractionOverride: null != (t = r.limitedInteractionOverride) ? t : true
    }]
  }));
  h.gameSettings = d({}, h.gameSettings, n)
}
class v extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    let n = m();
    h = p(d({}, n, null != e ? e : {}), {
      notificationSettings: new Set(null != (t = null == e ? true : e.notificationSettings) ? t : n.notificationSettings)
    }), this.waitFor(a.default)
  }
  getInitialOverlayState() {
    return {
      gameSettings: Object.fromEntries(Object.entries(h.gameSettings).map(e => {
        var t;
        let [n, r] = e;
        return [n, {
          limitedInteractionOverride: null != (t = r.limitedInteractionOverride) ? t : null
        }]
      })),
      notificationSettings: Array.from(h.notificationSettings)
    }
  }
  getState() {
    return h
  }
  isLimitedInteractionOverrideEnabled(e) {
    var t, n;
    return null != e && null != (n = null == (t = h.gameSettings[e]) ? true : t.limitedInteractionOverride) && n
  }
  isNotificationDisabledBySetting(e) {
    return h.notificationSettings.has(e)
  }
  isNotificationDisabled(e) {
    let t = y(e);
    return null != t && h.notificationSettings.has(t)
  }
  getDisabledNotifications() {
    return h.notificationSettings
  }
  getDisabledSettingByNotificationType(e) {
    return y(e)
  }
}
u(v, "displayName", "OverlaySettingsStore"), u(v, "persistKey", "OverlaySettingsStore");
let S = new v(Chunk570140.Z, {
  LOGOUT: _,
  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: E,
  OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: b,
  OVERLAY_INITIALIZE: O
})