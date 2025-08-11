/** Chunk was on 89001 **/
/** chunk id: 396639, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  _Y: () => L,
  default: () => w
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk27034 = require("./27034.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk152521 = require("./152521.js"),
  Chunk932563 = require("./932563.js"),
  Chunk621490 = require("./621490.jsx"),
  Chunk257493 = require("./257493.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var r, n, l = function(e, t) {
    if (null == e) return {};
    var r, n, l = {},
      i = Object.keys(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
  }
  return l
}
let N = {
    payment_type: Chunk981631.Zuq[Chunk981631.GZQ.ONE_TIME],
    is_gift: false,
    eligible_for_trial: false,
    payment_modal_version: Chunk791785.PaymentModal.CURRENT_VERSION
  },
  L = (e, t) => {
    let {
      loadId: r,
      skuId: n,
      analyticsLocations: l,
      analyticsSourceLocation: i
    } = t;
    e === P.rMx.PAYMENT_FLOW_CANCELED && E.default.track(P.rMx.PAYMENT_FLOW_CANCELED, h({
      load_id: r,
      application_id: (0, _.N)(n),
      location: l,
      location_stack: l,
      sku_id: n,
      currency: P.pKx.DISCORD_ORB
    }, null != i && {
      source: i
    }, N))
  },
  M = () => {
    let {
      activitySessionId: e,
      hasPaymentSources: t,
      contextMetadata: r
    } = (0, Chunk563132.JL)(), {
      loadId: n,
      startTime: i
    } = require, {
      skuId: o,
      orbProductContext: a,
      analyticsLocations: s,
      analyticsSourceLocation: c
    } = (0, Chunk257493.C)(), p = (0, Chunk73800.useMemo)(() => {
      var t, r;
      return h(A(h({
        load_id: Chunk255367,
        application_id: (0, Chunk152521.N)(Chunk493773),
        location: Chunk583434,
        location_stack: Chunk583434,
        sku_id: Chunk493773,
        activity_session_id: module
      }, null != Chunk89057 && {
        price: null != (t = Chunk89057.orbPriceAmount) ? exports : true,
        regular_price: null != (r = Chunk89057.orbPriceAmount) ? require : true
      }), {
        currency: Chunk981631.pKx.DISCORD_ORB
      }), null != Chunk987209 && {
        source: Chunk987209
      }, N)
    }, [Chunk255367, module, Chunk493773, Chunk583434, Chunk987209, Chunk89057]);
    return {
      emitOrbCheckoutPaymentFlowEvent: (0, Chunk73800.useCallback)((e, r) => {
        let n = Date.now() - i;
        e === P.rMx.PAYMENT_FLOW_STARTED ? E.default.track(P.rMx.PAYMENT_FLOW_STARTED, A(h({}, p), {
          has_saved_payment_source: t,
          payment_gateway: C.ht.VIRTUAL_CURRENCY,
          continue_session_initial_step: null
        })) : e === P.rMx.PAYMENT_FLOW_LOADED ? E.default.track(P.rMx.PAYMENT_FLOW_LOADED, A(h({}, p), {
          has_saved_payment_source: t,
          initial_step: d.h8.REVIEW,
          duration_ms: n
        })) : e === P.rMx.PAYMENT_FLOW_CANCELED ? E.default.track(P.rMx.PAYMENT_FLOW_CANCELED, A(h({}, p), {
          duration_ms: n
        })) : e === P.rMx.PAYMENT_FLOW_COMPLETED ? E.default.track(P.rMx.PAYMENT_FLOW_COMPLETED, A(h({}, p), {
          payment_gateway: C.ht.VIRTUAL_CURRENCY,
          duration_ms: n
        })) : e === P.rMx.PAYMENT_FLOW_SUCCEEDED ? E.default.track(P.rMx.PAYMENT_FLOW_SUCCEEDED, A(h({}, p), {
          duration_ms: n
        })) : e === P.rMx.PAYMENT_FLOW_FAILED && E.default.track(P.rMx.PAYMENT_FLOW_FAILED, h(A(h({}, p), {
          payment_gateway: C.ht.VIRTUAL_CURRENCY,
          duration_ms: n
        }), null != r ? {
          payment_error_code: r.code,
          error_message: r.message
        } : {}))
      }, [Chunk481060, Chunk45572, exports])
    }
  },
  k = e => {
    let {
      handleClose: t,
      handleStepChange: r
    } = e, {
      blockedPayments: i
    } = (0, u.JL)();
    return ((0, l.useEffect)(() => {
      i || r(d.h8.REVIEW)
    }, [i, r]), i) ? (0, n.jsx)(a.Vq, {
      onClose: t
    }) : null
  },
  D = e => {
    var t;
    let {
      handleClose: r
    } = e, {
      selectedSkuId: a,
      purchaseState: c,
      setPurchaseState: d
    } = (0, u.JL)(), {
      product: O
    } = (0, s.T)(a), {
      emitOrbCheckoutPaymentFlowEvent: b
    } = M(), {
      skuId: E,
      onRedeemVirtualCurrency: _,
      isRedeeming: C,
      orbRedemptionError: g,
      orbProductContext: h
    } = (0, j.C)(), A = (0, x.cR)(), v = (0, l.useRef)(A);
    (0, o.ZP)(() => {
      b(P.rMx.PAYMENT_FLOW_LOADED)
    }), (0, l.useEffect)(() => {
      c === p.A.COMPLETED && r()
    }, [c, r]), (0, l.useEffect)(() => {
      null != g && null !== v.current && (b(P.rMx.PAYMENT_FLOW_FAILED, g), v.current = null)
    }, [g, b]);
    let N = (0, l.useCallback)(() => {
      v.current = A, b(P.rMx.PAYMENT_FLOW_COMPLETED), _(() => {
        d(p.A.COMPLETED), b(P.rMx.PAYMENT_FLOW_SUCCEEDED)
      })
    }, [_, d, A, b]);
    if (null == a || null == O) return (0, n.jsx)(i.$jN, {
      type: i.$jN.Type.WANDERING_CUBES
    });
    let L = null != (t = v.current) ? t : A,
      k = null != h ? h.orbPriceAmount : null;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(y.Z, {}), (0, n.jsxs)(m.C3, {
        children: [(0, n.jsx)(f.gY, {
          error: g
        }), (0, n.jsx)(f.A3, {
          skuId: E,
          orbPriceAmount: k,
          orbBalance: L
        })]
      }), (0, n.jsx)(m.O3, {
        children: (0, n.jsx)(f.f9, {
          orbPriceAmount: k,
          orbBalance: L,
          isSubmitting: C,
          onClickCheckout: N
        })
      })]
    })
  },
  S = [{
    key: null,
    renderStep: e => (0, n.jsx)(k, h({}, e))
  }, {
    key: Chunk409813.h8.REVIEW,
    renderStep: e => (0, n.jsx)(D, h({}, e)),
    options: {
      useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t.QBnNHh)
    }
  }],
  T = (e, t, r) => (0, n.jsx)(O.Z, {
    isOrbCheckout: true,
    step: r,
    onClose: () => t(false)
  }),
  I = e => {
    var {
      skuId: t,
      analyticsLocations: r = []
    } = e, i = v(e, ["skuId", "analyticsLocations"]);
    let {
      orbProductContext: o
    } = (0, j.C)(), {
      emitOrbCheckoutPaymentFlowEvent: a
    } = M(), s = (0, l.useMemo)(() => {
      var e, t;
      if (null != o) return {
        price: null != (e = o.orbPriceAmount) ? e : true,
        regular_price: null != (t = o.orbPriceAmount) ? t : true,
        currency: P.pKx.DISCORD_ORB
      }
    }, [o]), c = (0, l.useCallback)(async e => {
      e || a(P.rMx.PAYMENT_FLOW_CANCELED), await i.onClose()
    }, [i, a]);
    return (0, n.jsx)(b.PaymentModal, {
      applicationId: (0, _.N)(t),
      transitionState: i.transitionState,
      analyticsDataOverride: s,
      onClose: c,
      hideShadow: true,
      skuId: t,
      renderHeader: T,
      initialPlanId: null,
      analyticsLocations: r
    })
  },
  w = e => {
    var {
      skuId: t,
      loadId: r,
      onCheckoutSuccess: l,
      analyticsSourceLocation: i,
      analyticsLocations: o = []
    } = e, a = v(e, ["skuId", "loadId", "onCheckoutSuccess", "analyticsSourceLocation", "analyticsLocations"]);
    return (0, n.jsx)(u.PaymentContextProvider, {
      applicationId: (0, _.N)(t),
      activeSubscription: null,
      loadId: r,
      stepConfigs: S,
      purchaseType: P.GZQ.ONE_TIME,
      skuIDs: [t],
      excludeSubscriptionPlansBySKU: true,
      excludeSKUPurchasePreviews: true,
      children: (0, n.jsx)(j.d, {
        skuId: t,
        loadId: r,
        onCheckoutSuccess: l,
        analyticsLocations: o,
        analyticsSourceLocation: i,
        children: (0, n.jsx)(c.b6, {
          children: (0, n.jsx)(I, h({
            skuId: t,
            analyticsLocations: o
          }, a))
        })
      })
    })
  }