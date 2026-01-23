/** Chunk was on 47841 **/
/** chunk id: 352821, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js"), require("./228524.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk591552 = require("./591552.js"),
  Chunk555337 = require("./555337.js"),
  Chunk539916 = require("./539916.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = [],
  u = false,
  g = [];

function m() {
  let e = a.A.getGuildId();
  if (null == e) {
    d = [], g = [], u = false;
    return
  }
  d = [...s.A.getConnections(e)], g = [], u = false
}
class p extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(s.A, a.A)
  }
  getEditedConnections() {
    return d
  }
  getErrors() {
    return g
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
    return g.length > 0
  }
}
c(p, "displayName", "GuildSettingsOnboardingConnectionsStore");
let f = new p(Chunk73153.h, {
  GUILD_SETTINGS_INIT: m,
  GUILD_SETTINGS_SET_SECTION: m,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: m,
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_ADD: function(e) {
    let {
      connection: t
    } = e;
    if (d.length >= o.pA) {
      g = ["Maximum ".concat(o.pA, " connections allowed")];
      return
    }
    d = [...d, t], g = (0, o.n4)(d)
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REMOVE: function(e) {
    let {
      index: t
    } = e;
    d = d.filter((e, n) => n !== t), g = (0, o.n4)(d)
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
          c(e, t, n[t])
        })
      }
      return e
    }({}, e, n) : e), g = (0, o.n4)(d)
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REORDER: function(e) {
    let {
      connections: t
    } = e;
    d = [...t], g = (0, o.n4)(d)
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_RESET: function() {
    let e = a.A.getGuildId();
    if (null == e) {
      d = [], g = [];
      return
    }
    d = [...s.A.getConnections(e)], g = []
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SUBMIT: function() {
    u = true, g = (0, o.n4)(d)
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: function(e) {
    let {
      connections: t
    } = e;
    u = false, g = [], d = [...t]
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_FAILED: function(e) {
    let {
      errors: t
    } = e;
    u = false, g = t
  }
})