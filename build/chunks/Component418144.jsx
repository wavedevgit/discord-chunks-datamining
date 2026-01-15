/** Chunk was on web.js **/
/** chunk id: 418144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NB: () => P
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk467368 = require("./467368.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk608579 = require("./608579.jsx"),
  Chunk49308 = require("./49308.jsx"),
  Chunk117652 = require("./117652.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js");

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

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let O = (0, Chunk473749.createContext)({
    setCustomConfettiVisible: () => {},
    confettiCanvas: null,
    hideConfirmStepConfetti: false,
    skuIDs: [],
    analyticsLocations: []
  }),
  v = () => (0, i.useContext)(O),
  S = e => {
    let {
      analyticsLocations: t,
      hideConfirmStepConfetti: n,
      confettiCanvas: i
    } = v();
    return (0, r.jsx)(d.x, m({
      analyticsLocations: t,
      hideConfetti: n,
      confettiCanvas: i
    }, e))
  },
  I = {
    renderStep: e => (0, r.jsx)(S, m({}, e)),
    options: Chunk608579.Kf
  },
  T = e => {
    var {
      skuId: t,
      analyticsLocations: n,
      children: o
    } = e, s = b(e, ["skuId", "analyticsLocations", "children"]);
    let {
      environment: c,
      confettiCanvas: d,
      setConfettiCanvas: f,
      customConfettiVisible: p,
      setCustomConfettiVisible: h,
      customConfettiDisplayOptions: g,
      hideConfirmStepConfetti: y
    } = (0, u.dc)({
      skuId: t
    }), {
      analyticsLocations: v
    } = (0, u.Jb)({
      analyticsLocations: null != n ? n : []
    }), S = (0, u.Af)({
      skuId: t
    }), I = (0, i.useMemo)(() => ({
      analyticsLocations: v,
      skuIDs: S,
      setCustomConfettiVisible: h,
      hideConfirmStepConfetti: y,
      confettiCanvas: d
    }), [v, S, h, y, d]);
    return (0, r.jsxs)(a.Gt, {
      value: v,
      children: [(0, r.jsx)(u.sy, {
        environment: c,
        setConfettiCanvas: f,
        customConfettiDisplayOptions: g,
        customConfettiVisible: p
      }), (0, r.jsx)(l.PaymentContextProvider, E(m({}, s), {
        skuIDs: S,
        stepConfigs: s.stepConfigs,
        activeSubscription: null,
        purchaseType: _.GZ.ONE_TIME,
        excludeSubscriptionPlansBySKU: true,
        children: (0, r.jsx)(O.Provider, {
          value: I,
          children: o
        })
      }))]
    })
  },
  C = e => {
    let {
      onClose: t,
      step: n
    } = e, {
      isGift: i,
      giftingOrigin: a
    } = (0, s.wD)();
    return (0, r.jsx)(u.tw, {
      step: n,
      onClose: () => t(false),
      isGift: i,
      giftingOrigin: a
    })
  },
  A = (0, Chunk467368.Dz)(),
  N = e => {
    let {
      renderStep: t,
      paymentModalStepProps: n
    } = e, {
      handleStepChange: r,
      handleClose: i
    } = n, {
      renderLeftColumn: a,
      renderRightColumn: o,
      ctaDisabled: s,
      loading: l
    } = (0, f.YX)({
      handleStepChange: r,
      handleClose: i
    });
    return t({
      paymentModalStepProps: n,
      unifiedStepProps: {
        layout: "two-column",
        renderLeftColumn: a,
        renderRightColumn: o,
        primaryCTAButtonProps: {
          loading: l,
          disabled: s
        }
      }
    })
  },
  P = {
    CustomPaymentContextProvider: T,
    UnifiedCheckoutContextProvider: e => {
      let {
        skuId: t,
        loadId: n,
        analyticsSourceLocation: a,
        renderModalProps: o,
        onClose: s,
        onComplete: l,
        flowSpecificOptions: c,
        children: d
      } = e, f = o.onClose, _ = e => {
        f(), null == s || s(e)
      }, {
        skuIDs: h,
        setCustomConfettiVisible: m,
        analyticsLocations: g
      } = v(), {
        paymentModalSkuId: E,
        paymentModalOnClose: b,
        paymentModalOnComplete: y
      } = (0, u.$g)({
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
      }), [n, t, g, a, c]), S = (0, i.useMemo)(() => ({
        skuId: E,
        onClose: b,
        onComplete: y,
        applicationId: p.XAJ,
        initialPlanId: null,
        analyticsLocations: g,
        onStepChange: c.onStepChange,
        hideShadow: true,
        transitionState: o.transitionState,
        returnRef: o.returnRef
      }), [E, b, y, g, c.onStepChange, o.transitionState, o.returnRef]);
      return (0, r.jsx)(A.Provider, {
        value: {
          sharedCheckoutContext: O,
          paymentModalProps: S,
          renderModalProps: o
        },
        children: d
      })
    },
    UnifiedCheckoutCustomHeader: C,
    UnifiedCheckoutStepDefinitions: {
      [Chunk409813.h8.GIFT_CUSTOMIZATION]: {
        StepController: N
      },
      [Chunk409813.h8.REVIEW]: {
        legacyStepConfig: true
      }
    },
    CUSTOM_CONFIRM_STEP_CONFIG: I
  }