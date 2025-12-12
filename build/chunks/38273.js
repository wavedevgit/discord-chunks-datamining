/** Chunk was on web.js **/
/** chunk id: 38273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => d
});
var Chunk70466 = require("./70466.js"),
  Chunk864218 = require("./864218.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
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

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = u(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let d = e => {
  var {
    subscriptionTier: t = null,
    hasActivePromotion: n = false,
    useShorterCTA: o = false,
    isPersistentCTA: s = false
  } = e, u = c(e, ["subscriptionTier", "hasActivePromotion", "useShorterCTA", "isPersistentCTA"]);
  let d = {
      subscriptionTier: t,
      hasActivePromotion: n,
      useShorterCTA: o,
      isPersistentCTA: s
    },
    {
      buttonText: f,
      marketingSubscriptionTierSkuId: p
    } = (0, r.G)(d),
    {
      subscribeButtonProps: _
    } = (0, i.F)(l(a({}, u), {
      subscriptionTier: p,
      buttonTextOverride: f
    }));
  return {
    subscribeButtonProps: _,
    subscriptionTier: p
  }
}