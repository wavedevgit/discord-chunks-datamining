/** Chunk was on 47841 **/
/** chunk id: 861410, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./228524.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = {
    description: "",
    channels: [],
    enabled: false
  },
  d = o,
  u = false,
  f = false,
  g = o;

function b(e) {
  let {
    welcomeScreen: t,
    guildId: n
  } = e, r = s.A.getGuild(n);
  if (null != t) {
    var i, l;
    g = d = {
      description: null != (i = t.description) ? i : "",
      channels: null != (l = t.welcome_channels) ? l : [],
      enabled: null == r ? true : r.features.has(a.GuildFeatures.WELCOME_SCREEN_ENABLED)
    }
  } else g = d = o;
  f = false
}
class m extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(s.A)
  }
  get() {
    return g
  }
  showNotice() {
    return f
  }
  getSettingsProps() {
    return {
      submitting: u,
      hasErrors: f,
      welcomeSettings: g,
      originalWelcomeSettings: d
    }
  }
}
c(m, "displayName", "WelcomeScreenSettingsStore");
let p = new m(Chunk73153.h, {
  WELCOME_SCREEN_FETCH_SUCCESS: b,
  WELCOME_SCREEN_UPDATE: b,
  WELCOME_SCREEN_SETTINGS_RESET: function() {
    g = d, f = false
  },
  WELCOME_SCREEN_SETTINGS_CLEAR: function() {
    g = o, d = o
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
          c(e, t, n[t])
        })
      }
      return e
    }({}, g, t)
  },
  WELCOME_SCREEN_SUBMIT: function() {
    u = true
  },
  WELCOME_SCREEN_SUBMIT_SUCCESS: function(e) {
    b(e), u = false
  },
  WELCOME_SCREEN_SUBMIT_FAILURE: function() {
    f = true, u = false
  }
})