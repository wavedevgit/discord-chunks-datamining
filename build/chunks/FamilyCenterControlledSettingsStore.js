/** Chunk was on web.js **/
/** chunk id: 473007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var r, Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk570140 = require("./570140.js"),
  Chunk48481 = require("./48481.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = false,
  u = {},
  d = {};

function f() {
  c = true
}

function p(e) {
  let {
    userId: t,
    settings: n,
    consents: r
  } = e;
  null != n && (u[t] = (0, s.ac)(n)), null != r && (d[t] = r), c = false
}

function _(e) {
  let {
    userId: t,
    consents: n
  } = e;
  d[t] = n
}

function h(e) {
  let {
    userId: t,
    settings: n
  } = e, r = (0, s.ac)(n);
  u[t] = (0, s.re)(a.o8, u[t], r)
}

function m() {
  u = {}, d = {}, c = false
}
class g extends(r = Chunk442837.ZP.Store) {
  getSettings(e) {
    return u[e]
  }
  getControlledSettings(e) {
    return u[e]
  }
  hasSettingsForUser(e) {
    return null != u[e]
  }
  getConsents(e) {
    return d[e]
  }
  hasConsented(e, t) {
    if (null == e) returnfalse;
    let n = d[e];
    return null != n && null != n[t] && n[t].consented
  }
  get isLoading() {
    return c
  }
}
l(g, "displayName", "FamilyCenterControlledSettingsStore");
let E = new g(Chunk570140.Z, {
  FAMILY_CENTER_TEEN_SETTINGS_FETCH_START: f,
  FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS: p,
  FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS: _,
  FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS: h,
  LOGOUT: m
})