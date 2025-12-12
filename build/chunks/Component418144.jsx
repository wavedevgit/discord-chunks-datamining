/** Chunk was on web.js **/
/** chunk id: 418144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NB: () => R
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
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
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

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let v = (0, Chunk473749.createContext)({
    setCustomConfettiVisible: () => {},
    confettiCanvas: null,
    hideConfirmStepConfetti: false,
    skipConfirm: false,
    skuIDs: [],
    analyticsLocations: []
  }),
  S = () => (0, Chunk473749.useContext)(v),
  I = e => {
    let {
      analyticsLocations: t,
      hideConfirmStepConfetti: n,
      confettiCanvas: i
    } = S();
    return (0, r.jsx)(d.x, g({
      analyticsLocations: t,
      hideConfetti: n,
      confettiCanvas: i
    }, e))
  },
  T = {
    renderStep: e => (0, r.jsx)(I, g({}, e)),
    options: Chunk608579.Kf
  },
  C = e => {
    var {
      skuId: t,
      analyticsLocations: n,
      children: a
    } = e, s = y(e, ["skuId", "analyticsLocations", "children"]);
    let {
      environment: c,
      confettiCanvas: d,
      setConfettiCanvas: f,
      customConfettiVisible: p,
      setCustomConfettiVisible: m,
      customConfettiDisplayOptions: h,
      hideConfirmStepConfetti: E
    } = (0, u.dc)({
      skuId: t
    }), {
      analyticsLocations: O
    } = (0, u.Jb)({
      analyticsLocations: null != n ? n : []
    }), {
      skuIDs: S,
      skipConfirm: I
    } = (0, u.Af)({
      skuId: t
    }), T = (0, i.useMemo)(() => ({
      analyticsLocations: O,
      skuIDs: S,
      skipConfirm: I,
      setCustomConfettiVisible: m,
      hideConfirmStepConfetti: E,
      confettiCanvas: d
    }), [O, S, I, m, E, d]);
    return (0, r.jsxs)(o.Gt, {
      value: O,
      children: [(0, r.jsx)(u.sy, {
        environment: c,
        setConfettiCanvas: f,
        customConfettiDisplayOptions: h,
        customConfettiVisible: p
      }), (0, r.jsx)(l.PaymentContextProvider, b(g({}, s), {
        skuIDs: S,
        stepConfigs: s.stepConfigs,
        activeSubscription: null,
        purchaseType: _.GZ.ONE_TIME,
        excludeSubscriptionPlansBySKU: true,
        children: (0, r.jsx)(v.Provider, {
          value: T,
          children: a
        })
      }))]
    })
  },
  A = e => {
    let {
      onClose: t,
      step: n
    } = e, {
      isGift: i,
      giftingOrigin: o
    } = (0, s.wD)();
    return (0, r.jsx)(u.tw, {
      step: n,
      onClose: () => t(false),
      isGift: i,
      giftingOrigin: o
    })
  },
  N = (0, Chunk467368.Dz)(),
  P = e => {
    let {
      renderStep: t,
      paymentModalStepProps: n
    } = e, {
      handleStepChange: r,
      handleClose: i
    } = n, {
      leftColumnComponent: o,
      rightColumnComponent: a,
      onStepChange: s,
      ctaDisabled: u,
      loading: d
    } = (0, f.YX)({
      handleStepChange: r,
      handleClose: i
    }), {
      hasPaymentSources: p
    } = (0, l.JL)(), _ = p ? c.h8.REVIEW : c.h8.ADD_PAYMENT_STEPS;
    return t({
      unifiedStepProps: {
        leftColumnComponent: o,
        rightColumnComponent: a,
        primaryCTAButtonProps: {
          onClick: () => s(_),
          loading: d,
          text: m.intl.string(m.t.XiOHRX),
          disabled: u
        }
      }
    })
  },
  R = {
    CustomPaymentContextProvider: C,
    UnifiedCheckoutContextProvider: e => {
      let {
        skuId: t,
        loadId: n,
        analyticsSourceLocation: o,
        renderModalProps: a,
        onClose: s,
        onComplete: l,
        flowSpecificOptions: c,
        children: d
      } = e, f = a.onClose, _ = e => {
        f(), null == s || s(e)
      }, {
        skuIDs: m,
        skipConfirm: h,
        setCustomConfettiVisible: g,
        analyticsLocations: E
      } = S(), {
        paymentModalSkuId: b,
        paymentModalOnClose: y,
        paymentModalOnComplete: O
      } = (0, u.$g)({
        onClose: _,
        onComplete: l,
        skuIDs: m,
        setCustomConfettiVisible: g
      }), v = (0, i.useMemo)(() => ({
        loadId: n,
        skuId: t,
        analyticsLocations: E,
        analyticsSourceLocation: o,
        flowSpecificOptions: c
      }), [n, t, E, o, c]), I = (0, i.useMemo)(() => ({
        skuId: b,
        onClose: y,
        onComplete: O,
        applicationId: p.XAJ,
        initialPlanId: null,
        analyticsLocations: E,
        onStepChange: c.onStepChange,
        skipConfirm: h,
        hideShadow: true,
        transitionState: a.transitionState,
        returnRef: a.returnRef
      }), [b, y, O, E, c.onStepChange, h, a.transitionState, a.returnRef]);
      return (0, r.jsx)(N.Provider, {
        value: {
          sharedCheckoutContext: v,
          paymentModalProps: I,
          renderModalProps: a
        },
        children: d
      })
    },
    UnifiedCheckoutCustomHeader: A,
    UnifiedCheckoutStepDefinitions: {
      [Chunk409813.h8.GIFT_CUSTOMIZATION]: {
        StepController: P
      },
      [Chunk409813.h8.REVIEW]: {
        legacyStepConfig: true
      }
    },
    CUSTOM_CONFIRM_STEP_CONFIG: T
  }