/** Chunk was on web.js **/
/** chunk id: 254326, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OU: () => R
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk736843 = require("./736843.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk165823 = require("./165823.jsx"),
  Chunk975189 = require("./975189.jsx"),
  Chunk503516 = require("./503516.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = b(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let O = (0, Chunk64700.createContext)({
    setCustomConfettiVisible: () => {},
    confettiCanvas: null,
    hideConfirmStepConfetti: false,
    skuIDs: [],
    analyticsLocations: []
  }),
  v = () => (0, i.useContext)(O),
  A = e => {
    let {
      analyticsLocations: t,
      hideConfirmStepConfetti: n,
      confettiCanvas: i
    } = v();
    return (0, r.jsx)(d.v, m({
      analyticsLocations: t,
      hideConfetti: n,
      confettiCanvas: i
    }, e))
  },
  I = {
    renderStep: e => (0, r.jsx)(A, m({}, e)),
    options: Chunk165823.yC
  },
  S = e => {
    let {
      skuId: t,
      analyticsLocations: n,
      children: s
    } = e, o = y(e, ["skuId", "analyticsLocations", "children"]), {
      environment: c,
      confettiCanvas: d,
      setConfettiCanvas: f,
      customConfettiVisible: p,
      setCustomConfettiVisible: h,
      customConfettiDisplayOptions: g,
      hideConfirmStepConfetti: b
    } = (0, u.Ub)({
      skuId: t
    }), {
      analyticsLocations: v
    } = (0, u.NW)({
      analyticsLocations: null != n ? n : []
    }), A = (0, u.v1)({
      skuId: t
    }), I = (0, i.useMemo)(() => ({
      analyticsLocations: v,
      skuIDs: A,
      setCustomConfettiVisible: h,
      hideConfirmStepConfetti: b,
      confettiCanvas: d
    }), [v, A, h, b, d]);
    return (0, r.jsxs)(a.f5, {
      value: v,
      children: [(0, r.jsx)(u.Kg, {
        environment: c,
        setConfettiCanvas: f,
        customConfettiDisplayOptions: g,
        customConfettiVisible: p
      }), (0, r.jsx)(l.PaymentContextProvider, E(m({}, o), {
        skuIDs: A,
        stepConfigs: o.stepConfigs,
        activeSubscription: null,
        purchaseType: _.VV.ONE_TIME,
        excludeSubscriptionPlansBySKU: true,
        children: (0, r.jsx)(O.Provider, {
          value: I,
          children: s
        })
      }))]
    })
  },
  T = e => {
    let {
      onClose: t,
      step: n
    } = e, {
      isGift: i,
      giftingOrigin: a
    } = (0, o.Pv)();
    return (0, r.jsx)(u.kj, {
      step: n,
      onClose: () => t(false),
      isGift: i,
      giftingOrigin: a
    })
  },
  C = (0, Chunk736843.Mz)(),
  N = e => {
    let {
      renderStep: t,
      paymentModalStepProps: n
    } = e, {
      handleStepChange: r,
      handleClose: i
    } = n, {
      renderLeftColumn: a,
      renderRightColumn: s,
      ctaDisabled: o,
      loading: l
    } = (0, f.eI)({
      handleStepChange: r,
      handleClose: i
    });
    return t({
      paymentModalStepProps: n,
      unifiedStepProps: {
        layout: "two-column",
        renderLeftColumn: a,
        renderRightColumn: s,
        primaryCTAButtonProps: {
          loading: l,
          disabled: o
        }
      }
    })
  },
  R = {
    CustomPaymentContextProvider: S,
    UnifiedCheckoutContextProvider: e => {
      let {
        skuId: t,
        loadId: n,
        analyticsSourceLocation: a,
        renderModalProps: s,
        onClose: o,
        onComplete: l,
        flowSpecificOptions: c,
        children: d
      } = e, f = s.onClose, _ = e => {
        f(), null == o || o(e)
      }, {
        skuIDs: h,
        setCustomConfettiVisible: m,
        analyticsLocations: g
      } = v(), {
        paymentModalSkuId: E,
        paymentModalOnClose: y,
        paymentModalOnComplete: b
      } = (0, u.ot)({
        onClose: _,
        onComplete: l,
        skuIDs: h,
        setCustomConfettiVisible: m
      }), O = (0, i.useMemo)(() => ({
        loadId: n,
        skuId: t,
        analyticsLocations: g,
        analyticsSourceLocation: a,
        flowSpecificOptions: c
      }), [n, t, g, a, c]), A = (0, i.useMemo)(() => ({
        skuId: E,
        onClose: y,
        onComplete: b,
        applicationId: p.FYj,
        initialPlanId: null,
        analyticsLocations: g,
        onStepChange: c.onStepChange,
        hideShadow: true,
        transitionState: s.transitionState,
        returnRef: s.returnRef
      }), [E, y, b, g, c.onStepChange, s.transitionState, s.returnRef]);
      return (0, r.jsx)(C.Provider, {
        value: {
          sharedCheckoutContext: O,
          paymentModalProps: A,
          renderModalProps: s
        },
        children: d
      })
    },
    UnifiedCheckoutCustomHeader: T,
    UnifiedCheckoutStepDefinitions: {
      [Chunk166532.pn.GIFT_CUSTOMIZATION]: {
        StepController: N
      },
      [Chunk166532.pn.REVIEW]: {
        legacyStepConfig: true
      }
    },
    CUSTOM_CONFIRM_STEP_CONFIG: I
  }