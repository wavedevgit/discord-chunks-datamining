/** Chunk was on 9172 **/
/** chunk id: 325906, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  WrappedUnifiedPaymentModal: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk791785 = require("./791785.jsx"),
  Chunk467368 = require("./467368.js");
let l = e => {
    let {
      skuId: n,
      applicationId: t,
      transitionState: i,
      analyticsLocations: o,
      renderHeader: l
    } = e, {
      paymentModalProps: s
    } = (0, c.Li)(), d = null != s && null != s.onClose ? s.onClose : () => {};
    return (0, a.jsx)(r.PaymentModal, function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), a.forEach(function(n) {
          var a;
          a = t[n], n in e ? Object.defineProperty(e, n, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[n] = a
        })
      }
      return e
    }({
      applicationId: t,
      transitionState: i,
      onClose: d,
      hideShadow: true,
      skuId: n,
      renderHeader: l,
      initialPlanId: null,
      analyticsLocations: o
    }, s))
  },
  s = e => {
    let {
      loadId: n,
      skuId: t,
      applicationId: r,
      analyticsLocations: c,
      analyticsSourceLocation: s,
      onCheckoutSuccess: d,
      renderModalProps: u,
      renderHeader: p,
      UnifiedCheckoutContextProvider: y,
      purchaseType: b,
      stepConfigs: f,
      flowSpecificOptions: h
    } = e;
    return (0, a.jsx)(o.PaymentContextProvider, {
      applicationId: r,
      activeSubscription: null,
      loadId: n,
      stepConfigs: f,
      purchaseType: b,
      skuIDs: [t],
      excludeSubscriptionPlansBySKU: true,
      excludeSKUPurchasePreviews: true,
      children: (0, a.jsx)(i.b6, {
        children: (0, a.jsx)(y, {
          skuId: t,
          loadId: n,
          analyticsLocations: c,
          analyticsSourceLocation: s,
          onCheckoutSuccess: d,
          renderModalProps: u,
          flowSpecificOptions: h,
          children: (0, a.jsx)(l, {
            transitionState: u.transitionState,
            applicationId: r,
            skuId: t,
            renderHeader: p,
            analyticsLocations: c
          })
        })
      })
    })
  }