/** Chunk was on 86736 **/
/** chunk id: 905753, original params: e,t,n (module,exports,require) **/
let i, r, l;
require.d(exports, {
  Z: () => h
}), require("./467055.js"), require("./388685.js");
var a, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk581364 = require("./581364.js"),
  Chunk399860 = require("./399860.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = {},
  m = {},
  b = false;

function g() {
  i = true, p = {}, m = {}, r = true, l = true, b = false
}
class f extends(a = Chunk442837.ZP.Store) {
  getApplicationPermissions() {
    return p
  }
  getCommands() {
    return m
  }
  getCommand(e) {
    return null == m ? true : m[e]
  }
  getEditedApplication() {
    return r
  }
  getEditedCommand() {
    return l
  }
  isUnavailable() {
    return b
  }
  getApplicationId() {
    return i
  }
}
u(f, "displayName", "IntegrationPermissionStore");
let h = new f(Chunk570140.Z, {
  LOGOUT: g,
  INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function(e) {
    let {
      applicationId: t
    } = e;
    if (t !== i) returnfalse;
    b = true
  },
  INTEGRATION_PERMISSION_SETTINGS_CLEAR: g,
  INTEGRATION_PERMISSION_SETTINGS_INIT: function(e) {
    let {
      applicationId: t
    } = e;
    g(), i = t
  },
  INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function(e) {
    var t, n;
    let {
      applicationId: r,
      commandId: l,
      permissions: a
    } = e;
    if (r !== i) returnfalse;
    if (l === i) {
      p = (0, d.tk)(a);
      return
    }
    let o = m[l];
    if (null == o) returnfalse;
    m[l] = (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          u(e, t, n[t])
        })
      }
      return e
    }({}, o), n = n = {
      permissions: (0, d.tk)(a)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)
  },
  INTEGRATION_PERMISSION_SETTINGS_EDIT: function(e) {
    let {
      applicationId: t,
      commandId: n,
      permissions: a
    } = e;
    if (t !== i) returnfalse;
    n === i ? r = a : l = {
      commandId: n,
      permissions: a
    }
  },
  INTEGRATION_PERMISSION_SETTINGS_RESET: function(e) {
    let {
      commandId: t
    } = e;
    null == t ? r = true : l = true
  },
  INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function(e) {
    let {
      applicationId: t
    } = e;
    if (t !== i) returnfalse;
    b = true
  },
  INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function(e) {
    let {
      applicationId: t,
      commands: n,
      permissions: r
    } = e;
    if (t !== i) returnfalse;
    let l = Object.fromEntries(r.map(e => [e.id, e.permissions])),
      a = {};
    for (let e of n)
      if (e.application_id === i) {
        let t = (0, c.Z8)({
            rootCommand: e,
            command: e,
            applicationId: e.application_id
          }),
          n = l[e.id];
        null != n && (t.permissions = (0, d.tk)(n)), a[e.id] = t
      } m = a
  }
})