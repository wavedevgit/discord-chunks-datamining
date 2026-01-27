/** Chunk was on web.js **/
/** chunk id: 293066, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => h
}), require("./321073.js");
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
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

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = {
  hasAcceptedStoreTerms: false,
  hasAcceptedEulaIds: []
};

function f() {
  r.hasAcceptedStoreTerms = true
}

function p(e) {
  let {
    eulaId: t
  } = e;
  if (r.hasAcceptedEulaIds.includes(t)) returnfalse;
  r.hasAcceptedEulaIds.push(t)
}
class _ extends(i = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    r = null != e ? e : d
  }
  getState() {
    return r
  }
  get hasAcceptedStoreTerms() {
    return r.hasAcceptedStoreTerms
  }
  hasAcceptedEULA(e) {
    return r.hasAcceptedEulaIds.includes(e)
  }
}
s(_, "displayName", "ApplicationStoreUserSettingsStore"), s(_, "persistKey", "ApplicationStoreUserSettingsStore"), s(_, "migrations", [e => null == e.hasAcceptedEulaIds ? u(l({}, e), {
  hasAcceptedEulaIds: []
}) : e]);
let h = new _(Chunk73153.h, {
  APPLICATION_STORE_ACCEPT_STORE_TERMS: f,
  APPLICATION_STORE_ACCEPT_EULA: p
})