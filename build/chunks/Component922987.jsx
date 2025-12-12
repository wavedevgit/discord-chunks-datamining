/** Chunk was on web.js **/
/** chunk id: 922987, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HR: () => M,
  PR: () => w,
  default: () => U,
  sF: () => D
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk128069 = require("./128069.js"),
  Chunk493773 = require("./493773.js"),
  Chunk89057 = require("./89057.jsx"),
  Chunk583434 = require("./583434.js"),
  Chunk445794 = require("./445794.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk45572 = require("./45572.js"),
  Chunk126982 = require("./126982.jsx"),
  Chunk791785 = require("./791785.jsx"),
  Chunk51499 = require("./51499.jsx"),
  Chunk614277 = require("./614277.jsx"),
  Chunk152521 = require("./152521.js"),
  Chunk932563 = require("./932563.js"),
  Chunk336079 = require("./336079.jsx"),
  Chunk887505 = require("./887505.js"),
  Chunk748714 = require("./748714.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = P(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let R = e => {
    let {
      handleClose: t,
      handleStepChange: n
    } = e, {
      blockedPayments: o
    } = (0, f.JL)();
    return ((0, i.useEffect)(() => {
      o || n(p.h8.REVIEW)
    }, [o, n]), o) ? (0, r.jsx)(l.Vq, {
      onClose: t
    }) : null
  },
  w = e => {
    let {
      handleClose: t
    } = e, {
      purchaseState: n
    } = (0, f.JL)();
    (0, i.useEffect)(() => {
      n === _.A.COMPLETED && t()
    }, [n, t])
  },
  D = e => {
    var t;
    let {
      skuId: n,
      onRedeemVirtualCurrency: r,
      orbRedemptionError: o,
      orbProductContext: l,
      analyticsLocations: d,
      analyticsSourceLocation: p
    } = e, {
      selectedSkuId: m,
      setPurchaseState: h
    } = (0, f.JL)(), {
      product: g
    } = (0, c.T)(m), E = (0, y.cR)(), b = (0, i.useRef)(E), {
      emitOrbCheckoutPaymentFlowEvent: O
    } = (0, v.S)({
      skuId: n,
      orbProductContext: l,
      analyticsLocations: d,
      analyticsSourceLocation: p
    });
    (0, s.ZP)(() => {
      O(I.rMx.PAYMENT_FLOW_LOADED)
    }), (0, i.useEffect)(() => {
      null != o && null !== b.current && (O(I.rMx.PAYMENT_FLOW_FAILED, o), b.current = null)
    }, [o, O]);
    let S = (0, i.useCallback)(() => {
        b.current = E, O(I.rMx.PAYMENT_FLOW_COMPLETED), r(() => {
          h(_.A.COMPLETED), O(I.rMx.PAYMENT_FLOW_SUCCEEDED)
        })
      }, [r, h, E, O]),
      C = null != (t = b.current) ? t : E,
      A = null != l ? l.orbPriceAmount : null;
    return {
      isStepLoading: null == m || null == g,
      showCollectiblesDiscountWarning: (0, u.N3)({
        skuId: n,
        isOrbsPurchase: true
      }),
      errorMessage: (0, i.useMemo)(() => null == o ? null : o.code === a.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE ? T.intl.string(T.t.keFvXM) : o.code === a.SM.ALREADY_PURCHASED ? T.intl.string(T.t.m371Mx) : T.intl.string(T.t.fqJZ11), [o]),
      orbPriceAmount: A,
      orbBalanceToDisplay: C,
      onClickCheckout: S,
      selectedSkuId: m,
      product: g
    }
  },
  x = e => {
    let {
      handleClose: t
    } = e, {
      skuId: n,
      onRedeemVirtualCurrency: i,
      isRedeeming: a,
      orbRedemptionError: s,
      orbProductContext: l,
      analyticsLocations: c,
      analyticsSourceLocation: u,
      rentalDuration: d
    } = (0, O.CH)();
    w({
      handleClose: t
    });
    let {
      orbPriceAmount: f,
      orbBalanceToDisplay: p,
      onClickCheckout: _,
      isStepLoading: m,
      showCollectiblesDiscountWarning: h,
      errorMessage: b
    } = D({
      skuId: n,
      onRedeemVirtualCurrency: i,
      orbRedemptionError: s,
      orbProductContext: l,
      analyticsLocations: c,
      analyticsSourceLocation: u
    });
    return m ? (0, r.jsx)(o.$jN, {
      type: o.$jN.Type.WANDERING_CUBES
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.Z, {}), (0, r.jsxs)(E.C3, {
        children: [(0, r.jsxs)(o.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [null != b ? (0, r.jsx)(o.M14, {
            type: "critical",
            children: b
          }) : null, h && (0, r.jsx)(S.f4, {})]
        }), (0, r.jsx)(S.A3, {
          skuId: n,
          orbPriceAmount: f,
          orbBalance: p,
          rentalDuration: d
        })]
      }), (0, r.jsx)(E.O3, {
        children: (0, r.jsx)(S.f9, {
          orbPriceAmount: f,
          orbBalance: p,
          isSubmitting: a,
          onClickCheckout: _,
          rentalDuration: d
        })
      })]
    })
  },
  L = [{
    key: null,
    renderStep: e => (0, r.jsx)(R, A({}, e))
  }, {
    key: Chunk409813.h8.REVIEW,
    renderStep: e => (0, r.jsx)(x, A({}, e)),
    options: {
      useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t.QBnNHq)
    }
  }],
  j = (e, t, n) => (0, r.jsx)(m.Z, {
    isOrbCheckout: true,
    step: n,
    onClose: () => t(false)
  }),
  M = e => {
    let {
      skuId: t,
      analyticsLocations: n,
      analyticsSourceLocation: r,
      orbProductContext: o,
      onClose: a
    } = e, {
      emitOrbCheckoutPaymentFlowEvent: s
    } = (0, v.S)({
      skuId: t,
      orbProductContext: o,
      analyticsLocations: n,
      analyticsSourceLocation: r
    });
    return {
      analyticsDataOverride: (0, i.useMemo)(() => {
        var e, t;
        if (null != o) return {
          price: null != (e = o.orbPriceAmount) ? e : true,
          regular_price: null != (t = o.orbPriceAmount) ? t : true,
          currency: I.pKx.DISCORD_ORB
        }
      }, [o]),
      onClose: (0, i.useCallback)(async e => {
        e || s(I.rMx.PAYMENT_FLOW_CANCELED), await a()
      }, [a, s])
    }
  },
  k = e => {
    var {
      skuId: t,
      analyticsLocations: n = []
    } = e, i = N(e, ["skuId", "analyticsLocations"]);
    let {
      orbProductContext: o,
      analyticsSourceLocation: a
    } = (0, O.CH)(), {
      analyticsDataOverride: s,
      onClose: l
    } = M({
      skuId: t,
      analyticsLocations: n,
      analyticsSourceLocation: a,
      orbProductContext: o,
      onClose: i.onClose
    });
    return (0, r.jsx)(h.PaymentModal, {
      applicationId: (0, b.Nb)(t),
      transitionState: i.transitionState,
      analyticsDataOverride: s,
      onClose: l,
      hideShadow: true,
      skuId: t,
      renderHeader: j,
      initialPlanId: null,
      analyticsLocations: n
    })
  },
  U = e => {
    var {
      skuId: t,
      loadId: n,
      onCheckoutSuccess: i,
      analyticsSourceLocation: o,
      analyticsLocations: a = [],
      rentalDuration: s
    } = e, l = N(e, ["skuId", "loadId", "onCheckoutSuccess", "analyticsSourceLocation", "analyticsLocations", "rentalDuration"]);
    return (0, r.jsx)(f.PaymentContextProvider, {
      applicationId: (0, b.Nb)(t),
      activeSubscription: null,
      loadId: n,
      stepConfigs: L,
      purchaseType: I.GZQ.ONE_TIME,
      skuIDs: [t],
      paymentGateway: I.gg$.VIRTUAL_CURRENCY,
      excludeSubscriptionPlansBySKU: true,
      excludeSKUPurchasePreviews: true,
      children: (0, r.jsx)(O.dv, {
        skuId: t,
        loadId: n,
        onCheckoutSuccess: i,
        analyticsLocations: a,
        analyticsSourceLocation: o,
        rentalDuration: s,
        children: (0, r.jsx)(d.b6, {
          children: (0, r.jsx)(k, A({
            skuId: t,
            analyticsLocations: a
          }, l))
        })
      })
    })
  }