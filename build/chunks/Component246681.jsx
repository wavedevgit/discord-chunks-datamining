/** Chunk was on 87298 **/
/** chunk id: 246681, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  WrappedUnifiedPaymentModal: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk546042 = require("./546042.jsx"),
  Chunk285871 = require("./285871.js"),
  Chunk736843 = require("./736843.js"),
  Chunk818348 = require("./818348.js");

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

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = e => {
    var t;
    let {
      skuId: n,
      applicationId: i,
      analyticsLocations: l,
      returnRef: s,
      onComplete: p,
      onClose: y,
      renderHeader: O,
      transitionState: b,
      modalOnClose: f,
      paymentModalVersion: C = "v2"
    } = e, {
      paymentModalProps: j
    } = (0, c.jP)(), P = o.useCallback((e, t) => {
      f(), null != y && y(e, t)
    }, [f, y]), h = null != (t = null == j ? true : j.onClose) ? t : P;
    return (0, r.jsx)(a.PaymentModal, d(u({
      transitionState: b,
      returnRef: s,
      applicationId: i,
      onComplete: p,
      hideShadow: true,
      skuId: n,
      renderHeader: O,
      initialPlanId: null,
      analyticsLocations: l,
      paymentModalVersion: C
    }, j), {
      onClose: h
    }))
  },
  O = e => {
    let {
      skuId: t
    } = e;
    return (0, r.jsx)(l.PaymentContextProvider, d(u({}, e), {
      skuIDs: null != t ? [t] : [],
      children: e.children
    }))
  },
  b = e => {
    let {
      loadId: t,
      skuId: n,
      applicationId: o,
      analyticsLocations: l,
      analyticsSourceLocation: a,
      giftContextProps: c,
      flowSpecificOptions: b,
      onComplete: f,
      onClose: C,
      renderModalProps: j,
      checkoutFlow: P,
      checkoutFlowConfiguration: h,
      tenantCheckoutFlowConfig: m,
      renderHeader: v,
      stepConfigs: w
    } = e, {
      purchaseType: S
    } = h, {
      CustomPaymentContextProvider: k = O,
      UnifiedCheckoutContextProvider: I
    } = m, g = null != c ? i.dX : i.Mq;
    return (0, r.jsx)(k, {
      applicationId: o,
      skuId: n,
      activeSubscription: null,
      loadId: t,
      stepConfigs: w,
      purchaseType: S,
      paymentGateway: P === s.C.ORB_CHECKOUT ? p.kM.VIRTUAL_CURRENCY : true,
      isGift: null == c ? true : c.isGift,
      excludeSubscriptionPlansBySKU: true,
      excludeSKUPurchasePreviews: P === s.C.ORB_CHECKOUT,
      children: (0, r.jsx)(g, d(u({}, c), {
        children: (0, r.jsx)(I, {
          applicationId: o,
          skuId: n,
          loadId: t,
          analyticsLocations: l,
          analyticsSourceLocation: a,
          onComplete: f,
          onClose: C,
          renderModalProps: j,
          flowSpecificOptions: b,
          children: (0, r.jsx)(y, {
            applicationId: o,
            skuId: n,
            renderHeader: v,
            analyticsLocations: l,
            onComplete: f,
            onClose: C,
            modalOnClose: j.onClose,
            transitionState: j.transitionState,
            returnRef: j.returnRef
          })
        })
      }))
    })
  }