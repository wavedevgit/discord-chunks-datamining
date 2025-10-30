/** Chunk was on 72740 **/
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

function S(e, t) {
  if (null == e) return {};
  var n, r, l = function(e, t) {
    if (null == e) return {};
    var n, r, l = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
  }
  return l
}
let A = {
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
      analyticsSourceLocation: a
    } = t;
    e === x.rMx.PAYMENT_FLOW_CANCELED && v.default.track(x.rMx.PAYMENT_FLOW_CANCELED, _({
      load_id: n,
      application_id: (0, m.N)(r),
      location: l,
      location_stack: l,
      payment_gateway: P.ht.VIRTUAL_CURRENCY,
      sku_id: r,
      currency: x.pKx.DISCORD_ORB
    }, null != a && {
      source: a
    }, A))
  },
  I = () => {
    let {
      activitySessionId: e,
      hasPaymentSources: t,
      contextMetadata: n
    } = (0, Chunk563132.JL)(), {
      loadId: r,
      startTime: a
    } = require, {
      skuId: i,
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
      }, A)
    }, [Chunk951288, module, Chunk493773, Chunk583434, Chunk987209, Chunk89057]);
    return {
      emitOrbCheckoutPaymentFlowEvent: (0, Chunk647438.useCallback)((e, n) => {
        let r = Date.now() - a;
        e === x.rMx.PAYMENT_FLOW_STARTED ? v.default.track(x.rMx.PAYMENT_FLOW_STARTED, C(_({}, p), {
          has_saved_payment_source: t,
          payment_gateway: P.ht.VIRTUAL_CURRENCY,
          continue_session_initial_step: null
        })) : e === x.rMx.PAYMENT_FLOW_LOADED ? v.default.track(x.rMx.PAYMENT_FLOW_LOADED, C(_({}, p), {
          has_saved_payment_source: t,
          initial_step: d.h8.REVIEW,
          duration_ms: r
        })) : e === x.rMx.PAYMENT_FLOW_CANCELED ? v.default.track(x.rMx.PAYMENT_FLOW_CANCELED, C(_({}, p), {
          duration_ms: r
        })) : e === x.rMx.PAYMENT_FLOW_COMPLETED ? v.default.track(x.rMx.PAYMENT_FLOW_COMPLETED, C(_({}, p), {
          duration_ms: r
        })) : e === x.rMx.PAYMENT_FLOW_SUCCEEDED ? v.default.track(x.rMx.PAYMENT_FLOW_SUCCEEDED, C(_({}, p), {
          duration_ms: r
        })) : e === x.rMx.PAYMENT_FLOW_FAILED && v.default.track(x.rMx.PAYMENT_FLOW_FAILED, _(C(_({}, p), {
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
      blockedPayments: a
    } = (0, u.JL)();
    return ((0, l.useEffect)(() => {
      a || n(d.h8.REVIEW)
    }, [a, n]), a) ? (0, r.jsx)(o.Vq, {
      onClose: t
    }) : null
  },
  w = e => {
    var t;
    let {
      handleClose: n
    } = e, {
      selectedSkuId: o,
      purchaseState: c,
      setPurchaseState: d
    } = (0, u.JL)(), {
      product: b
    } = (0, s.T)(o), {
      emitOrbCheckoutPaymentFlowEvent: f
    } = I(), {
      skuId: v,
      onRedeemVirtualCurrency: m,
      isRedeeming: P,
      orbRedemptionError: E,
      orbProductContext: _
    } = (0, h.C)(), C = (0, g.cR)(), S = (0, l.useRef)(C);
    (0, i.ZP)(() => {
      f(x.rMx.PAYMENT_FLOW_LOADED)
    }), (0, l.useEffect)(() => {
      c === p.A.COMPLETED && n()
    }, [c, n]), (0, l.useEffect)(() => {
      null != E && null !== S.current && (f(x.rMx.PAYMENT_FLOW_FAILED, E), S.current = null)
    }, [E, f]);
    let A = (0, l.useCallback)(() => {
      S.current = C, f(x.rMx.PAYMENT_FLOW_COMPLETED), m(() => {
        d(p.A.COMPLETED), f(x.rMx.PAYMENT_FLOW_SUCCEEDED)
      })
    }, [m, d, C, f]);
    if (null == o || null == b) return (0, r.jsx)(a.$jN, {
      type: a.$jN.Type.WANDERING_CUBES
    });
    let N = null != (t = S.current) ? t : C,
      L = null != _ ? _.orbPriceAmount : null;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(y.Z, {}), (0, r.jsxs)(O.C3, {
        children: [(0, r.jsxs)(a.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [(0, r.jsx)(j.gY, {
            error: E
          }), (0, r.jsx)(j.f4, {
            skuId: v
          })]
        }), (0, r.jsx)(j.A3, {
          skuId: v,
          orbPriceAmount: L,
          orbBalance: N
        })]
      }), (0, r.jsx)(O.O3, {
        children: (0, r.jsx)(j.f9, {
          orbPriceAmount: L,
          orbBalance: N,
          isSubmitting: P,
          onClickCheckout: A
        })
      })]
    })
  },
  k = [{
    key: null,
    renderStep: e => (0, r.jsx)(L, _({}, e))
  }, {
    key: Chunk409813.h8.REVIEW,
    renderStep: e => (0, r.jsx)(w, _({}, e)),
    options: {
      useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t.QBnNHq)
    }
  }],
  R = (e, t, n) => (0, r.jsx)(b.Z, {
    isOrbCheckout: true,
    step: n,
    onClose: () => t(false)
  }),
  T = e => {
    var {
      skuId: t,
      analyticsLocations: n = []
    } = e, a = S(e, ["skuId", "analyticsLocations"]);
    let {
      orbProductContext: i
    } = (0, h.C)(), {
      emitOrbCheckoutPaymentFlowEvent: o
    } = I(), s = (0, l.useMemo)(() => {
      var e, t;
      if (null != i) return {
        price: null != (e = i.orbPriceAmount) ? e : true,
        regular_price: null != (t = i.orbPriceAmount) ? t : true,
        currency: x.pKx.DISCORD_ORB
      }
    }, [i]), c = (0, l.useCallback)(async e => {
      e || o(x.rMx.PAYMENT_FLOW_CANCELED), await a.onClose()
    }, [a, o]);
    return (0, r.jsx)(f.PaymentModal, {
      applicationId: (0, m.N)(t),
      transitionState: a.transitionState,
      analyticsDataOverride: s,
      onClose: c,
      hideShadow: true,
      skuId: t,
      renderHeader: R,
      initialPlanId: null,
      analyticsLocations: n
    })
  },
  D = e => {
    var {
      skuId: t,
      loadId: n,
      onCheckoutSuccess: l,
      analyticsSourceLocation: a,
      analyticsLocations: i = []
    } = e, o = S(e, ["skuId", "loadId", "onCheckoutSuccess", "analyticsSourceLocation", "analyticsLocations"]);
    return (0, r.jsx)(u.PaymentContextProvider, {
      applicationId: (0, m.N)(t),
      activeSubscription: null,
      loadId: n,
      stepConfigs: k,
      purchaseType: x.GZQ.ONE_TIME,
      skuIDs: [t],
      excludeSubscriptionPlansBySKU: true,
      excludeSKUPurchasePreviews: true,
      children: (0, r.jsx)(h.d, {
        skuId: t,
        loadId: n,
        onCheckoutSuccess: l,
        analyticsLocations: i,
        analyticsSourceLocation: a,
        children: (0, r.jsx)(c.b6, {
          children: (0, r.jsx)(T, _({
            skuId: t,
            analyticsLocations: i
          }, o))
        })
      })
    })
  }