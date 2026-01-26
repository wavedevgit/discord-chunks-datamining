/** Chunk was on 39048 **/
/** chunk id: 861410, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./228524.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js");

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
  g = false,
  m = c;

function p(e) {
  let {
    welcomeScreen: t,
    guildId: n
  } = e, r = s.A.getGuild(n);
  if (null != t) {
    var i, l;
    m = d = {
      description: null != (i = t.description) ? i : "",
      channels: null != (l = t.welcome_channels) ? l : [],
      enabled: null == r ? true : r.features.has(a.GuildFeatures.WELCOME_SCREEN_ENABLED)
    }
  } else m = d = c;
  g = false
}
class f extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(s.A)
  }
  get() {
    return m
  }
  showNotice() {
    return g
  }
  getSettingsProps() {
    return {
      submitting: u,
      hasErrors: g,
      welcomeSettings: m,
      originalWelcomeSettings: d
    }
  }
}
o(f, "displayName", "WelcomeScreenSettingsStore");
let h = new f(Chunk73153.h, {
  WELCOME_SCREEN_FETCH_SUCCESS: p,
  WELCOME_SCREEN_UPDATE: p,
  WELCOME_SCREEN_SETTINGS_RESET: function() {
    m = d, g = false
  },
  WELCOME_SCREEN_SETTINGS_CLEAR: function() {
    m = c, d = c
  },
  WELCOME_SCREEN_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    m = function(e) {
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
    }({}, m, t)
  },
  WELCOME_SCREEN_SUBMIT: function() {
    u = true
  },
  WELCOME_SCREEN_SUBMIT_SUCCESS: function(e) {
    p(e), u = false
  },
  WELCOME_SCREEN_SUBMIT_FAILURE: function() {
    g = true, u = false
  }
})