/** Chunk was on web.js **/
/** chunk id: 3137, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var r, Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk31408 = require("./31408.js");

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
let u = false,
  d = {
    settingsVisible: false,
    enabled: false,
    combosEnabled: true,
    combosRequiredCount: 5,
    comboSoundsEnabled: true,
    screenshakeEnabled: true,
    screenshakeEnabledLocations: {
      [Chunk31408.uD.CHAT_INPUT]: true,
      [Chunk31408.uD.VOICE_USER]: false,
      [Chunk31408.uD.MENTION]: false
    },
    shakeIntensity: 1,
    confettiEnabled: true,
    confettiEnabledLocations: {
      [Chunk31408.k.CHAT_INPUT]: true,
      [Chunk31408.k.REACTION]: true,
      [Chunk31408.k.MEMBER_USER]: true,
      [Chunk31408.k.CALL_TILE]: true
    },
    confettiSize: 16,
    confettiCount: 5,
    warningSeen: false
  },
  f = (0, Chunk735438.cloneDeep)(d);

function p(e) {
  let {
    settings: t
  } = e;
  f = c({}, f, t)
}

function _() {
  u = true
}
class h extends(r = Chunk311907.Ay.DeviceSettingsStore) {
  initialize(e) {
    f = c({}, f, e)
  }
  getUserAgnosticState() {
    return f
  }
  get settingsVisible() {
    return f.settingsVisible
  }
  isEnabled() {
    let {
      confettiLocation: e,
      shakeLocation: t
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, n = null == e || f.confettiEnabled && f.confettiEnabledLocations[e], r = null == t || f.screenshakeEnabled && f.screenshakeEnabledLocations[t];
    return this.settingsVisible && !u && f.enabled && n && r
  }
  get shakeIntensity() {
    return this.isEnabled() ? f.shakeIntensity : 0
  }
  get combosRequiredCount() {
    return this.isEnabled() ? f.combosRequiredCount : 0
  }
  get screenshakeEnabled() {
    return f.screenshakeEnabled
  }
  get screenshakeEnabledLocations() {
    return f.screenshakeEnabledLocations
  }
  get combosEnabled() {
    return f.combosEnabled
  }
  get comboSoundsEnabled() {
    return f.comboSoundsEnabled
  }
}
l(h, "displayName", "PoggermodeSettingsStore"), l(h, "persistKey", "PoggermodeSettingsStore");
let m = new h(Chunk73153.h, {
  POGGERMODE_SETTINGS_UPDATE: p,
  POGGERMODE_TEMPORARILY_DISABLED: _
})