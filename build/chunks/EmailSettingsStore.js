/** Chunk was on web.js **/
/** chunk id: 878460, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
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
  l = o({}, l, t)
}

function p() {
  l = {}, c = null
}
class _ extends(r = Chunk311907.Ay.Store) {
  getEmailSettings() {
    return {
      categories: l,
      initialized: c
    }
  }
}
s(_, "displayName", "EmailSettingsStore");
let h = new _(Chunk73153.h, {
  CONNECTION_OPEN: p,
  LOGOUT: p,
  EMAIL_SETTINGS_FETCH_SUCCESS: u,
  EMAIL_SETTINGS_UPDATE_SUCCESS: d,
  EMAIL_SETTINGS_UPDATE: f
})