/** Chunk was on web.js **/
/** chunk id: 803224, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk723702 = require("./723702.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = {
    desktopType: Chunk723702.isPlatformEmbedded ? Chunk652215.nRU.ALL : Chunk652215.nRU.NEVER,
    disableAllSounds: false,
    disabledSounds: [],
    ttsType: Chunk652215.aVn.NEVER,
    disableUnreadBadge: false,
    taskbarFlash: true,
    notifyMessagesInSelectedChannel: false
  },
  d = u;

function f(e) {
  let {
    desktopType: t
  } = e;
  d.desktopType = t
}

function p(e) {
  let {
    sounds: t
  } = e;
  d.disabledSounds = t
}

function _() {
  d.disableAllSounds = !d.disableAllSounds
}

function h(e) {
  let {
    ttsType: t
  } = e;
  d.ttsType = t
}

function m(e) {
  let {
    disableUnreadBadge: t
  } = e;
  d.disableUnreadBadge = t
}

function g(e) {
  let {
    taskbarFlash: t
  } = e;
  d.taskbarFlash = t
}

function E(e) {
  let {
    notify: t
  } = e;
  d.notifyMessagesInSelectedChannel = t
}

function y(e) {
  let {
    enabled: t
  } = e;
  t === o.kCE.BLOCKED ? f({
    desktopType: o.nRU.NEVER
  }) : t === o.kCE.ENABLED && f({
    desktopType: o.nRU.ALL
  })
}
class b extends(r = Chunk311907.Ay.DeviceSettingsStore) {
  initialize(e) {
    d = c({}, u, e)
  }
  getUserAgnosticState() {
    return d
  }
  getDesktopType() {
    return d.desktopType
  }
  getTTSType() {
    return d.ttsType
  }
  getDisabledSounds() {
    return d.disabledSounds
  }
  getDisableAllSounds() {
    return d.disableAllSounds
  }
  getDisableUnreadBadge() {
    return d.disableUnreadBadge
  }
  getNotifyMessagesInSelectedChannel() {
    return d.notifyMessagesInSelectedChannel
  }
  get taskbarFlash() {
    return d.taskbarFlash
  }
  isSoundDisabled(e) {
    return d.disableAllSounds || false !== d.disabledSounds.indexOf(e)
  }
}
l(b, "displayName", "NotificationSettingsStore"), l(b, "persistKey", "notifications"), l(b, "migrations", [e => {
  let t = c({}, e);
  return t.disabledSounds = t.disabledSounds || [], t.disableUnreadBadge = t.disableUnreadBadge || false, t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash, t.ttsType = t.ttsType || o.aVn.NEVER, null == t.desktopType && (t.desktopType = s.isPlatformEmbedded ? o.nRU.ALL : o.nRU.NEVER), t
}]);
let O = new b(Chunk73153.h, {
  NOTIFICATIONS_SET_DESKTOP_TYPE: f,
  NOTIFICATIONS_SET_TTS_TYPE: h,
  NOTIFICATIONS_SET_DISABLED_SOUNDS: p,
  NOTIFICATIONS_TOGGLE_ALL_DISABLED: _,
  NOTIFICATIONS_SET_PERMISSION_STATE: y,
  NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: m,
  NOTIFICATIONS_SET_TASKBAR_FLASH: g,
  NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: E
})