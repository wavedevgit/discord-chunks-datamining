/** Chunk was on web.js **/
/** chunk id: 396375, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk582754 = require("./582754.js"),
  Chunk421380 = require("./421380.js"),
  Chunk736653 = require("./736653.js"),
  Chunk234419 = require("./234419.js"),
  Chunk465794 = require("./465794.jsx"),
  Chunk145310 = require("./145310.js"),
  Chunk275403 = require("./275403.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = _(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let h = e => {
  let {
    textOptions: t,
    subscriptionTier: n,
    hasActivePromotion: d = false,
    isPersistentCTA: _ = false,
    useShorterCTA: h = false,
    showGradient: m,
    confirmationFooter: g,
    color: E
  } = e, y = p(e, ["textOptions", "subscriptionTier", "hasActivePromotion", "isPersistentCTA", "useShorterCTA", "showGradient", "confirmationFooter", "color"]), b = (0, s.Ay)(), {
    buttonText: O,
    marketingSubscriptionTierSkuId: v
  } = (0, c.s)({
    hasActivePromotion: d,
    subscriptionTier: n,
    useShorterCTA: h,
    isPersistentCTA: _
  }), A = (0, o.V)(), I = null == A ? true : A.subscription_trial, S = null != I && v === I.sku_id, T = null != E ? E : (0, i.Mw)(b) ? a.XD.BRAND_INVERTED : a.XD.BRAND;
  return (0, r.jsx)(l.A, f({
    color: T,
    textOptions: f({
      textOverride: O,
      textClassName: S ? u.A : true
    }, t),
    onlyShineOnHover: true,
    subscriptionTier: v,
    showGradient: m,
    confirmationFooter: g
  }, y))
}