/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => p
}), n(266796);
var r, i = n(442837),
  s = n(570140),
  a = n(430824),
  l = n(981631);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = {
    description: "",
    channels: [],
    enabled: !1
  },
  A = c,
  d = !1,
  u = !1,
  g = c;

function f(e) {
  let {
    welcomeScreen: t,
    guildId: n
  } = e, r = a.Z.getGuild(n);
  if (null != t) {
    var i, s;
    g = A = {
      description: null !== (i = t.description) && void 0 !== i ? i : "",
      channels: null !== (s = t.welcome_channels) && void 0 !== s ? s : [],
      enabled: null == r ? void 0 : r.hasFeature(l.oNc.WELCOME_SCREEN_ENABLED)
    }
  } else g = A = c;
  u = !1
}
class m extends(r = i.ZP.Store) {
  initialize() {
    this.waitFor(a.Z)
  }
  get() {
    return g
  }
  showNotice() {
    return u
  }
  getSettingsProps() {
    return {
      submitting: d,
      hasErrors: u,
      welcomeSettings: g,
      originalWelcomeSettings: A
    }
  }
}
o(m, "displayName", "WelcomeScreenSettingsStore");
let p = new m(s.Z, {
  WELCOME_SCREEN_FETCH_SUCCESS: f,
  WELCOME_SCREEN_UPDATE: f,
  WELCOME_SCREEN_SETTINGS_RESET: function() {
    g = A, u = !1
  },
  WELCOME_SCREEN_SETTINGS_CLEAR: function() {
    g = c, A = c
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
    d = !0
  },
  WELCOME_SCREEN_SUBMIT_SUCCESS: function(e) {
    f(e), d = !1
  },
  WELCOME_SCREEN_SUBMIT_FAILURE: function() {
    u = !0, d = !1
  }
})