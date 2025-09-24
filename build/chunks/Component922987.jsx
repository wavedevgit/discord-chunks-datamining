/** Chunk was on 8850 **/
/** chunk id: 922987, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  _Y: () => w,
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
  Chunk27034 = require("./27034.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk152521 = require("./152521.js"),
  Chunk932563 = require("./932563.js"),
  Chunk336079 = require("./336079.jsx"),
  Chunk748714 = require("./748714.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");

function x(e) {
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

function C(e, t) {
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

function S(e, t) {
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
let I = {
    payment_type: Chunk981631.Zuq[Chunk981631.GZQ.ONE_TIME],
    is_gift: false,
    eligible_for_trial: false,
    payment_modal_version: Chunk791785.PaymentModal.CURRENT_VERSION
  },
  w = (e, t) => {
    let {
      loadId: r,
      skuId: n,
      analyticsLocations: l,
      analyticsSourceLocation: i
    } = t;
    e === P.rMx.PAYMENT_FLOW_CANCELED && O.default.track(P.rMx.PAYMENT_FLOW_CANCELED, x({
      load_id: r,
      application_id: (0, v.N)(n),
      location: l,
      location_stack: l,
      sku_id: n,
      currency: P.pKx.DISCORD_ORB
    }, null != i && {
      source: i
    }, I))
  },
  A = () => {
    let {
      activitySessionId: e,
      hasPaymentSources: t,
      contextMetadata: r
    } = (0, Chunk563132.JL)(), {
      loadId: n,
      startTime: i
    } = require, {
      skuId: a,
      orbProductContext: o,
      analyticsLocations: s,
      analyticsSourceLocation: c
    } = (0, Chunk336079.C)(), p = (0, Chunk647438.useMemo)(() => {
      var t, r;
      return x(C(x({
        load_id: Chunk951288,
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
      }, I)
    }, [Chunk951288, module, Chunk493773, Chunk583434, Chunk987209, Chunk89057]);
    return {
      emitOrbCheckoutPaymentFlowEvent: (0, Chunk647438.useCallback)((e, r) => {
        let n = Date.now() - i;
        e === P.rMx.PAYMENT_FLOW_STARTED ? O.default.track(P.rMx.PAYMENT_FLOW_STARTED, C(x({}, p), {
          has_saved_payment_source: t,
          payment_gateway: _.ht.VIRTUAL_CURRENCY,
          continue_session_initial_step: null
        })) : e === P.rMx.PAYMENT_FLOW_LOADED ? O.default.track(P.rMx.PAYMENT_FLOW_LOADED, C(x({}, p), {
          has_saved_payment_source: t,
          initial_step: d.h8.REVIEW,
          duration_ms: n
        })) : e === P.rMx.PAYMENT_FLOW_CANCELED ? O.default.track(P.rMx.PAYMENT_FLOW_CANCELED, C(x({}, p), {
          duration_ms: n
        })) : e === P.rMx.PAYMENT_FLOW_COMPLETED ? O.default.track(P.rMx.PAYMENT_FLOW_COMPLETED, C(x({}, p), {
          payment_gateway: _.ht.VIRTUAL_CURRENCY,
          duration_ms: n
        })) : e === P.rMx.PAYMENT_FLOW_SUCCEEDED ? O.default.track(P.rMx.PAYMENT_FLOW_SUCCEEDED, C(x({}, p), {
          duration_ms: n
        })) : e === P.rMx.PAYMENT_FLOW_FAILED && O.default.track(P.rMx.PAYMENT_FLOW_FAILED, x(C(x({}, p), {
          payment_gateway: _.ht.VIRTUAL_CURRENCY,
          duration_ms: n
        }), null != r ? {
          payment_error_code: r.code,
          error_message: r.message
        } : {}))
      }, [Chunk481060, Chunk45572, exports])
    }
  },
  T = e => {
    let {
      handleClose: t,
      handleStepChange: r
    } = e, {
      blockedPayments: i
    } = (0, u.JL)();
    return ((0, l.useEffect)(() => {
      i || r(d.h8.REVIEW)
    }, [i, r]), i) ? (0, n.jsx)(o.Vq, {
      onClose: t
    }) : null
  },
  R = e => {
    var t;
    let {
      handleClose: r
    } = e, {
      selectedSkuId: o,
      purchaseState: c,
      setPurchaseState: d
    } = (0, u.JL)(), {
      product: f
    } = (0, s.T)(o), {
      emitOrbCheckoutPaymentFlowEvent: b
    } = A(), {
      skuId: O,
      onRedeemVirtualCurrency: v,
      isRedeeming: _,
      orbRedemptionError: E,
      orbProductContext: x
    } = (0, m.C)(), C = (0, y.cR)(), S = (0, l.useRef)(C);
    (0, a.ZP)(() => {
      b(P.rMx.PAYMENT_FLOW_LOADED)
    }), (0, l.useEffect)(() => {
      c === p.A.COMPLETED && r()
    }, [c, r]), (0, l.useEffect)(() => {
      null != E && null !== S.current && (b(P.rMx.PAYMENT_FLOW_FAILED, E), S.current = null)
    }, [E, b]);
    let I = (0, l.useCallback)(() => {
      S.current = C, b(P.rMx.PAYMENT_FLOW_COMPLETED), v(() => {
        d(p.A.COMPLETED), b(P.rMx.PAYMENT_FLOW_SUCCEEDED)
      })
    }, [v, d, C, b]);
    if (null == o || null == f) return (0, n.jsx)(i.$jN, {
      type: i.$jN.Type.WANDERING_CUBES
    });
    let w = null != (t = S.current) ? t : C,
      T = null != x ? x.orbPriceAmount : null;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(h.Z, {}), (0, n.jsxs)(g.C3, {
        children: [(0, n.jsxs)(i.Kqy, {
          direction: "vertical",
          gap: 8,
          children: [(0, n.jsx)(j.gY, {
            error: E
          }), (0, n.jsx)(j.f4, {
            skuId: O
          })]
        }), (0, n.jsx)(j.A3, {
          skuId: O,
          orbPriceAmount: T,
          orbBalance: w
        })]
      }), (0, n.jsx)(g.O3, {
        children: (0, n.jsx)(j.f9, {
          orbPriceAmount: T,
          orbBalance: w,
          isSubmitting: _,
          onClickCheckout: I
        })
      })]
    })
  },
  L = [{
    key: null,
    renderStep: e => (0, n.jsx)(T, x({}, e))
  }, {
    key: Chunk409813.h8.REVIEW,
    renderStep: e => (0, n.jsx)(R, x({}, e)),
    options: {
      useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t.QBnNHh)
    }
  }],
  N = (e, t, r) => (0, n.jsx)(f.Z, {
    isOrbCheckout: true,
    step: r,
    onClose: () => t(false)
  }),
  k = e => {
    var {
      skuId: t,
      analyticsLocations: r = []
    } = e, i = S(e, ["skuId", "analyticsLocations"]);
    let {
      orbProductContext: a
    } = (0, m.C)(), {
      emitOrbCheckoutPaymentFlowEvent: o
    } = A(), s = (0, l.useMemo)(() => {
      var e, t;
      if (null != a) return {
        price: null != (e = a.orbPriceAmount) ? e : true,
        regular_price: null != (t = a.orbPriceAmount) ? t : true,
        currency: P.pKx.DISCORD_ORB
      }
    }, [a]), c = (0, l.useCallback)(async e => {
      e || o(P.rMx.PAYMENT_FLOW_CANCELED), await i.onClose()
    }, [i, o]);
    return (0, n.jsx)(b.PaymentModal, {
      applicationId: (0, v.N)(t),
      transitionState: i.transitionState,
      analyticsDataOverride: s,
      onClose: c,
      hideShadow: true,
      skuId: t,
      renderHeader: N,
      initialPlanId: null,
      analyticsLocations: r
    })
  },
  D = e => {
    var {
      skuId: t,
      loadId: r,
      onCheckoutSuccess: l,
      analyticsSourceLocation: i,
      analyticsLocations: a = []
    } = e, o = S(e, ["skuId", "loadId", "onCheckoutSuccess", "analyticsSourceLocation", "analyticsLocations"]);
    return (0, n.jsx)(u.PaymentContextProvider, {
      applicationId: (0, v.N)(t),
      activeSubscription: null,
      loadId: r,
      stepConfigs: L,
      purchaseType: P.GZQ.ONE_TIME,
      skuIDs: [t],
      excludeSubscriptionPlansBySKU: true,
      excludeSKUPurchasePreviews: true,
      children: (0, n.jsx)(m.d, {
        skuId: t,
        loadId: r,
        onCheckoutSuccess: l,
        analyticsLocations: a,
        analyticsSourceLocation: i,
        children: (0, n.jsx)(c.b6, {
          children: (0, n.jsx)(k, x({
            skuId: t,
            analyticsLocations: a
          }, o))
        })
      })
    })
  }