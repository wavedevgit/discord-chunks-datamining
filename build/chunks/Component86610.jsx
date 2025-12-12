/** Chunk was on web.js **/
/** chunk id: 86610, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => T
}), require("./388685.js"), require("./539854.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk409813 = require("./409813.js"),
  Chunk791785 = require("./791785.jsx"),
  Chunk961830 = require("./961830.jsx"),
  Chunk152521 = require("./152521.js"),
  Chunk733579 = require("./733579.js"),
  Chunk508869 = require("./508869.js"),
  Chunk108135 = require("./108135.js"),
  Chunk899560 = require("./899560.jsx"),
  Chunk147332 = require("./147332.jsx"),
  Chunk333133 = require("./333133.jsx"),
  Chunk100788 = require("./100788.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = (e, t) => null != t && t.implemented && t.flowType === e,
  I = {
    [Chunk733579.G.ORB_CHECKOUT]: {
      allowGiftCustomization: false,
      disablePaymentAuthSteps: true
    },
    [Chunk733579.G.COLLECTIBLES_CHECKOUT]: {
      allowGiftCustomization: true
    },
    [Chunk733579.G.PREMIUM_CHECKOUT]: {
      allowGiftCustomization: false
    }
  };
class T {
  getUnifiedStepDefinition(e) {
    return this.tenantCheckoutFlowConfig.UnifiedCheckoutStepDefinitions[e]
  }
  generateRenderHeader() {
    let {
      UnifiedCheckoutCustomHeader: e
    } = this.tenantCheckoutFlowConfig;
    if (null != module) return (t, n, i) => (0, r.jsx)(e, {
      plan: t,
      onClose: n,
      step: i
    })
  }
  getPredicateStepConfig() {
    return this.checkoutFlow === Chunk733579.G.COLLECTIBLES_CHECKOUT ? Chunk961830.WA : this.checkoutFlow === Chunk733579.G.ORB_CHECKOUT ? {
      key: null,
      renderStep: e => (0, r.jsx)(m.I, {
        paymentModalStepProps: e,
        defaultStep: a.h8.REVIEW
      })
    } : {
      key: null,
      renderStep: e => (0, r.jsx)(s.I, y({}, e))
    }
  }
  getAddPaymentStepConfig(e) {
    let {
      isGift: t
    } = e, {
      allowGiftCustomization: n
    } = this.internalCheckoutFlowControls;
    if (this.checkoutFlow !== u.G.ORB_CHECKOUT) return {
      key: a.h8.ADD_PAYMENT_STEPS,
      renderStep: e => (0, r.jsx)(p.a, {
        paymentModalStepProps: e,
        returnStep: a.h8.REVIEW,
        returnStepIfNoPaymentSources: t && n ? a.h8.GIFT_CUSTOMIZATION : true
      }),
      options: {
        renderHeader: true
      }
    }
  }
  getGiftCustomizationStepConfig(e) {
    let {
      isGift: t
    } = e, {
      allowGiftCustomization: n
    } = this.internalCheckoutFlowControls;
    return t && n ? {
      key: a.h8.GIFT_CUSTOMIZATION,
      renderStep: e => (0, r.jsx)(_.P, {
        paymentModalStepProps: e,
        unifiedStepDefinition: this.getUnifiedStepDefinition(a.h8.GIFT_CUSTOMIZATION)
      }),
      options: {
        isLargeModal: true,
        useBreadcrumbLabel: () => E.intl.string(E.t["W685+b"])
      }
    } : true
  }
  getReviewStepConfig() {
    let e = this.getUnifiedStepDefinition(Chunk409813.h8.REVIEW);
    return (0, Chunk508869._)(module) ? Chunk961830.wo : {
      key: Chunk409813.h8.REVIEW,
      renderStep: t => (0, r.jsx)(h.z, {
        paymentModalStepProps: t,
        unifiedStepDefinition: e
      }),
      options: {
        useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t.QBnNHq)
      }
    }
  }
  createDefinedStepConfigsArray(e) {
    return e.filter(e => null != e)
  }
  generateCheckoutStepConfigs(e) {
    let {
      isGift: t
    } = e, {
      CUSTOM_CONFIRM_STEP_CONFIG: n
    } = this.tenantCheckoutFlowConfig, {
      disablePaymentAuthSteps: r
    } = this.internalCheckoutFlowControls, i = this.getPredicateStepConfig(), o = this.getGiftCustomizationStepConfig({
      isGift: t
    }), s = this.getAddPaymentStepConfig({
      isGift: t
    }), c = this.getReviewStepConfig(), u = this.createDefinedStepConfigsArray([i, o, s, ...r ? [] : l.yp, c]);
    return null != n && u.push({
      key: a.h8.CONFIRM,
      renderStep: n.renderStep,
      options: n.options
    }), u
  }
  getApplicationId(e) {
    return this.checkoutFlow === u.G.ORB_CHECKOUT ? (0, c.Nb)(e) : this.checkoutFlow === u.G.COLLECTIBLES_CHECKOUT ? g.XAJ : true
  }
  openCheckoutModal(e) {
    let {
      openModalOptions: t,
      flowSpecificOptions: a,
      giftContextProps: s,
      onComplete: l,
      onClose: c,
      skuId: u,
      loadId: d,
      applicationId: f,
      analyticsSourceLocation: p,
      analyticsLocations: _
    } = e, m = null != d ? d : (0, i.Z)(), {
      modalKey: h
    } = t, g = this.generateRenderHeader(), E = null != f ? f : this.getApplicationId(u), b = false;
    return (0, o.ZDy)(async () => {
      let {
        WrappedUnifiedPaymentModal: e
      } = await n.e("9172").then(n.bind(n, 325906));
      return t => (0, r.jsx)(e, {
        checkoutFlow: this.checkoutFlow,
        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
        stepConfigs: this.generateCheckoutStepConfigs({
          isGift: !!(null != s && s.isGift)
        }),
        onComplete: e => {
          null != l && l(e), b = true
        },
        onClose: c,
        renderHeader: g,
        skuId: u,
        loadId: m,
        applicationId: E,
        analyticsLocations: _,
        analyticsSourceLocation: p,
        renderModalProps: t,
        giftContextProps: s,
        flowSpecificOptions: a
      })
    }, v(y({}, t), {
      onCloseRequest() {
        null != t.onCloseRequest && t.onCloseRequest(b, m), (0, o.Mr3)(h)
      },
      modalKey: h
    }))
  }
  constructor({
    checkoutFlow: e
  }) {
    b(this, "checkoutFlow", true), b(this, "checkoutFlowConfiguration", true), b(this, "tenantCheckoutFlowConfig", true), b(this, "internalCheckoutFlowControls", true), this.checkoutFlow = e;
    let t = f.d[e];
    if (!S(e, t)) throw Error("Checkout flow ".concat(e, " is not implemented"));
    this.checkoutFlowConfiguration = t, this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG, this.internalCheckoutFlowControls = I[e]
  }
}