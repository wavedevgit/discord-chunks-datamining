/** Chunk was on web.js **/
/** chunk id: 115130, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => p,
  Z: () => I
}), require("./997841.js");
var r, Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk695346 = require("./695346.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
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
}

function d() {
  return {
    lastUsedObject: {},
    useActivityUrlOverride: false,
    activityUrlOverride: null,
    filter: ""
  }
}
let f = d();
var p = function(e) {
  return e.INITIALIZED = "INITIALIZED", e.LOADING = "LOADING", e.LOADED = "LOADED", e.ERROR = "ERROR", e
}({});
let _ = "INITIALIZED",
  m = [];

function h() {
  f = d(), _ = "INITIALIZED", m = []
}

function g() {
  f.useActivityUrlOverride = !f.useActivityUrlOverride
}

function E(e) {
  let {
    activityUrlOverride: t
  } = e;
  f.activityUrlOverride = t
}

function b(e) {
  let {
    applicationId: t,
    timestamp: n
  } = e;
  if (null == m.find(e => e.id === t)) returnfalse;
  f.lastUsedObject[t] = n
}

function y(e) {
  let {
    applications: t
  } = e;
  _ = "LOADED", m = t.filter(e => null != e.flags && (0, i.yE)(e.flags, l.udG.EMBEDDED))
}

function O(e) {
  let {
    type: t
  } = e;
  _ = "ERROR"
}

function v(e) {
  let {
    filter: t
  } = e;
  f.filter = t
}
class S extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    f = u({}, d(), null != e ? e : {})
  }
  getState() {
    return f
  }
  getIsEnabled() {
    return Chunk695346.Sb.getSetting() && m.length > 0
  }
  getLastUsedObject() {
    return f.lastUsedObject
  }
  getUseActivityUrlOverride() {
    return this.getIsEnabled() && f.useActivityUrlOverride
  }
  getActivityUrlOverride() {
    return this.getIsEnabled() ? f.activityUrlOverride : null
  }
  getFetchState() {
    return _
  }
  getFilter() {
    return this.getIsEnabled() ? f.filter : ""
  }
  getDeveloperShelfItems() {
    return this.getIsEnabled() ? m : []
  }
  inDevModeForApplication(e) {
    return this.getIsEnabled() && null != m.find(t => t.id === e)
  }
}
c(S, "displayName", "DeveloperActivityShelfStore"), c(S, "persistKey", "DeveloperActivityShelfStore"), c(S, "migrations", [e => (delete e.isEnabled, u({}, e))]);
let I = new S(Chunk570140.Z, {
  LOGOUT: h,
  DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: g,
  DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: E,
  DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: b,
  DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
    _ = "LOADING"
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: y,
  DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: O,
  DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: v,
  USER_SETTINGS_PROTO_UPDATE() {}
})