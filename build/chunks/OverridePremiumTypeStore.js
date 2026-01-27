/** Chunk was on web.js **/
/** chunk id: 683760, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk572009 = require("./572009.js"),
  Chunk788868 = require("./788868.js");

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

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = "OverridePremiumTypeStore",
  p = {
    premiumTypeOverride: Chunk788868.$I,
    premiumTypeActual: Chunk788868.$I,
    createdAtOverride: Chunk788868.lk
  };

function _(e) {
  let {
    premiumType: t
  } = e;
  p.premiumTypeOverride = t
}

function h(e) {
  let {
    createdAt: t
  } = e;
  p.createdAtOverride = t
}

function m(e) {
  let {
    user: t
  } = e;
  p.premiumTypeActual = (0, o.nq)(t.premium_type)
}
class g extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (null != e) {
      p.premiumTypeActual = null == e ? true : e.premiumTypeActual, p.premiumTypeOverride = null == e ? true : e.premiumTypeOverride, null != e.createdAtOverride ? p.createdAtOverride = new Date(e.createdAtOverride) : p.createdAtOverride = s.lk;
      return
    }
    p.premiumTypeOverride = s.$I, p.createdAtOverride = s.lk
  }
  getPremiumTypeOverride() {
    return p.premiumTypeOverride
  }
  getPremiumTypeActual() {
    return p.premiumTypeActual
  }
  getCreatedAtOverride() {
    return p.createdAtOverride
  }
  getState() {
    return p
  }
  get premiumType() {
    return p.premiumTypeOverride
  }
}
l(g, "displayName", f), l(g, "persistKey", f), l(g, "migrations", [e => {
  if ((null == e ? true : e.createdAtOverride) == null) return d(c({}, e), {
    createdAtOverride: s.lk
  })
}]);
let E = new g(Chunk73153.h, {
  SET_PREMIUM_TYPE_OVERRIDE: _,
  SET_CREATED_AT_OVERRIDE: h,
  CURRENT_USER_UPDATE: m,
  CONNECTION_OPEN: m
})