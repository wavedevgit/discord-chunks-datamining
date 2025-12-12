/** Chunk was on web.js **/
/** chunk id: 151662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}
let l = {},
  c = null;

function u(e) {
  let {
    settings: t
  } = e;
  l = t.categories, c = t.initialized
}

function d(e) {
  let {
    settings: t
  } = e;
  l = t.categories
}

function f(e) {
  let {
    updates: t
  } = e;
  l = s({}, l, t)
}

function p() {
  l = {}, c = null
}
class _ extends(r = Chunk442837.ZP.Store) {
  getEmailSettings() {
    return {
      categories: l,
      initialized: c
    }
  }
}
a(_, "displayName", "EmailSettingsStore");
let m = new _(Chunk570140.Z, {
  CONNECTION_OPEN: p,
  LOGOUT: p,
  EMAIL_SETTINGS_FETCH_SUCCESS: u,
  EMAIL_SETTINGS_UPDATE_SUCCESS: d,
  EMAIL_SETTINGS_UPDATE: f
})