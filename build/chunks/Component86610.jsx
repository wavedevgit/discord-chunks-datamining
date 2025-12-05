/** Chunk was on web.js **/
/** chunk id: 86610, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => y
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk409813 = require("./409813.js"),
  Chunk152521 = require("./152521.js"),
  Chunk733579 = require("./733579.js"),
  Chunk108135 = require("./108135.js"),
  Chunk147332 = require("./147332.jsx"),
  Chunk333133 = require("./333133.jsx"),
  Chunk100788 = require("./100788.jsx"),
  Chunk388032 = require("./388032.jsx");

function _(e, t, n) {
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
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = (e, t) => null != t && t.implemented && t.flowType === e,
  b = {
    [Chunk733579.GE.ORB_CHECKOUT]: {
      allowGifting: false
    },
    [Chunk733579.GE.COLLECTIBLES_CHECKOUT]: {
      allowGifting: true
    },
    [Chunk733579.GE.PREMIUM_CHECKOUT]: {
      allowGifting: true
    }
  };
class y {
  generateRenderHeader() {
    let {
      UnifiedCheckoutCustomHeader: e
    } = this.checkoutFlowConfiguration;
    if (null != module) return (t, n, i) => (0, r.jsx)(e, {
      plan: t,
      onClose: n,
      step: i
    })
  }
  generateCheckoutStepConfigs(e) {
    let {
      hasGiftCustomization: t
    } = e, n = {
      key: null,
      renderStep: e => (0, r.jsx)(d.I, {
        paymentModalStepProps: e,
        defaultStep: o.h8.REVIEW
      })
    }, i = {
      key: o.h8.REVIEW,
      renderStep: e => (0, r.jsx)(f.z, {
        paymentModalStepProps: e
      }),
      options: {
        useBreadcrumbLabel: () => p.intl.string(p.t.QBnNHq)
      }
    }, {
      allowGifting: a
    } = b[this.checkoutFlow];
    return [n, ...t && a ? [{
      key: o.h8.GIFT_CUSTOMIZATION,
      renderStep: e => (0, r.jsx)(u.P, {
        paymentModalStepProps: e
      }),
      options: {}
    }] : [], i]
  }
  getApplicationId(e) {
    if (this.checkoutFlow === l.GE.ORB_CHECKOUT) return (0, s.Nb)(e)
  }
  openCheckoutModal(e) {
    let {
      openModalOptions: t,
      flowSpecificOptions: o,
      giftContextProps: s,
      onCheckoutSuccess: l,
      skuId: c,
      loadId: u,
      applicationId: d,
      analyticsSourceLocation: f,
      analyticsLocations: p
    } = e, _ = null != u ? u : (0, i.Z)(), {
      modalKey: h
    } = t, E = false, b = this.generateRenderHeader(), y = null != d ? d : this.getApplicationId(c);
    return (0, a.ZDy)(async () => {
      let {
        WrappedUnifiedPaymentModal: e
      } = await n.e("9172").then(n.bind(n, 325906));
      return t => (0, r.jsx)(e, {
        checkoutFlow: this.checkoutFlow,
        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
        stepConfigs: this.generateCheckoutStepConfigs({
          hasGiftCustomization: null != s
        }),
        renderHeader: b,
        skuId: c,
        loadId: _,
        applicationId: y,
        analyticsLocations: p,
        analyticsSourceLocation: f,
        renderModalProps: t,
        giftContextProps: s,
        onCheckoutSuccess: e => {
          E || l(e), E = true
        },
        flowSpecificOptions: o
      })
    }, g(m({}, t), {
      onCloseRequest() {
        null != t.onCloseRequest && t.onCloseRequest(E, _), (0, a.Mr3)(h)
      },
      modalKey: h
    }))
  }
  constructor({
    checkoutFlow: e
  }) {
    _(this, "checkoutFlow", true), _(this, "checkoutFlowConfiguration", true), this.checkoutFlow = e;
    let t = c.d[e];
    if (!E(e, t)) throw Error("Checkout flow ".concat(e, " is not implemented"));
    this.checkoutFlowConfiguration = t
  }
}