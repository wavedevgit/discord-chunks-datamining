/** Chunk was on web.js **/
/** chunk id: 263937, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk581883 = require("./581883.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = {},
  d = {};

function f() {
  var e, t, n, r, i, o;
  let a = Chunk581883.Z.settings;
  return {
    gifAutoPlay: null == (t = Chunk570140.textAndImages) || null == (e = exports.gifAutoPlay) ? true : module.value,
    animateEmoji: null == (r = Chunk570140.textAndImages) || null == (n = r.animateEmoji) ? true : require.value,
    animateStickers: null == (o = Chunk570140.textAndImages) || null == (i = Chunk433517.animateStickers) ? true : Chunk442837.value
  }
}

function p() {
  return d = f(), false
}

function _() {
  u = {}
}

function m() {
  u = {}
}

function h(e) {
  let {
    settings: t
  } = e;
  u = c({}, u, t)
}

function g(e) {
  let {
    settings: t
  } = e;
  for (let e of t) delete u[e]
}

function E() {
  let e = f(),
    t = false;
  for (let n in module) {
    let r = require;
    module[r] !== d[r] && (delete u[r], t = true)
  }
  return exports
}
class b extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    u = null != e ? e : {}, this.syncWith([s.Z], p)
  }
  getState() {
    return u
  }
  getAppliedOverrideReasonKey(e) {
    var t;
    return null == (t = u[e]) ? true : t.reasonKey
  }
  getOverride(e) {
    return u[e]
  }
}
l(b, "displayName", "UserSettingsOverridesStore"), l(b, "persistKey", "UserSettingsOverridesStore"), l(b, "migrations", [() => {
  var e;
  let t = null != (e = Chunk433517.K.get("UserSettingsStoreOverrides")) ? module : {};
  return Chunk433517.K.remove("UserSettingsStoreOverrides"), exports
}]);
let y = new b(Chunk570140.Z, {
  USER_SETTINGS_PROTO_UPDATE: E,
  USER_SETTINGS_OVERRIDE_APPLY: h,
  USER_SETTINGS_OVERRIDE_CLEAR: g,
  LOGOUT: _,
  LOGIN_SUCCESS: m
})