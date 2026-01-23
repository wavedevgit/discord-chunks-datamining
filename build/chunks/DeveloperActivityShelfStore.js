/** Chunk was on web.js **/
/** chunk id: 10716, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => p,
  A: () => I
}), require("./938796.js");
var r, Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk253932 = require("./253932.js"),
  Chunk652215 = require("./652215.js");

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
  h = [];

function m() {
  f = d(), _ = "INITIALIZED", h = []
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

function y(e) {
  let {
    applicationId: t,
    timestamp: n
  } = e;
  if (null == h.find(e => e.id === t)) returnfalse;
  f.lastUsedObject[t] = n
}

function b(e) {
  let {
    applications: t
  } = e;
  _ = "LOADED", h = t.filter(e => null != e.flags && (0, i.Lt)(e.flags, l.gfo.EMBEDDED))
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
class A extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    f = u({}, d(), null != e ? e : {})
  }
  getState() {
    return f
  }
  getIsEnabled() {
    return o.Q_.getSetting() && h.length > 0
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
    return this.getIsEnabled() ? h : []
  }
  inDevModeForApplication(e) {
    return this.getIsEnabled() && null != h.find(t => t.id === e)
  }
}
c(A, "displayName", "DeveloperActivityShelfStore"), c(A, "persistKey", "DeveloperActivityShelfStore"), c(A, "migrations", [e => (delete e.isEnabled, u({}, e))]);
let I = new A(Chunk73153.h, {
  LOGOUT: m,
  DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: g,
  DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: E,
  DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: y,
  DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
    _ = "LOADING"
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: b,
  DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: O,
  DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: v,
  USER_SETTINGS_PROTO_UPDATE() {}
})