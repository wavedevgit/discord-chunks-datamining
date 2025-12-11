/** Chunk was on 9536 **/
/** chunk id: 926958, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./953529.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45966 = require("./45966.js"),
  Chunk999382 = require("./999382.js"),
  Chunk290511 = require("./290511.js");

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
  let e = Chunk999382.Z.getGuildId();
  if (null == module) {
    d = [], g = [], u = false;
    return
  }
  d = [...Chunk45966.Z.getConnections(module)], g = [], u = false
}
class f extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk45966.Z, Chunk999382.Z)
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
    let e = Chunk999382.Z.getGuildId();
    if (null == module) returnfalse;
    let t = Chunk45966.Z.getConnections(module);
    return d.length !== exports.length || d.some((e, n) => {
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
c(f, "displayName", "GuildSettingsOnboardingConnectionsStore");
let p = new f(Chunk570140.Z, {
  GUILD_SETTINGS_INIT: m,
  GUILD_SETTINGS_SET_SECTION: m,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: m,
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_ADD: function(e) {
    let {
      connection: t
    } = e;
    if (d.length >= o.yx) {
      g = ["Maximum ".concat(o.yx, " connections allowed")];
      return
    }
    d = [...d, t], g = (0, o.rZ)(d)
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REMOVE: function(e) {
    let {
      index: t
    } = e;
    d = d.filter((e, n) => n !== t), g = (0, o.rZ)(d)
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
    }({}, e, n) : e), g = (0, o.rZ)(d)
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REORDER: function(e) {
    let {
      connections: t
    } = e;
    d = [...t], g = (0, o.rZ)(d)
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_RESET: function() {
    let e = Chunk999382.Z.getGuildId();
    if (null == module) {
      d = [], g = [];
      return
    }
    d = [...Chunk45966.Z.getConnections(module)], g = []
  },
  GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SUBMIT: function() {
    u = true, g = (0, Chunk290511.rZ)(d)
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