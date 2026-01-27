/** Chunk was on web.js **/
/** chunk id: 204413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => f
});
var Chunk145310 = require("./145310.js"),
  Chunk938973 = require("./938973.js"),
  Chunk788868 = require("./788868.js");

function o(e, t, n) {
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
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = d(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let f = e => {
  let {
    subscriptionTier: t = null,
    hasActivePromotion: n = false,
    useShorterCTA: o = false,
    isPersistentCTA: l = false,
    buttonTextOverride: d
  } = e, f = u(e, ["subscriptionTier", "hasActivePromotion", "useShorterCTA", "isPersistentCTA", "buttonTextOverride"]), p = {
    subscriptionTier: t,
    hasActivePromotion: n,
    useShorterCTA: o,
    isPersistentCTA: l
  }, {
    buttonText: _,
    marketingSubscriptionTierSkuId: h
  } = (0, r.s)(p), {
    subscribeButtonProps: m
  } = (0, i.B)(c(s({}, f), {
    subscriptionTier: h,
    buttonTextOverride: null != d ? d : _
  }));
  return {
    subscribeButtonProps: m,
    subscriptionTier: h === a.pe.NONE ? null : h
  }
}