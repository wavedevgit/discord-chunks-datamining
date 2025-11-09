/** Chunk was on web.js **/
/** chunk id: 502109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ch: () => C,
  Tr: () => A
}), require("./642613.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk710845 = require("./710845.js"),
  Chunk219929 = require("./219929.jsx"),
  Chunk857192 = require("./857192.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk622999 = require("./622999.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk975963 = require("./975963.js");

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
  if (null == e) return {};
  var n, r, i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let I = new Chunk710845.Z("PaymentRequest"),
  S = Object.values({
    applePay: "applePay",
    googlePay: "googlePay",
    link: "link",
    browserCard: "browserCard"
  });
class T extends Chunk647438.Component {
  componentDidMount() {
    (0, Chunk358085.isDesktop)() || (this.disableWallets = S.filter(e => e !== this.paymentRequestWallet).sort(), (0, Chunk622999.d2)().then(e => {
      this.initPaymentRequest(e)
    }))
  }
  logInfo(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    (this.isUserStaff || d.default.isLoggingAnalyticsEvents) && I.info("[".concat(this.paymentRequestWalletName, "] ").concat(e), ...n)
  }
  validatePaymentRequest() {
    let {
      paymentRequest: e,
      canMakePaymentResult: t
    } = this.state;
    if (null == module) {
      let e = "Payment request is not ready";
      return this.logInfo(module), {
        available: false,
        errorMessage: module
      }
    }
    if (null == exports) {
      let e = "Payment request is unavailable or has not been set up in this browser. ";
      return this.logInfo(module, "Stripe canMakePaymentResult: ", exports), {
        available: false,
        errorMessage: module
      }
    }
    return {
      available: true,
      errorMessage: null
    }
  }
  initPaymentRequestCallback(e) {
    let {
      available: t
    } = this.validatePaymentRequest();
    t ? this.onValidPaymentRequest() : this.onPaymentRequestFailure()
  }
  onPaymentRequestFailure() {
    true !== this.props.onPaymentRequestFailure && this.props.onPaymentRequestFailure()
  }
  trackAnalyticsEvent(e) {
    let {
      paymentRequestPaymentContext: t
    } = this.props;
    if (true === t) return null;
    let {
      contextMetadata: n,
      activitySessionId: r
    } = t, i = {
      load_id: n.loadId,
      payment_request_wallet: this.paymentRequestWallet,
      activity_session_id: r
    };
    f.default.track(e, i)
  }
  onValidPaymentRequest() {
    this.trackAnalyticsEvent(Chunk981631.rMx.PAYMENT_REQUEST_LOADED), true !== this.props.onValidPaymentRequest && this.props.onValidPaymentRequest()
  }
  renderButton(e) {
    var {
      iconType: t,
      buttonText: n
    } = e, i = O(e, ["iconType", "buttonText"]);
    return (0, r.jsx)(s.zxk, y({
      fullWidth: true,
      onClick: this.attemptPaymentRequest,
      text: n,
      loading: this.state.submitting,
      icon: () => {
        var e;
        return (0, r.jsx)(u.ZP, {
          className: null != (e = this.props.iconClassName) ? e : E.buttonIcon,
          type: t
        })
      }
    }, i), m.HeQ.PAYMENT_REQUEST)
  }
  renderConnectorView() {
    return (0, Chunk951288.jsxs)("div", {
      className: this.props.className,
      children: [(0, Chunk951288.jsx)(Chunk219929.ZP, {
        type: Chunk219929.ZP.Types.PAYMENT_REQUEST,
        size: Chunk219929.Uy.MEDIUM,
        className: Chunk975963.paymentRequestIcon
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        className: Chunk975963.connectionInstructions,
        children: Chunk388032.intl.string(Chunk388032.t.f19PPV)
      })]
    })
  }
  renderMain() {
    return this.props.renderConnectorView ? this.renderConnectorView() : this.renderButton({
      iconType: Chunk219929.ZP.Types.PAYMENT_REQUEST,
      buttonText: Chunk388032.intl.string(Chunk388032.t.f19PPV),
      loading: !(0, Chunk358085.isDesktop)() && this.state.submitting
    })
  }
  render() {
    if ((0, Chunk358085.isDesktop)()) return this.renderMain();
    if (this.state.submitting) return this.props.loadingComponent;
    let {
      available: e
    } = this.validatePaymentRequest();
    return module ? this.renderMain() : null
  }
  constructor(...e) {
    super(...e), b(this, "initialState", {
      submitting: true,
      paymentRequest: null,
      canMakePaymentResult: null
    }), b(this, "state", y({}, this.initialState)), b(this, "disableWallets", []), b(this, "isUserStaff", (0, h.vP)()), b(this, "initPaymentRequest", async e => {
      if (null == e) return;
      this.setState({
        submitting: true,
        paymentRequest: null,
        canMakePaymentResult: null
      });
      let t = e.paymentRequest({
        country: "US",
        currency: "usd",
        total: {
          label: this.props.paymentLabel,
          amount: 0,
          pending: true
        },
        disableWallets: this.disableWallets,
        requestPayerName: true
      });
      null != this.props.paymentRequestRef && (this.props.paymentRequestRef.current = t);
      let {
        onStripePaymentMethodReceived: n
      } = this.props;
      t.on("paymentmethod", e => {
        let {
          complete: t,
          paymentMethod: r,
          payerName: i
        } = e;
        n(r, i), this.trackAnalyticsEvent(m.rMx.PAYMENT_REQUEST_COMPLETED), t("success")
      }), t.on("cancel", () => {
        n(null)
      });
      let r = await t.canMakePayment();
      return this.logInfo("PaymentRequest availability check canMakePayment result: ", r), this.setState({
        submitting: false,
        paymentRequest: t,
        canMakePaymentResult: r
      }, () => {
        this.initPaymentRequestCallback(r)
      }), r
    }), b(this, "attemptPaymentRequest", () => {
      if ((0, _.isDesktop)()) return void this.props.onChooseType(m.HeQ.PAYMENT_REQUEST, this.paymentRequestWallet);
      let {
        available: e
      } = this.validatePaymentRequest();
      if (!e) return void this.onPaymentRequestFailure();
      let {
        paymentRequest: t
      } = this.state;
      e && null != t && (t.show(), this.props.onChooseType(m.HeQ.PAYMENT_REQUEST, this.paymentRequestWallet))
    })
  }
}
class A extends T {
  validatePaymentRequest() {
    let {
      paymentRequest: e,
      canMakePaymentResult: t
    } = this.state;
    if (null == module) {
      let e = "Payment request is not ready";
      return this.logInfo(module), {
        available: false,
        errorMessage: module
      }
    }
    if (null == exports || !exports.googlePay) {
      let e = "Google Pay is unavailable or has not been set up in this browser. ";
      return this.logInfo(module, "Stripe canMakePaymentResult: ", exports), {
        available: false,
        errorMessage: module
      }
    }
    return {
      available: true,
      errorMessage: null
    }
  }
  renderConnectorView() {
    return (0, Chunk951288.jsxs)("div", {
      className: this.props.className,
      children: [(0, Chunk951288.jsx)(Chunk219929.ZP, {
        type: Chunk219929.ZP.Types.G_PAY,
        size: Chunk219929.Uy.MEDIUM,
        className: Chunk975963.paymentRequestIcon
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        className: Chunk975963.connectionInstructions,
        children: Chunk388032.intl.string(Chunk388032.t.ueoGef)
      })]
    })
  }
  renderMain() {
    return this.props.renderConnectorView ? this.renderConnectorView() : this.renderButton({
      iconType: Chunk219929.ZP.Types.G_PAY,
      buttonText: Chunk388032.intl.string(Chunk388032.t.p2jr2E),
      loading: !(0, Chunk358085.isDesktop)() && this.state.submitting
    })
  }
  constructor(...e) {
    super(...e), b(this, "state", y({}, this.initialState)), b(this, "paymentRequestWallet", "googlePay"), b(this, "paymentRequestWalletName", "Google Pay")
  }
}
class C extends T {
  validatePaymentRequest() {
    let {
      paymentRequest: e,
      canMakePaymentResult: t
    } = this.state;
    if (null == module) {
      let e = "Payment request is not ready";
      return this.logInfo(module), {
        available: false,
        errorMessage: module
      }
    }
    if (null == exports || !exports.applePay) {
      let e = "Apple Pay is unavailable or has not been set up in this browser. ";
      return this.logInfo(module, "Stripe canMakePaymentResult: ", exports), {
        available: false,
        errorMessage: module
      }
    }
    return {
      available: true,
      errorMessage: null
    }
  }
  renderConnectorView() {
    return (0, Chunk951288.jsxs)("div", {
      className: this.props.className,
      children: [(0, Chunk951288.jsx)(Chunk219929.ZP, {
        type: Chunk219929.ZP.Types.APPLE,
        size: Chunk219929.Uy.MEDIUM,
        className: o()(Chunk975963.paymentRequestIcon, Chunk975963.appleConnectorIcon)
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        className: Chunk975963.connectionInstructions,
        children: Chunk388032.intl.string(Chunk388032.t.iv8pQV)
      })]
    })
  }
  renderMain() {
    return this.props.renderConnectorView ? this.renderConnectorView() : this.renderButton({
      iconType: Chunk219929.ZP.Types.APPLE_LIGHT,
      buttonText: Chunk388032.intl.string(Chunk388032.t.xdGS1o),
      loading: !(0, Chunk358085.isDesktop)() && this.state.submitting
    })
  }
  constructor(...e) {
    super(...e), b(this, "state", y({}, this.initialState)), b(this, "paymentRequestWallet", "applePay"), b(this, "paymentRequestWalletName", "Apple Pay")
  }
}