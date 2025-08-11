/** Chunk was on web.js **/
/** chunk id: 624864, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk237997 = require("./237997.js"),
  Chunk823379 = require("./823379.js"),
  Chunk486016 = require("./486016.js"),
  Chunk981631 = require("./981631.js");

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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p() {
  return g()
}

function h() {
  return {
    gameSettings: {},
    notificationSettings: new Set
  }
}
let m = h();

function g() {
  m = h()
}

function E(e) {
  let {
    applicationId: t,
    enabled: n
  } = e;
  return m.gameSettings[t] = {
    limitedInteractionOverride: n
  }, true
}

function b(e) {
  let {
    setting: t,
    disabled: n
  } = e;
  return n ? m.notificationSettings.add(t) : m.notificationSettings.delete(t), m.notificationSettings = new Set(m.notificationSettings), true
}
class y extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    let n = h();
    m = _(d({}, n, null != e ? e : {}), {
      notificationSettings: new Set(null != (t = null == e ? true : e.notificationSettings) ? t : n.notificationSettings)
    }), this.waitFor(a.default)
  }
  getState() {
    return m
  }
  isLimitedInteractionOverrideEnabled(e) {
    var t, n;
    return null != e && null != (n = null == (t = m.gameSettings[e]) ? true : t.limitedInteractionOverride) && n
  }
  isNotificationDisabled(e) {
    return m.notificationSettings.has(e)
  }
  getDisabledNotifications() {
    return m.notificationSettings
  }
}
u(y, "displayName", "OverlaySettingsStore"), u(y, "persistKey", "OverlaySettingsStore"), u(y, "migrations", [e => {
  var t;
  let n = a.default.getTextChatNotificationMode() === c.Ypu.DISABLED,
    r = false === a.default.showInviteNotification;
  return _(d({}, e), {
    notificationSettings: new Set([n ? l.OverlayNotificationDisabledSetting.TEXT_CHAT : true, r ? l.OverlayNotificationDisabledSetting.GAME_ACTIVITY : true, ...Array.from(null != (t = e.notificationSettings) ? t : [])].filter(s.lm))
  })
}]);
let O = new y(Chunk570140.Z, {
  LOGOUT: p,
  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: E,
  OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: b
})