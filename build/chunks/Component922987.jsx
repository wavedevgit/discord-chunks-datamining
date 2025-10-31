/** Chunk was on 48502 **/
/** chunk id: 922987, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _Y: () => N,
  default: () => D
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function _(e) {
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

function C(e, t) {
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

function A(e, t) {
  if (null == e) return {};
  var n, r, l = function(e, t) {
    if (null == e) return {};
    var n, r, l = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
  }
  return l
}
let S = {
    payment_type: Chunk981631.Zuq[Chunk981631.GZQ.ONE_TIME],
    is_gift: false,
    eligible_for_trial: false,
    payment_modal_version: Chunk791785.PaymentModal.CURRENT_VERSION
  },
  N = (e, t) => {
    let {
      loadId: n,
      skuId: r,
      analyticsLocations: l,
      analyticsSourceLocation: i
    } = t;
    e === x.rMx.PAYMENT_FLOW_CANCELED && m.default.track(x.rMx.PAYMENT_FLOW_CANCELED, _({
      load_id: n,
      application_id: (0, g.N)(r),
      location: l,
      location_stack: l,
      payment_gateway: P.ht.VIRTUAL_CURRENCY,
      sku_id: r,
      currency: x.pKx.DISCORD_ORB
    }, null != i && {
      source: i
    }, S))
  },
  I = () => {
    let {
      activitySessionId: e,
      hasPaymentSources: t,
      contextMetadata: n
    } = (0, Chunk563132.JL)(), {
      loadId: r,
      startTime: i
    } = require, {
      skuId: a,
      orbProductContext: o,
      analyticsLocations: s,
      analyticsSourceLocation: c
    } = (0, Chunk336079.C)(), p = (0, Chunk647438.useMemo)(() => {
      var t, n;
      return _(C(_({
        load_id: Chunk951288,
        application_id: (0, Chunk152521.N)(Chunk493773),
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
      }, S)
    }, [Chunk951288, module, Chunk493773, Chunk583434, Chunk987209, Chunk89057]);
    return {
      emitOrbCheckoutPaymentFlowEvent: (0, Chunk647438.useCallback)((e, n) => {
        let r = Date.now() - i;
        e === x.rMx.PAYMENT_FLOW_STARTED ? m.default.track(x.rMx.PAYMENT_FLOW_STARTED, C(_({}, p), {
          has_saved_payment_source: t,
          payment_gateway: P.ht.VIRTUAL_CURRENCY,
          continue_session_initial_step: null
        })) : e === x.rMx.PAYMENT_FLOW_LOADED ? m.default.track(x.rMx.PAYMENT_FLOW_LOADED, C(_({}, p), {
          has_saved_payment_source: t,
          initial_step: d.h8.REVIEW,
          duration_ms: r
        })) : e === x.rMx.PAYMENT_FLOW_CANCELED ? m.default.track(x.rMx.PAYMENT_FLOW_CANCELED, C(_({}, p), {
          duration_ms: r
        })) : e === x.rMx.PAYMENT_FLOW_COMPLETED ? m.default.track(x.rMx.PAYMENT_FLOW_COMPLETED, C(_({}, p), {
          duration_ms: r
        })) : e === x.rMx.PAYMENT_FLOW_SUCCEEDED ? m.default.track(x.rMx.PAYMENT_FLOW_SUCCEEDED, C(_({}, p), {
          duration_ms: r
        })) : e === x.rMx.PAYMENT_FLOW_FAILED && m.default.track(x.rMx.PAYMENT_FLOW_FAILED, _(C(_({}, p), {
          duration_ms: r
        }), null != n ? {
          payment_error_code: n.code,
          error_message: n.message
        } : {}))
      }, [Chunk481060, Chunk45572, exports])
    }
  },
  L = e => {
    let {
      handleClose: t,
      handleStepChange: n
    } = e, {
      blockedPayments: i
    } = (0, u.JL)();
    return ((0, l.useEffect)(() => {
      i || n(d.h8.REVIEW)
    }, [i, n]), i) ? (0, r.jsx)(o.Vq, {
      onClose: t
    }) : null
  },
  R = e => {
    var t;
    let {
      handleClose: n
    } = e, {
      selectedSkuId: o,
      purchaseState: c,
      setPurchaseState: d
    } = (0, u.JL)(), {
      product: f
    } = (0, s.T)(o), {
      emitOrbCheckoutPaymentFlowEvent: b
    } = I(), {
      skuId: m,
      onRedeemVirtualCurrency: g,
      isRedeeming: P,
      orbRedemptionError: E,
      orbProductContext: _
    } = (0, v.C)(), C = (0, h.cR)(), A = (0, l.useRef)(C);
    (0, a.ZP)(() => {
      b(x.rMx.PAYMENT_FLOW_LOADED)
    }), (0, l.useEffect)(() => {
      c === p.A.COMPLETED && n()
    }, [c, n]), (0, l.useEffect)(() => {
      null != E && null !== A.current && (b(x.rMx.PAYMENT_FLOW_FAILED, E), A.current = null)
    }, [E, b]);
    let S = (0, l.useCallback)(() => {
      A.current = C, b(x.rMx.PAYMENT_FLOW_COMPLETED), g(() => {
        d(p.A.COMPLETED), b(x.rMx.PAYMENT_FLOW_SUCCEEDED)
      })
    }, [g, d, C, b]);
    if (null == o || null == f) return (0, r.jsx)(i.$jN, {
      type: i.$jN.Type.WANDERING_CUBES
    });
    let N = null != (t = A.current) ? t : C,
      L = null != _ ? _.orbPriceAmount : null;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(y.Z, {}), (0, r.jsxs)(O.C3, {
        children: [(0, r.jsxs)(i.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [(0, r.jsx)(j.gY, {
            error: E
          }), (0, r.jsx)(j.f4, {
            skuId: m
          })]
        }), (0, r.jsx)(j.A3, {
          skuId: m,
          orbPriceAmount: L,
          orbBalance: N
        })]
      }), (0, r.jsx)(O.O3, {
        children: (0, r.jsx)(j.f9, {
          orbPriceAmount: L,
          orbBalance: N,
          isSubmitting: P,
          onClickCheckout: S
        })
      })]
    })
  },
  T = [{
    key: null,
    renderStep: e => (0, r.jsx)(L, _({}, e))
  }, {
    key: Chunk409813.h8.REVIEW,
    renderStep: e => (0, r.jsx)(R, _({}, e)),
    options: {
      useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t.QBnNHq)
    }
  }],
  k = (e, t, n) => (0, r.jsx)(f.Z, {
    isOrbCheckout: true,
    step: n,
    onClose: () => t(false)
  }),
  w = e => {
    var {
      skuId: t,
      analyticsLocations: n = []
    } = e, i = A(e, ["skuId", "analyticsLocations"]);
    let {
      orbProductContext: a
    } = (0, v.C)(), {
      emitOrbCheckoutPaymentFlowEvent: o
    } = I(), s = (0, l.useMemo)(() => {
      var e, t;
      if (null != a) return {
        price: null != (e = a.orbPriceAmount) ? e : true,
        regular_price: null != (t = a.orbPriceAmount) ? t : true,
        currency: x.pKx.DISCORD_ORB
      }
    }, [a]), c = (0, l.useCallback)(async e => {
      e || o(x.rMx.PAYMENT_FLOW_CANCELED), await i.onClose()
    }, [i, o]);
    return (0, r.jsx)(b.PaymentModal, {
      applicationId: (0, g.N)(t),
      transitionState: i.transitionState,
      analyticsDataOverride: s,
      onClose: c,
      hideShadow: true,
      skuId: t,
      renderHeader: k,
      initialPlanId: null,
      analyticsLocations: n
    })
  },
  D = e => {
    var {
      skuId: t,
      loadId: n,
      onCheckoutSuccess: l,
      analyticsSourceLocation: i,
      analyticsLocations: a = []
    } = e, o = A(e, ["skuId", "loadId", "onCheckoutSuccess", "analyticsSourceLocation", "analyticsLocations"]);
    return (0, r.jsx)(u.PaymentContextProvider, {
      applicationId: (0, g.N)(t),
      activeSubscription: null,
      loadId: n,
      stepConfigs: T,
      purchaseType: x.GZQ.ONE_TIME,
      skuIDs: [t],
      excludeSubscriptionPlansBySKU: true,
      excludeSKUPurchasePreviews: true,
      children: (0, r.jsx)(v.d, {
        skuId: t,
        loadId: n,
        onCheckoutSuccess: l,
        analyticsLocations: a,
        analyticsSourceLocation: i,
        children: (0, r.jsx)(c.b6, {
          children: (0, r.jsx)(w, _({
            skuId: t,
            analyticsLocations: a
          }, o))
        })
      })
    })
  }