/** Chunk was on 384 **/
/** chunk id: 575258, original params: e,t,n (module,exports,require) **/
"use strict";
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
  u = c,
  d = false,
  g = false,
  m = c;

function p(e) {
  let {
    welcomeScreen: t,
    guildId: n
  } = e, r = s.Z.getGuild(n);
  if (null != t) {
    var i, l;
    m = u = {
      description: null != (i = t.description) ? i : "",
      channels: null != (l = t.welcome_channels) ? l : [],
      enabled: null == r ? true : r.features.has(a.GuildFeatures.WELCOME_SCREEN_ENABLED)
    }
  } else m = u = c;
  g = false
}
class f extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z)
  }
  get() {
    return m
  }
  showNotice() {
    return g
  }
  getSettingsProps() {
    return {
      submitting: d,
      hasErrors: g,
      welcomeSettings: m,
      originalWelcomeSettings: u
    }
  }
}
o(f, "displayName", "WelcomeScreenSettingsStore");
let h = new f(Chunk570140.Z, {
  WELCOME_SCREEN_FETCH_SUCCESS: p,
  WELCOME_SCREEN_UPDATE: p,
  WELCOME_SCREEN_SETTINGS_RESET: function() {
    m = u, g = false
  },
  WELCOME_SCREEN_SETTINGS_CLEAR: function() {
    m = c, u = c
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
    d = true
  },
  WELCOME_SCREEN_SUBMIT_SUCCESS: function(e) {
    p(e), d = false
  },
  WELCOME_SCREEN_SUBMIT_FAILURE: function() {
    g = true, d = false
  }
})