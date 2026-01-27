/** Chunk was on web.js **/
/** chunk id: 351906, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk954571 = require("./954571.js"),
  Chunk961350 = require("./961350.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  o.default.track(l.HAw.STREAMER_MODE_TOGGLE, {
    enabled: e,
    automatic: t
  })
}
let f = {
    enabled: false,
    autoToggle: true,
    hideInstantInvites: true,
    hidePersonalInformation: true,
    disableSounds: true,
    disableNotifications: true,
    enableContentProtection: false
  },
  p = {},
  _ = u({}, f);

function h(e) {
  let t = p[e];
  return null == t && (t = p[e] = u({}, f)), t
}

function m(e) {
  e.isSwitchingAccount || (p = {})
}

function g(e) {
  e.userId in p && delete p[e.userId]
}

function E(e) {
  let t = u({}, _);
  return _[e.key] = e.value, "enabled" === e.key ? d(e.value, false) : o.default.track(l.HAw.UPDATE_STREAMER_MODE_SETTINGS, {
    enabled: _.enabled,
    automatic: _.autoToggle,
    disable_notifications: _.disableNotifications,
    disable_sounds: _.disableSounds,
    hide_instant_invites: _.hideInstantInvites,
    hide_personal_info: _.hidePersonalInformation,
    enable_content_protection: _.enableContentProtection,
    old_enabled: t.enabled,
    old_automatic: t.autoToggle,
    old_disable_notifications: t.disableNotifications,
    old_disable_sounds: t.disableSounds,
    old_hide_instant_invites: t.hideInstantInvites,
    old_hide_personal_info: t.hidePersonalInformation,
    old_enable_content_protection: t.enableContentProtection
  }), true
}

function y(e) {
  if (!_.autoToggle) returnfalse;
  {
    let t = e.count > 0;
    return _.enabled = t, d(t, true), true
  }
}
class b extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    Object.assign(p, e), this.syncWith([s.default], () => {
      let e = s.default.getId();
      _ = null != e ? h(e) : u({}, f)
    })
  }
  getState() {
    return p
  }
  getSettings() {
    return _
  }
  get enabled() {
    return _.enabled
  }
  get autoToggle() {
    return _.autoToggle
  }
  get hideInstantInvites() {
    return this.enabled && _.hideInstantInvites
  }
  get hidePersonalInformation() {
    return this.enabled && _.hidePersonalInformation
  }
  get disableSounds() {
    return this.enabled && _.disableSounds
  }
  get disableNotifications() {
    return this.enabled && _.disableNotifications
  }
  get enableContentProtection() {
    return this.enabled && _.enableContentProtection
  }
}
c(b, "displayName", "StreamerModeStore"), c(b, "persistKey", "StreamerModeStore"), c(b, "migrations", [e => {
  let t = s.default.getId();
  return null == e || null == t ? {} : {
    [t]: u({}, e)
  }
}]);
let O = new b(Chunk73153.h, {
  LOGOUT: m,
  MULTI_ACCOUNT_REMOVE_ACCOUNT: g,
  STREAMER_MODE_UPDATE: E,
  RUNNING_STREAMER_TOOLS_CHANGE: y
})