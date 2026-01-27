/** Chunk was on web.js **/
/** chunk id: 440612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HG: () => D,
  My: () => j,
  default: () => U,
  e1: () => P
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk136857 = require("./136857.js"),
  Chunk964486 = require("./964486.js"),
  Chunk459793 = require("./459793.jsx"),
  Chunk674658 = require("./674658.js"),
  Chunk525723 = require("./525723.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk566980 = require("./566980.js"),
  Chunk685944 = require("./685944.jsx"),
  Chunk546042 = require("./546042.jsx"),
  Chunk69494 = require("./69494.jsx"),
  Chunk482132 = require("./482132.jsx"),
  Chunk310829 = require("./310829.js"),
  Chunk855104 = require("./855104.js"),
  Chunk775420 = require("./775420.jsx"),
  Chunk373856 = require("./373856.js"),
  Chunk324384 = require("./324384.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = w(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let R = e => {
    let {
      handleClose: t,
      handleStepChange: n
    } = e, {
      blockedPayments: a
    } = (0, f.P5)();
    return ((0, i.useEffect)(() => {
      a || n(p.pn.REVIEW)
    }, [a, n]), a) ? (0, r.jsx)(l.oO, {
      onClose: t
    }) : null
  },
  P = e => {
    let {
      handleClose: t
    } = e, {
      purchaseState: n
    } = (0, f.P5)();
    (0, i.useEffect)(() => {
      n === _.h.COMPLETED && t()
    }, [n, t])
  },
  D = e => {
    var t;
    let {
      skuId: n,
      onRedeemVirtualCurrency: r,
      orbRedemptionError: a,
      orbProductContext: l,
      analyticsLocations: d,
      analyticsSourceLocation: p
    } = e, {
      selectedSkuId: h,
      setPurchaseState: m
    } = (0, f.P5)(), {
      product: g
    } = (0, c.q)(h), E = (0, b.gN)(), y = (0, i.useRef)(E), {
      emitOrbCheckoutPaymentFlowEvent: O
    } = (0, v.O)({
      skuId: n,
      orbProductContext: l,
      analyticsLocations: d,
      analyticsSourceLocation: p
    });
    (0, s.Ay)(() => {
      O(I.HAw.PAYMENT_FLOW_LOADED)
    }), (0, i.useEffect)(() => {
      null != a && null !== y.current && (O(I.HAw.PAYMENT_FLOW_FAILED, a), y.current = null)
    }, [a, O]);
    let A = (0, i.useCallback)(() => {
        y.current = E, O(I.HAw.PAYMENT_FLOW_COMPLETED), r(() => {
          m(_.h.COMPLETED), O(I.HAw.PAYMENT_FLOW_SUCCEEDED)
        })
      }, [r, m, E, O]),
      T = null != (t = y.current) ? t : E,
      C = null != l ? l.orbPriceAmount : null;
    return {
      isStepLoading: null == h || null == g,
      showCollectiblesDiscountWarning: (0, u.vw)({
        skuId: n,
        isOrbsPurchase: true
      }),
      errorMessage: (0, i.useMemo)(() => null == a ? null : a.code === o.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? S.intl.string(S.t.keFvXM) : a.code === o.tG.ALREADY_PURCHASED ? S.intl.string(S.t.m371Mx) : S.intl.string(S.t.fqJZ11), [a]),
      orbPriceAmount: C,
      orbBalanceToDisplay: T,
      onClickCheckout: A,
      selectedSkuId: h,
      product: g
    }
  },
  L = e => {
    let {
      handleClose: t
    } = e, {
      skuId: n,
      onRedeemVirtualCurrency: i,
      isRedeeming: o,
      orbRedemptionError: s,
      orbProductContext: l,
      analyticsLocations: c,
      analyticsSourceLocation: u,
      rentalDuration: d
    } = (0, O.rp)();
    P({
      handleClose: t
    });
    let {
      orbPriceAmount: f,
      orbBalanceToDisplay: p,
      onClickCheckout: _,
      isStepLoading: h,
      showCollectiblesDiscountWarning: m,
      errorMessage: y
    } = D({
      skuId: n,
      onRedeemVirtualCurrency: i,
      orbRedemptionError: s,
      orbProductContext: l,
      analyticsLocations: c,
      analyticsSourceLocation: u
    });
    return h ? (0, r.jsx)(a.y$y, {
      type: a.y$y.Type.WANDERING_CUBES
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.A, {}), (0, r.jsxs)(E.dZ, {
        children: [(0, r.jsxs)(a.BJc, {
          direction: "vertical",
          gap: 8,
          children: [null != y ? (0, r.jsx)(a.wx6, {
            type: "critical",
            children: y
          }) : null, m && (0, r.jsx)(A.l7, {})]
        }), (0, r.jsx)(A.cL, {
          skuId: n,
          orbPriceAmount: f,
          orbBalance: p,
          rentalDuration: d
        })]
      }), (0, r.jsx)(E.UX, {
        children: (0, r.jsx)(A.I$, {
          orbPriceAmount: f,
          orbBalance: p,
          isSubmitting: o,
          onClickCheckout: _,
          rentalDuration: d
        })
      })]
    })
  },
  x = [{
    key: null,
    renderStep: e => (0, r.jsx)(R, C({}, e))
  }, {
    key: Chunk166532.pn.REVIEW,
    renderStep: e => (0, r.jsx)(L, C({}, e)),
    options: {
      useBreadcrumbLabel: () => S.intl.string(S.t.QBnNHq)
    }
  }],
  M = (e, t, n) => (0, r.jsx)(h.A, {
    isOrbCheckout: true,
    step: n,
    onClose: () => t(false)
  }),
  j = e => {
    let {
      skuId: t,
      analyticsLocations: n,
      analyticsSourceLocation: r,
      orbProductContext: a,
      onClose: o
    } = e, {
      emitOrbCheckoutPaymentFlowEvent: s
    } = (0, v.O)({
      skuId: t,
      orbProductContext: a,
      analyticsLocations: n,
      analyticsSourceLocation: r
    });
    return {
      analyticsDataOverride: (0, i.useMemo)(() => {
        var e, t;
        if (null != a) return {
          price: null != (e = a.orbPriceAmount) ? e : true,
          regular_price: null != (t = a.orbPriceAmount) ? t : true,
          currency: I.Yri.DISCORD_ORB
        }
      }, [a]),
      onClose: (0, i.useCallback)(async e => {
        e || s(I.HAw.PAYMENT_FLOW_CANCELED), await o()
      }, [o, s])
    }
  },
  k = e => {
    let {
      skuId: t,
      analyticsLocations: n = []
    } = e, i = N(e, ["skuId", "analyticsLocations"]), {
      orbProductContext: a,
      analyticsSourceLocation: o
    } = (0, O.rp)(), {
      analyticsDataOverride: s,
      onClose: l
    } = j({
      skuId: t,
      analyticsLocations: n,
      analyticsSourceLocation: o,
      orbProductContext: a,
      onClose: i.onClose
    });
    return (0, r.jsx)(m.PaymentModal, {
      applicationId: (0, y.p)(t),
      transitionState: i.transitionState,
      analyticsDataOverride: s,
      onClose: l,
      hideShadow: true,
      skuId: t,
      renderHeader: M,
      initialPlanId: null,
      analyticsLocations: n
    })
  },
  U = e => {
    let {
      skuId: t,
      loadId: n,
      onCheckoutSuccess: i,
      analyticsSourceLocation: a,
      analyticsLocations: o = [],
      rentalDuration: s
    } = e, l = N(e, ["skuId", "loadId", "onCheckoutSuccess", "analyticsSourceLocation", "analyticsLocations", "rentalDuration"]);
    return (0, r.jsx)(f.PaymentContextProvider, {
      applicationId: (0, y.p)(t),
      activeSubscription: null,
      loadId: n,
      stepConfigs: x,
      purchaseType: I.VVm.ONE_TIME,
      skuIDs: [t],
      paymentGateway: I.kM_.VIRTUAL_CURRENCY,
      excludeSubscriptionPlansBySKU: true,
      excludeSKUPurchasePreviews: true,
      children: (0, r.jsx)(O.Z9, {
        skuId: t,
        loadId: n,
        onCheckoutSuccess: i,
        analyticsLocations: o,
        analyticsSourceLocation: a,
        rentalDuration: s,
        children: (0, r.jsx)(d.Mq, {
          children: (0, r.jsx)(k, C({
            skuId: t,
            analyticsLocations: o
          }, l))
        })
      })
    })
  }