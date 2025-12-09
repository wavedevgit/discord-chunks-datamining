/** Chunk was on web.js **/
/** chunk id: 86610, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => I
}), require("./388685.js"), require("./539854.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk409813 = require("./409813.js"),
  Chunk346790 = require("./346790.jsx"),
  Chunk791785 = require("./791785.jsx"),
  Chunk961830 = require("./961830.jsx"),
  Chunk152521 = require("./152521.js"),
  Chunk733579 = require("./733579.js"),
  Chunk108135 = require("./108135.js"),
  Chunk147332 = require("./147332.jsx"),
  Chunk333133 = require("./333133.jsx"),
  Chunk100788 = require("./100788.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = (e, t) => null != t && t.implemented && t.flowType === e,
  S = {
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
class I {
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
      renderStep: e => (0, r.jsx)(_.I, {
        paymentModalStepProps: e,
        defaultStep: o.h8.REVIEW
      })
    } : {
      key: null,
      renderStep: e => (0, r.jsx)(l.I, b({}, e))
    }
  }
  getAddPaymentStepConfig() {
    if (this.checkoutFlow === Chunk733579.G.ORB_CHECKOUT);
    else if (this.checkoutFlow === Chunk733579.G.COLLECTIBLES_CHECKOUT) return Chunk346790.n
  }
  getGiftCustomizationStepConfig(e) {
    let {
      isGift: t
    } = e, {
      allowGiftCustomization: n
    } = S[this.checkoutFlow];
    return t && n ? {
      key: o.h8.GIFT_CUSTOMIZATION,
      renderStep: e => (0, r.jsx)(p.P, {
        paymentModalStepProps: e,
        unifiedStepDefinition: this.getUnifiedStepDefinition(o.h8.GIFT_CUSTOMIZATION)
      }),
      options: {
        isLargeModal: true,
        useBreadcrumbLabel: () => g.intl.string(g.t["W685+b"])
      }
    } : true
  }
  getReviewStepConfig() {
    let {
      LEGACY_PAYMENT_STEPS: e = []
    } = this.checkoutFlowConfiguration.TENANT_CHECKOUT_FLOW_CONFIG;
    return module.includes(Chunk409813.h8.REVIEW) ? Chunk961830.wo : {
      key: Chunk409813.h8.REVIEW,
      renderStep: e => (0, r.jsx)(m.z, {
        paymentModalStepProps: e,
        unifiedStepDefinition: this.getUnifiedStepDefinition(o.h8.REVIEW)
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
    } = S[this.checkoutFlow], i = this.getPredicateStepConfig(), a = this.getGiftCustomizationStepConfig({
      isGift: t
    }), s = this.getAddPaymentStepConfig(), l = this.getReviewStepConfig(), u = this.createDefinedStepConfigsArray([i, a, s, ...r ? [] : c.yp, l]);
    return null != n && u.push({
      key: o.h8.CONFIRM,
      renderStep: n.renderStep,
      options: n.options
    }), u
  }
  getApplicationId(e) {
    return this.checkoutFlow === d.G.ORB_CHECKOUT ? (0, u.Nb)(e) : this.checkoutFlow === d.G.COLLECTIBLES_CHECKOUT ? h.XAJ : true
  }
  openCheckoutModal(e) {
    let {
      openModalOptions: t,
      flowSpecificOptions: o,
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
    } = t, g = this.generateRenderHeader(), E = null != f ? f : this.getApplicationId(u), y = false;
    return (0, a.ZDy)(async () => {
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
          null != l && l(e), y = true
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
        flowSpecificOptions: o
      })
    }, O(b({}, t), {
      onCloseRequest() {
        null != t.onCloseRequest && t.onCloseRequest(y, m), (0, a.Mr3)(h)
      },
      modalKey: h
    }))
  }
  constructor({
    checkoutFlow: e
  }) {
    E(this, "checkoutFlow", true), E(this, "checkoutFlowConfiguration", true), E(this, "tenantCheckoutFlowConfig", true), this.checkoutFlow = e;
    let t = f.d[e];
    if (!v(e, t)) throw Error("Checkout flow ".concat(e, " is not implemented"));
    this.checkoutFlowConfiguration = t, this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG
  }
}