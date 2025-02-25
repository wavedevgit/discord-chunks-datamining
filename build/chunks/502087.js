/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => E
});
var r, i = n(442837),
  o = n(570140),
  a = n(168232),
  s = n(474936);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
  _ = {
    premiumTypeOverride: s.F_,
    premiumTypeActual: s.F_,
    createdAtOverride: s.Zh
  };

function p(e) {
  let {
    premiumType: t
  } = e;
  _.premiumTypeOverride = t
}

function h(e) {
  let {
    createdAt: t
  } = e;
  _.createdAtOverride = t
}

function g(e) {
  let {
    user: t
  } = e;
  _.premiumTypeActual = (0, a.G)(t.premium_type)
}
class m extends(r = i.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      _.premiumTypeActual = null == e ? void 0 : e.premiumTypeActual, _.premiumTypeOverride = null == e ? void 0 : e.premiumTypeOverride, null != e.createdAtOverride ? _.createdAtOverride = new Date(e.createdAtOverride) : _.createdAtOverride = s.Zh;
      return
    }
    _.premiumTypeOverride = s.F_, _.createdAtOverride = s.Zh
  }
  getPremiumTypeOverride() {
    return _.premiumTypeOverride
  }
  getPremiumTypeActual() {
    return _.premiumTypeActual
  }
  getCreatedAtOverride() {
    return _.createdAtOverride
  }
  getState() {
    return _
  }
  get premiumType() {
    return _.premiumTypeOverride
  }
}
l(m, "displayName", f), l(m, "persistKey", f), l(m, "migrations", [e => {
  if ((null == e ? void 0 : e.createdAtOverride) == null) return d(c({}, e), {
    createdAtOverride: s.Zh
  })
}]);
let E = new m(o.Z, {
  SET_PREMIUM_TYPE_OVERRIDE: p,
  SET_CREATED_AT_OVERRIDE: h,
  CURRENT_USER_UPDATE: g,
  CONNECTION_OPEN: g
})