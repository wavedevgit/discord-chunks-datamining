/** Chunk was on web.js **/
/** chunk id: 397438, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk617617 = require("./617617.js");

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
  var e, t, n, r, i, a;
  let s = o.A.settings;
  return {
    gifAutoPlay: null == (t = s.textAndImages) || null == (e = t.gifAutoPlay) ? true : e.value,
    animateEmoji: null == (r = s.textAndImages) || null == (n = r.animateEmoji) ? true : n.value,
    animateStickers: null == (a = s.textAndImages) || null == (i = a.animateStickers) ? true : i.value
  }
}

function p() {
  return d = f(), false
}

function _() {
  u = {}
}

function h() {
  u = {}
}

function m(e) {
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
  for (let n in e) {
    let r = n;
    e[r] !== d[r] && (delete u[r], t = true)
  }
  return t
}
class y extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    u = null != e ? e : {}, this.syncWith([o.A], p)
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
l(y, "displayName", "UserSettingsOverridesStore"), l(y, "persistKey", "UserSettingsOverridesStore"), l(y, "migrations", [() => {
  var e;
  let t = null != (e = a.w.get("UserSettingsStoreOverrides")) ? e : {};
  return a.w.remove("UserSettingsStoreOverrides"), t
}]);
let b = new y(Chunk73153.h, {
  USER_SETTINGS_PROTO_UPDATE: E,
  USER_SETTINGS_OVERRIDE_APPLY: m,
  USER_SETTINGS_OVERRIDE_CLEAR: g,
  LOGOUT: _,
  LOGIN_SUCCESS: h
})