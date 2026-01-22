/** Chunk was on 47841 **/
/** chunk id: 352821, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./228524.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk591552 = require("./591552.js"),
  Chunk555337 = require("./555337.js"),
  Chunk539916 = require("./539916.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = [],
  u = false,
  f = [];

function g() {
  let e = a.A.getGuildId();
  if (null == e) {
    d = [], f = [], u = false;
    return
  }
  d = [...s.A.getConnections(e)], f = [], u = false
}
class b extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(s.A, a.A)
  }
  getEditedConnections() {
    return d
  }
  getErrors() {
    return f
  }
  isSubmitting() {
    return u
  }
  hasChanges() {
    let e = a.A.getGuildId();
    if (null == e) returnfalse;
    let t = s.A.getConnections(e);
    return d.length !== t.length || d.some((e, n) => {
      let r = t[n];
      return null == r || e.connection_type !== r.connection_type || e.application_id !== r.application_id || e.provider_id !== r.provider_id || e.description !== r.description
    })
  }
  showNotice() {
    return this.hasChanges()
  }
  hasValidationErrors() {
    return f.length > 0
  }
}
o(b, "displayName", "GuildSettingsOnboardingConnectionsStore");
let m = new b(Chunk73153.h, {
  GUILD_SETTINGS_INIT: g,
  GUILD_SETTINGS_SET_SECTION: g,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: g,
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_ADD: function(e) {
    let {
      connection: t
    } = e;
    if (d.length >= c.pA) {
      f = ["Maximum ".concat(c.pA, " connections allowed")];
      return
    }
    d = [...d, t], f = (0, c.n4)(d)
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REMOVE: function(e) {
    let {
      index: t
    } = e;
    d = d.filter((e, n) => n !== t), f = (0, c.n4)(d)
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_UPDATE: function(e) {
    let {
      index: t,
      updates: n
    } = e;
    d = d.map((e, r) => r === t ? function(e) {
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
    }({}, e, n) : e), f = (0, c.n4)(d)
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REORDER: function(e) {
    let {
      connections: t
    } = e;
    d = [...t], f = (0, c.n4)(d)
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_RESET: function() {
    let e = a.A.getGuildId();
    if (null == e) {
      d = [], f = [];
      return
    }
    d = [...s.A.getConnections(e)], f = []
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SUBMIT: function() {
    u = true, f = (0, c.n4)(d)
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: function(e) {
    let {
      connections: t
    } = e;
    u = false, f = [], d = [...t]
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_FAILED: function(e) {
    let {
      errors: t
    } = e;
    u = false, f = t
  }
})