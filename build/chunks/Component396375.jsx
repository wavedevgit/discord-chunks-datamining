/** Chunk was on 77641 **/
/** chunk id: 396375, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let m = e => {
  let {
    textOptions: t,
    subscriptionTier: n,
    hasActivePromotion: m = false,
    isPersistentCTA: _ = false,
    useShorterCTA: E = false,
    showGradient: p,
    confirmationFooter: x,
    color: N
  } = e, T = function(e, t) {
    if (null == e) return {};
    var n, r, a, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (a = 0, n = Reflect.ownKeys(e); a < n.length; a++) r = n[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, a = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
        return a
      }(e, t), Object.getOwnPropertySymbols)
      for (a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) r = n[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["textOptions", "subscriptionTier", "hasActivePromotion", "isPersistentCTA", "useShorterCTA", "showGradient", "confirmationFooter", "color"]), g = (0, l.Ay)(), {
    buttonText: b,
    marketingSubscriptionTierSkuId: v
  } = (0, c.s)({
    hasActivePromotion: m,
    subscriptionTier: n,
    useShorterCTA: E,
    isPersistentCTA: _
  }), j = (0, s.V)(), O = null == j ? true : j.subscription_trial, f = null != O && v === O.sku_id, h = null != N ? N : (0, a.Mw)(g) ? i.XD.BRAND_INVERTED : i.XD.BRAND;
  return (0, r.jsx)(o.A, u({
    color: h,
    textOptions: u({
      textOverride: b,
      textClassName: f ? d.A : true
    }, t),
    onlyShineOnHover: true,
    subscriptionTier: v,
    showGradient: p,
    confirmationFooter: x
  }, T))
}