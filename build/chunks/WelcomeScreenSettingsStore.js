/** Chunk was on 70830 **/
/** chunk id: 575258, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./953529.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {
    description: "",
    channels: [],
    enabled: false
  },
  d = c,
  u = false,
  m = false,
  g = c;

function p(e) {
  let {
    welcomeScreen: t,
    guildId: n
  } = e, r = a.Z.getGuild(n);
  if (null != t) {
    var i, l;
    g = d = {
      description: null != (i = t.description) ? i : "",
      channels: null != (l = t.welcome_channels) ? l : [],
      enabled: null == r ? true : r.features.has(s.oNc.WELCOME_SCREEN_ENABLED)
    }
  } else g = d = c;
  m = false
}
class f extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z)
  }
  get() {
    return g
  }
  showNotice() {
    return m
  }
  getSettingsProps() {
    return {
      submitting: u,
      hasErrors: m,
      welcomeSettings: g,
      originalWelcomeSettings: d
    }
  }
}
o(f, "displayName", "WelcomeScreenSettingsStore");
let h = new f(Chunk570140.Z, {
  WELCOME_SCREEN_FETCH_SUCCESS: p,
  WELCOME_SCREEN_UPDATE: p,
  WELCOME_SCREEN_SETTINGS_RESET: function() {
    g = d, m = false
  },
  WELCOME_SCREEN_SETTINGS_CLEAR: function() {
    g = c, d = c
  },
  WELCOME_SCREEN_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    g = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          o(e, t, n[t])
        })
      }
      return e
    }({}, g, t)
  },
  WELCOME_SCREEN_SUBMIT: function() {
    u = true
  },
  WELCOME_SCREEN_SUBMIT_SUCCESS: function(e) {
    p(e), u = false
  },
  WELCOME_SCREEN_SUBMIT_FAILURE: function() {
    m = true, u = false
  }
})