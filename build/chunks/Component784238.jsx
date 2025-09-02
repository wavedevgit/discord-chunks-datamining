/** Chunk was on web.js **/
/** chunk id: 784238, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk410030 = require("./410030.js"),
  Chunk639119 = require("./639119.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk70466 = require("./70466.js"),
  Chunk124481 = require("./124481.js");

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

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let h = e => {
  var {
    textOptions: t,
    subscriptionTier: n,
    hasActivePromotion: d = false,
    isPersistentCTA: p = false,
    useShorterCTA: h = false,
    showGradient: m,
    confirmationFooter: g,
    paymentModalBanner: E,
    color: b
  } = e, y = _(e, ["textOptions", "subscriptionTier", "hasActivePromotion", "isPersistentCTA", "useShorterCTA", "showGradient", "confirmationFooter", "paymentModalBanner", "color"]);
  let O = (0, o.ZP)(),
    {
      buttonText: v,
      marketingSubscriptionTierSkuId: I
    } = (0, c.G)({
      hasActivePromotion: d,
      subscriptionTier: n,
      useShorterCTA: h,
      isPersistentCTA: p
    }),
    S = (0, s.N)(),
    T = null == S ? true : S.subscription_trial,
    A = null != T && I === T.sku_id,
    C = null != b ? b : (0, i.wj)(O) ? a.Tt.BRAND_INVERTED : a.Tt.BRAND;
  return (0, r.jsx)(l.Z, f({
    color: C,
    textOptions: f({
      textOverride: v,
      textClassName: A ? u.freeTrialText : true
    }, t),
    onlyShineOnHover: true,
    subscriptionTier: I,
    showGradient: m,
    confirmationFooter: g,
    paymentModalBanner: E
  }, y))
}