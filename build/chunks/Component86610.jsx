/** Chunk was on web.js **/
/** chunk id: 86610, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => g
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk409813 = require("./409813.js"),
  Chunk152521 = require("./152521.js"),
  Chunk108135 = require("./108135.js"),
  Chunk333133 = require("./333133.jsx"),
  Chunk100788 = require("./100788.jsx"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = (e, t) => null != t && t.implemented && t.flowType === e;
class g {
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
  generateCheckoutStepConfigs() {
    return [{
      key: null,
      renderStep: e => (0, r.jsx)(c.I, {
        paymentModalStepProps: e,
        defaultStep: o.h8.REVIEW
      })
    }, {
      key: Chunk409813.h8.REVIEW,
      renderStep: e => (0, r.jsx)(u.z, {
        paymentModalStepProps: e
      }),
      options: {
        useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t.QBnNHq)
      }
    }]
  }
  getApplicationId(e) {
    if (this.checkoutFlow === l.G.ORB_CHECKOUT) return (0, s.Nb)(e)
  }
  openCheckoutModal(e) {
    let {
      skuId: t,
      loadId: o,
      applicationId: s,
      analyticsSourceLocation: l,
      analyticsLocations: c,
      flowSpecificOptions: u,
      onCheckoutSuccess: d,
      modalOptions: f
    } = e, {
      purchaseType: _,
      UnifiedCheckoutContextProvider: h
    } = this.checkoutFlowConfiguration, g = null != o ? o : (0, i.Z)(), {
      modalKey: E
    } = f, b = false, y = this.generateRenderHeader(), O = null != s ? s : this.getApplicationId(t);
    return (0, a.ZDy)(async () => {
      let {
        WrappedUnifiedPaymentModal: e
      } = await n.e("9172").then(n.bind(n, 325906));
      return n => (0, r.jsx)(e, {
        purchaseType: _,
        UnifiedCheckoutContextProvider: h,
        stepConfigs: this.generateCheckoutStepConfigs(),
        renderHeader: y,
        skuId: t,
        loadId: g,
        applicationId: O,
        analyticsLocations: c,
        renderModalProps: n,
        analyticsSourceLocation: l,
        onCheckoutSuccess: e => {
          b || d(e), b = true
        },
        flowSpecificOptions: u
      })
    }, m(p({}, f), {
      onCloseRequest() {
        null != f.onCloseRequest && f.onCloseRequest(b, g), (0, a.Mr3)(E)
      },
      modalKey: E
    }))
  }
  constructor({
    checkoutFlow: e
  }) {
    f(this, "checkoutFlow", true), f(this, "checkoutFlowConfiguration", true), this.checkoutFlow = e;
    let t = l.d[e];
    if (!h(e, t)) throw Error("Checkout flow ".concat(e, " is not implemented"));
    this.checkoutFlowConfiguration = t
  }
}