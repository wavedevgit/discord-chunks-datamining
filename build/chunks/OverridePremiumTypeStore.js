/** Chunk was on web.js **/
/** chunk id: 502087, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk168232 = require("./168232.js"),
  Chunk474936 = require("./474936.js");

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
    premiumTypeOverride: Chunk474936.F_,
    premiumTypeActual: Chunk474936.F_,
    createdAtOverride: Chunk474936.Zh
  };

function _(e) {
  let {
    premiumType: t
  } = e;
  p.premiumTypeOverride = t
}

function m(e) {
  let {
    createdAt: t
  } = e;
  p.createdAtOverride = t
}

function h(e) {
  let {
    user: t
  } = e;
  p.premiumTypeActual = (0, a.G)(t.premium_type)
}
class g extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      p.premiumTypeActual = null == e ? true : e.premiumTypeActual, p.premiumTypeOverride = null == e ? true : e.premiumTypeOverride, null != e.createdAtOverride ? p.createdAtOverride = new Date(e.createdAtOverride) : p.createdAtOverride = s.Zh;
      return
    }
    p.premiumTypeOverride = s.F_, p.createdAtOverride = s.Zh
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
    createdAtOverride: s.Zh
  })
}]);
let E = new g(Chunk570140.Z, {
  SET_PREMIUM_TYPE_OVERRIDE: _,
  SET_CREATED_AT_OVERRIDE: m,
  CURRENT_USER_UPDATE: h,
  CONNECTION_OPEN: h
})