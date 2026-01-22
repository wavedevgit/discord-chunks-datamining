/** Chunk was on web.js **/
/** chunk id: 842144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var r, Chunk311907 = require("./311907.js"),
  Chunk873298 = require("./873298.js"),
  Chunk73153 = require("./73153.js"),
  Chunk761821 = require("./761821.js");

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
  null != n && (u[t] = (0, o.Gd)(n)), null != r && (d[t] = r), c = false
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
  } = e, r = (0, o.Gd)(n);
  u[t] = (0, o.RK)(a.nT, u[t], r)
}

function m() {
  u = {}, d = {}, c = false
}
class g extends(r = Chunk311907.Ay.Store) {
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
let E = new g(Chunk73153.h, {
  FAMILY_CENTER_TEEN_SETTINGS_FETCH_START: f,
  FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS: p,
  FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS: _,
  FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS: h,
  LOGOUT: m
})