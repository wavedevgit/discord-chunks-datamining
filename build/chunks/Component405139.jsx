/** Chunk was on web.js **/
/** chunk id: 405139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mv: () => C,
  dP: () => T
}), require("./638769.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk626584 = require("./626584.js"),
  Chunk812745 = require("./812745.jsx"),
  Chunk111162 = require("./111162.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk71532 = require("./71532.js"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk205207 = require("./205207.js");

function y(e, t, n) {
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
      y(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = v(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let A = new Chunk626584.A("PaymentRequest"),
  I = Object.values({
    applePay: "applePay",
    googlePay: "googlePay",
    link: "link",
    browserCard: "browserCard"
  });
class S extends Chunk64700.Component {
  componentDidMount() {
    (0, p.isDesktop)() || (this.disableWallets = I.filter(e => e !== this.paymentRequestWallet).sort(), (0, _.Cv)().then(e => {
      this.initPaymentRequest(e)
    }))
  }
  logInfo(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    (this.isUserStaff || d.default.isLoggingAnalyticsEvents) && A.info("[".concat(this.paymentRequestWalletName, "] ").concat(e), ...n)
  }
  validatePaymentRequest() {
    let {
      paymentRequest: e,
      canMakePaymentResult: t
    } = this.state;
    if (null == e) {
      let e = "Payment request is not ready";
      return this.logInfo(e), {
        available: false,
        errorMessage: e
      }
    }
    if (null == t) {
      let e = "Payment request is unavailable or has not been set up in this browser. ";
      return this.logInfo(e, "Stripe canMakePaymentResult: ", t), {
        available: false,
        errorMessage: e
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
    this.trackAnalyticsEvent(m.HAw.PAYMENT_REQUEST_LOADED), true !== this.props.onValidPaymentRequest && this.props.onValidPaymentRequest()
  }
  renderButton(e) {
    let {
      iconType: t,
      buttonText: n
    } = e, i = O(e, ["iconType", "buttonText"]);
    return (0, r.jsx)(s.$nd, b({
      fullWidth: true,
      onClick: this.attemptPaymentRequest,
      text: n,
      loading: this.state.submitting,
      icon: () => {
        var e;
        return (0, r.jsx)(u.Ay, {
          className: null != (e = this.props.iconClassName) ? e : E.iA,
          type: t
        })
      }
    }, i), m.hes.PAYMENT_REQUEST)
  }
  renderConnectorView() {
    return (0, r.jsxs)("div", {
      className: this.props.className,
      children: [(0, r.jsx)(u.Ay, {
        type: u.Ay.Types.PAYMENT_REQUEST,
        size: u.y3.MEDIUM,
        className: E.rS
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/medium",
        className: E.yW,
        children: g.intl.string(g.t.f19PPV)
      })]
    })
  }
  renderMain() {
    return this.props.renderConnectorView ? this.renderConnectorView() : this.renderButton({
      iconType: u.Ay.Types.PAYMENT_REQUEST,
      buttonText: g.intl.string(g.t.f19PPV),
      loading: !(0, p.isDesktop)() && this.state.submitting
    })
  }
  render() {
    if ((0, p.isDesktop)()) return this.renderMain();
    if (this.state.submitting) return this.props.loadingComponent;
    let {
      available: e
    } = this.validatePaymentRequest();
    return e ? this.renderMain() : null
  }
  constructor(...e) {
    super(...e), y(this, "initialState", {
      submitting: true,
      paymentRequest: null,
      canMakePaymentResult: null
    }), y(this, "state", b({}, this.initialState)), y(this, "disableWallets", []), y(this, "isUserStaff", (0, h.Gn)()), y(this, "initPaymentRequest", async e => {
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
        n(r, i), this.trackAnalyticsEvent(m.HAw.PAYMENT_REQUEST_COMPLETED), t("success")
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
    }), y(this, "attemptPaymentRequest", () => {
      if ((0, p.isDesktop)()) return void this.props.onChooseType(m.hes.PAYMENT_REQUEST, this.paymentRequestWallet);
      let {
        available: e
      } = this.validatePaymentRequest();
      if (!e) return void this.onPaymentRequestFailure();
      let {
        paymentRequest: t
      } = this.state;
      e && null != t && (t.show(), this.props.onChooseType(m.hes.PAYMENT_REQUEST, this.paymentRequestWallet))
    })
  }
}
class T extends S {
  validatePaymentRequest() {
    let {
      paymentRequest: e,
      canMakePaymentResult: t
    } = this.state;
    if (null == e) {
      let e = "Payment request is not ready";
      return this.logInfo(e), {
        available: false,
        errorMessage: e
      }
    }
    if (null == t || !t.googlePay) {
      let e = "Google Pay is unavailable or has not been set up in this browser. ";
      return this.logInfo(e, "Stripe canMakePaymentResult: ", t), {
        available: false,
        errorMessage: e
      }
    }
    return {
      available: true,
      errorMessage: null
    }
  }
  renderConnectorView() {
    return (0, r.jsxs)("div", {
      className: this.props.className,
      children: [(0, r.jsx)(u.Ay, {
        type: u.Ay.Types.G_PAY,
        size: u.y3.MEDIUM,
        className: E.rS
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/medium",
        className: E.yW,
        children: g.intl.string(g.t.ueoGef)
      })]
    })
  }
  renderMain() {
    return this.props.renderConnectorView ? this.renderConnectorView() : this.renderButton({
      iconType: u.Ay.Types.G_PAY,
      buttonText: g.intl.string(g.t.p2jr2E),
      loading: !(0, p.isDesktop)() && this.state.submitting
    })
  }
  constructor(...e) {
    super(...e), y(this, "state", b({}, this.initialState)), y(this, "paymentRequestWallet", "googlePay"), y(this, "paymentRequestWalletName", "Google Pay")
  }
}
class C extends S {
  validatePaymentRequest() {
    let {
      paymentRequest: e,
      canMakePaymentResult: t
    } = this.state;
    if (null == e) {
      let e = "Payment request is not ready";
      return this.logInfo(e), {
        available: false,
        errorMessage: e
      }
    }
    if (null == t || !t.applePay) {
      let e = "Apple Pay is unavailable or has not been set up in this browser. ";
      return this.logInfo(e, "Stripe canMakePaymentResult: ", t), {
        available: false,
        errorMessage: e
      }
    }
    return {
      available: true,
      errorMessage: null
    }
  }
  renderConnectorView() {
    return (0, r.jsxs)("div", {
      className: this.props.className,
      children: [(0, r.jsx)(u.Ay, {
        type: u.Ay.Types.APPLE,
        size: u.y3.MEDIUM,
        className: o()(E.rS, E.X6)
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/medium",
        className: E.yW,
        children: g.intl.string(g.t.iv8pQV)
      })]
    })
  }
  renderMain() {
    return this.props.renderConnectorView ? this.renderConnectorView() : this.renderButton({
      iconType: u.Ay.Types.APPLE_LIGHT,
      buttonText: g.intl.string(g.t.xdGS1o),
      loading: !(0, p.isDesktop)() && this.state.submitting
    })
  }
  constructor(...e) {
    super(...e), y(this, "state", b({}, this.initialState)), y(this, "paymentRequestWallet", "applePay"), y(this, "paymentRequestWalletName", "Apple Pay")
  }
}