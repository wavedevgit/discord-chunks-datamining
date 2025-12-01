/** Chunk was on web.js **/
/** chunk id: 351780, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var r, Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk524484 = require("./524484.js");

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
      [Chunk524484.oZ.CHAT_INPUT]: true,
      [Chunk524484.oZ.VOICE_USER]: false,
      [Chunk524484.oZ.MENTION]: false
    },
    shakeIntensity: 1,
    confettiEnabled: true,
    confettiEnabledLocations: {
      [Chunk524484.Hn.CHAT_INPUT]: true,
      [Chunk524484.Hn.REACTION]: true,
      [Chunk524484.Hn.MEMBER_USER]: true,
      [Chunk524484.Hn.CALL_TILE]: true
    },
    confettiSize: 16,
    confettiCount: 5,
    warningSeen: false
  },
  f = (0, Chunk392711.cloneDeep)(d);

function p(e) {
  let {
    settings: t
  } = e;
  f = c({}, f, t)
}

function _() {
  u = true
}
class m extends(r = Chunk442837.ZP.DeviceSettingsStore) {
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
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, n = null == module || f.confettiEnabled && f.confettiEnabledLocations[module], r = null == exports || f.screenshakeEnabled && f.screenshakeEnabledLocations[exports];
    return this.settingsVisible && !u && f.enabled && require && r
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
l(m, "displayName", "PoggermodeSettingsStore"), l(m, "persistKey", "PoggermodeSettingsStore");
let h = new m(Chunk570140.Z, {
  POGGERMODE_SETTINGS_UPDATE: p,
  POGGERMODE_TEMPORARILY_DISABLED: _
})