/** Chunk was on web.js **/
/** chunk id: 922987, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _Y: () => w,
  default: () => G
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk89057 = require("./89057.jsx"),
  Chunk583434 = require("./583434.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk45572 = require("./45572.js"),
  Chunk126982 = require("./126982.jsx"),
  Chunk791785 = require("./791785.jsx"),
  Chunk51499 = require("./51499.jsx"),
  Chunk614277 = require("./614277.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk152521 = require("./152521.js"),
  Chunk932563 = require("./932563.js"),
  Chunk336079 = require("./336079.jsx"),
  Chunk748714 = require("./748714.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");

function S(e, t, n) {
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
      S(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = P(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let D = {
    payment_type: Chunk981631.Zuq[Chunk981631.GZQ.ONE_TIME],
    is_gift: false,
    eligible_for_trial: false,
    payment_modal_version: Chunk791785.PaymentModal.CURRENT_VERSION
  },
  w = (e, t) => {
    let {
      loadId: n,
      skuId: r,
      analyticsLocations: i,
      analyticsSourceLocation: a
    } = t;
    e === v.rMx.PAYMENT_FLOW_CANCELED && g.default.track(v.rMx.PAYMENT_FLOW_CANCELED, A({
      load_id: n,
      application_id: (0, E.Nb)(r),
      location: i,
      location_stack: i,
      payment_gateway: I.ht.VIRTUAL_CURRENCY,
      sku_id: r,
      currency: v.pKx.DISCORD_ORB
    }, null != a && {
      source: a
    }, D))
  },
  L = () => {
    let {
      activitySessionId: e,
      hasPaymentSources: t,
      contextMetadata: n
    } = (0, Chunk563132.JL)(), {
      loadId: r,
      startTime: a
    } = require, {
      skuId: o,
      orbProductContext: s,
      analyticsLocations: l,
      analyticsSourceLocation: c
    } = (0, Chunk336079.C)(), f = (0, Chunk473749.useMemo)(() => {
      var t, n;
      return A(N(A({
        load_id: Chunk54381,
        application_id: (0, Chunk152521.Nb)(Chunk493773),
        location: Chunk583434,
        location_stack: Chunk583434,
        sku_id: Chunk493773,
        activity_session_id: module,
        payment_gateway: Chunk231338.ht.VIRTUAL_CURRENCY
      }, null != Chunk89057 && {
        price: null != (t = Chunk89057.orbPriceAmount) ? exports : true,
        regular_price: null != (n = Chunk89057.orbPriceAmount) ? require : true
      }), {
        currency: Chunk981631.pKx.DISCORD_ORB
      }), null != Chunk987209 && {
        source: Chunk987209
      }, D)
    }, [Chunk54381, module, Chunk493773, Chunk583434, Chunk987209, Chunk89057]);
    return {
      emitOrbCheckoutPaymentFlowEvent: (0, Chunk473749.useCallback)((e, n) => {
        let r = Date.now() - a;
        e === v.rMx.PAYMENT_FLOW_STARTED ? g.default.track(v.rMx.PAYMENT_FLOW_STARTED, N(A({}, f), {
          has_saved_payment_source: t,
          payment_gateway: I.ht.VIRTUAL_CURRENCY,
          continue_session_initial_step: null
        })) : e === v.rMx.PAYMENT_FLOW_LOADED ? g.default.track(v.rMx.PAYMENT_FLOW_LOADED, N(A({}, f), {
          has_saved_payment_source: t,
          initial_step: d.h8.REVIEW,
          duration_ms: r
        })) : e === v.rMx.PAYMENT_FLOW_CANCELED ? g.default.track(v.rMx.PAYMENT_FLOW_CANCELED, N(A({}, f), {
          duration_ms: r
        })) : e === v.rMx.PAYMENT_FLOW_COMPLETED ? g.default.track(v.rMx.PAYMENT_FLOW_COMPLETED, N(A({}, f), {
          duration_ms: r
        })) : e === v.rMx.PAYMENT_FLOW_SUCCEEDED ? g.default.track(v.rMx.PAYMENT_FLOW_SUCCEEDED, N(A({}, f), {
          duration_ms: r
        })) : e === v.rMx.PAYMENT_FLOW_FAILED && g.default.track(v.rMx.PAYMENT_FLOW_FAILED, A(N(A({}, f), {
          duration_ms: r
        }), null != n ? {
          payment_error_code: n.code,
          error_message: n.message
        } : {}))
      }, [Chunk481060, Chunk45572, exports])
    }
  },
  x = e => {
    let {
      handleClose: t,
      handleStepChange: n
    } = e, {
      blockedPayments: a
    } = (0, u.JL)();
    return ((0, i.useEffect)(() => {
      a || n(d.h8.REVIEW)
    }, [a, n]), a) ? (0, r.jsx)(s.Vq, {
      onClose: t
    }) : null
  },
  M = e => {
    var t;
    let {
      handleClose: n
    } = e, {
      selectedSkuId: s,
      purchaseState: c,
      setPurchaseState: d
    } = (0, u.JL)(), {
      product: _
    } = (0, l.T)(s), {
      emitOrbCheckoutPaymentFlowEvent: p
    } = L(), {
      skuId: g,
      onRedeemVirtualCurrency: E,
      isRedeeming: I,
      orbRedemptionError: T,
      orbProductContext: S,
      isRental: A
    } = (0, y.C)(), C = (0, b.cR)(), N = (0, i.useRef)(C);
    (0, o.ZP)(() => {
      p(v.rMx.PAYMENT_FLOW_LOADED)
    }), (0, i.useEffect)(() => {
      c === f.A.COMPLETED && n()
    }, [c, n]), (0, i.useEffect)(() => {
      null != T && null !== N.current && (p(v.rMx.PAYMENT_FLOW_FAILED, T), N.current = null)
    }, [T, p]);
    let R = (0, i.useCallback)(() => {
      N.current = C, p(v.rMx.PAYMENT_FLOW_COMPLETED), E(() => {
        d(f.A.COMPLETED), p(v.rMx.PAYMENT_FLOW_SUCCEEDED)
      })
    }, [E, d, C, p]);
    if (null == s || null == _) return (0, r.jsx)(a.$jN, {
      type: a.$jN.Type.WANDERING_CUBES
    });
    let P = null != (t = N.current) ? t : C,
      D = null != S ? S.orbPriceAmount : null;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(h.Z, {}), (0, r.jsxs)(m.C3, {
        children: [(0, r.jsxs)(a.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [(0, r.jsx)(O.gY, {
            error: T
          }), (0, r.jsx)(O.f4, {
            skuId: g
          })]
        }), (0, r.jsx)(O.A3, {
          skuId: g,
          orbPriceAmount: D,
          orbBalance: P
        })]
      }), (0, r.jsx)(m.O3, {
        children: (0, r.jsx)(O.f9, {
          orbPriceAmount: D,
          orbBalance: P,
          isSubmitting: I,
          onClickCheckout: R,
          isRental: A
        })
      })]
    })
  },
  k = [{
    key: null,
    renderStep: e => (0, r.jsx)(x, A({}, e))
  }, {
    key: Chunk409813.h8.REVIEW,
    renderStep: e => (0, r.jsx)(M, A({}, e)),
    options: {
      useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t.QBnNHq)
    }
  }],
  j = (e, t, n) => (0, r.jsx)(_.Z, {
    isOrbCheckout: true,
    step: n,
    onClose: () => t(false)
  }),
  U = e => {
    var {
      skuId: t,
      analyticsLocations: n = []
    } = e, a = R(e, ["skuId", "analyticsLocations"]);
    let {
      orbProductContext: o
    } = (0, y.C)(), {
      emitOrbCheckoutPaymentFlowEvent: s
    } = L(), l = (0, i.useMemo)(() => {
      var e, t;
      if (null != o) return {
        price: null != (e = o.orbPriceAmount) ? e : true,
        regular_price: null != (t = o.orbPriceAmount) ? t : true,
        currency: v.pKx.DISCORD_ORB
      }
    }, [o]), c = (0, i.useCallback)(async e => {
      e || s(v.rMx.PAYMENT_FLOW_CANCELED), await a.onClose()
    }, [a, s]);
    return (0, r.jsx)(p.PaymentModal, {
      applicationId: (0, E.Nb)(t),
      transitionState: a.transitionState,
      analyticsDataOverride: l,
      onClose: c,
      hideShadow: true,
      skuId: t,
      renderHeader: j,
      initialPlanId: null,
      analyticsLocations: n
    })
  },
  G = e => {
    var {
      skuId: t,
      loadId: n,
      onCheckoutSuccess: i,
      analyticsSourceLocation: a,
      analyticsLocations: o = [],
      isRental: s
    } = e, l = R(e, ["skuId", "loadId", "onCheckoutSuccess", "analyticsSourceLocation", "analyticsLocations", "isRental"]);
    return (0, r.jsx)(u.PaymentContextProvider, {
      applicationId: (0, E.Nb)(t),
      activeSubscription: null,
      loadId: n,
      stepConfigs: k,
      purchaseType: v.GZQ.ONE_TIME,
      skuIDs: [t],
      excludeSubscriptionPlansBySKU: true,
      excludeSKUPurchasePreviews: true,
      children: (0, r.jsx)(y.d, {
        skuId: t,
        loadId: n,
        onCheckoutSuccess: i,
        analyticsLocations: o,
        analyticsSourceLocation: a,
        isRental: s,
        children: (0, r.jsx)(c.b6, {
          children: (0, r.jsx)(U, A({
            skuId: t,
            analyticsLocations: o
          }, l))
        })
      })
    })
  }