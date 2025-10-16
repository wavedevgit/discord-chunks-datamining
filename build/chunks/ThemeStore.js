/** Chunk was on web.js **/
/** chunk id: 210887, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
});
var r, Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk607070 = require("./607070.js"),
  Chunk541049 = require("./541049.js"),
  Chunk765287 = require("./765287.js"),
  Chunk49214 = require("./49214.js"),
  Chunk238514 = require("./238514.js"),
  Chunk740492 = require("./740492.js"),
  Chunk581883 = require("./581883.js"),
  Chunk874893 = require("./874893.js"),
  Chunk981631 = require("./981631.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = 0,
  O = Chunk874893.K2,
  v = (0, Chunk541049.Z)(),
  I = O[v],
  T = null;

function S() {
  return __OVERLAY__ || null == T ? (0, Chunk765287.Z)(v, O, I) : T
}

function A() {
  let e = S();
  return module !== I && (I = module, (0, Chunk49214.Z)(I), true)
}
class C extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    (null == e ? true : e.theme) != null && (y = 1, I = e.theme, (0, u.Z)(I), null != e.preferences && (O = e.preferences), (0, a.wj)(I) && (O[p.zd.DARK] = I)), this.waitFor(f.ZP, d.Z, _.Z, s.Z)
  }
  getState() {
    return {
      theme: this.theme,
      preferences: O,
      status: y
    }
  }
  get theme() {
    return I
  }
  get systemTheme() {
    return v
  }
  themePreferenceForSystemTheme(e) {
    return O[e]
  }
}

function N() {
  return 0 === y && (O = b(g({}, O), {
    [Chunk874893.zd.DARK]: Chunk981631.BRd.DARKER
  }), y = 1), A()
}

function R() {
  return (0, Chunk780384.ap)(S())
}

function P(e) {
  return T = null, !e.isSwitchingAccount && I !== h.BRd.DARK && (I = h.BRd.DARK, (0, u.Z)(I), A())
}

function w(e) {
  let {
    systemTheme: t
  } = e;
  return v = t, A()
}

function D(e) {
  return O = g({}, O, e.preferences), A()
}

function L(e) {
  return T = e.theme, A()
}

function x() {
  return T = null, A()
}

function M() {
  return A()
}
m(C, "displayName", "ThemeStore"), m(C, "persistKey", "ThemeStore"), m(C, "migrations", [e => {
  let t = e.theme;
  return "amoled" === t && (t = "midnight"), b(g({}, e), {
    theme: t
  })
}, e => e]);
let k = new C(Chunk570140.Z, {
  CACHE_LOADED: A,
  CONNECTION_OPEN: N,
  LOGOUT: P,
  OVERLAY_INITIALIZE: A,
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: A,
  UNSYNCED_USER_SETTINGS_UPDATE: A,
  USER_SETTINGS_PROTO_UPDATE: A,
  RESET_PREVIEW_CLIENT_THEME: A,
  SYSTEM_THEME_CHANGE: w,
  ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: R,
  UPDATE_THEME_PREFERENCES: D,
  SET_THEME_OVERRIDE: L,
  CLEAR_THEME_OVERRIDE: x,
  REFRESH_THEME: M
})