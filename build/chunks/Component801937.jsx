/** Chunk was on web.js **/
/** chunk id: 801937, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk269128 = require("./269128.jsx"),
  Chunk720452 = require("./720452.js"),
  Chunk502109 = require("./502109.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk219929 = require("./219929.jsx"),
  Chunk985754 = require("./985754.js"),
  Chunk351402 = require("./351402.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk805521 = require("./805521.js"),
  Chunk727829 = require("./727829.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = new Chunk710845.Z("ChoosePaymentSourceType"),
  N = {
    [Chunk981631.HeQ.CARD]: Chunk219929.ZP.Types.UNKNOWN,
    [Chunk981631.HeQ.PAYPAL]: Chunk219929.ZP.Types.PAYPAL,
    [Chunk981631.HeQ.SOFORT]: Chunk219929.ZP.Types.SOFORT,
    [Chunk981631.HeQ.GIROPAY]: Chunk219929.ZP.Types.GIROPAY,
    [Chunk981631.HeQ.PRZELEWY24]: Chunk219929.ZP.Types.PRZELEWY24,
    [Chunk981631.HeQ.PAYSAFE_CARD]: Chunk219929.ZP.Types.PAYSAFECARD,
    [Chunk981631.HeQ.GCASH]: Chunk219929.ZP.Types.GCASH,
    [Chunk981631.HeQ.GRABPAY_MY]: Chunk219929.ZP.Types.GRABPAY,
    [Chunk981631.HeQ.MOMO_WALLET]: Chunk219929.ZP.Types.MOMO_WALLET,
    [Chunk981631.HeQ.VENMO]: Chunk219929.ZP.Types.VENMO,
    [Chunk981631.HeQ.KAKAOPAY]: Chunk219929.ZP.Types.KAKAOPAY,
    [Chunk981631.HeQ.GOPAY_WALLET]: Chunk219929.ZP.Types.GOPAY_WALLET,
    [Chunk981631.HeQ.BANCONTACT]: Chunk219929.ZP.Types.BANCONTACT,
    [Chunk981631.HeQ.EPS]: Chunk219929.ZP.Types.EPS,
    [Chunk981631.HeQ.IDEAL]: Chunk219929.ZP.Types.IDEAL,
    [Chunk981631.HeQ.CASH_APP]: Chunk219929.ZP.Types.CASH_APP
  },
  P = 1e3,
  R = "40c266_1";
class w extends Chunk473749.PureComponent {
  componentDidMount() {
    var e;
    (0, Chunk355467.GE)(), (null != (e = this.props.paymentRequestWallets) ? module : []).length > 0 && setTimeout(() => {
      this.considerPaymentRequestWalletsLoaded()
    }, P)
  }
  considerPaymentRequestWalletsLoaded() {
    var e;
    let t = null != (e = this.props.paymentRequestWallets) ? module : [];
    if (0 === exports.length || !this.arePaymentRequestWalletsLoading()) return;
    A.warn("Payment request wallets failed to load in time: ".concat(exports.join(", "), ". Max time allowed: ").concat(P, " ms"));
    let n = exports.reduce((e, t) => C(I({}, e), {
      ["".concat(t, "Loaded")]: true
    }), {});
    this.setState(require)
  }
  arePaymentRequestWalletsLoading() {
    var e;
    if ((0, Chunk358085.isDesktop)()) returnfalse;
    let t = null != (e = this.props.paymentRequestWallets) ? module : [];
    if (0 === exports.length) returnfalse;
    for (let e of exports)
      if (!this.state["".concat(module, "Loaded")]) returntrue;
    returnfalse
  }
  toggleAllPayments() {
    let {
      showAllPaymentMethods: e
    } = this.state;
    this.setState({
      showAllPaymentMethods: !module
    })
  }
  createPaymentButtons(e) {
    return e.map(e => {
      var t;
      let n = N[e],
        i = h.W[e](),
        a = null == this.props.paymentSourceTypeRestrictions || (null == (t = this.props.paymentSourceTypeRestrictions) ? true : t.includes(e));
      return (0, r.jsx)(l.zxk, {
        onClick: () => this.props.onChooseType(e),
        disabled: !a,
        fullWidth: true,
        text: i,
        icon: () => (0, r.jsx)(m.ZP, {
          className: O.buttonIcon,
          type: n
        })
      }, e)
    })
  }
  render() {
    var e;
    let {
      showAllPaymentMethods: t
    } = this.state, {
      onChooseType: n,
      className: i,
      onStripePaymentMethodReceived: a,
      ipCountryCode: s,
      ipCountryCodeHasError: l,
      paymentRequestPaymentContext: u,
      isEligibleForTrial: _ = false
    } = this.props, m = null != (e = this.props.paymentRequestWallets) ? module : [], h = {
      iconClassName: Chunk805521.buttonIcon,
      paymentLabel: Chunk388032.intl.string(Chunk388032.t.ZURqX0),
      onStripePaymentMethodReceived: Chunk120356,
      onChooseType: require,
      paymentRequestPaymentContext: Chunk355467
    }, g = Chunk219929.map((e, t) => {
      let n = () => this.setState({
          ["".concat(e, "Loaded")]: true
        }),
        i = {
          onValidPaymentRequest: n,
          onPaymentRequestFailure: n
        },
        a = "".concat(e, "-").concat(t);
      return "applePay" === e ? (0, r.jsx)(p.Ch, I({}, h, i), a) : (0, r.jsx)(p.Tr, I({}, h, i), a)
    }), E = [], b = [], S = true === Chunk442837 || this.arePaymentRequestWalletsLoading();
    if (Chunk159691) Chunk358085.push(...this.createPaymentButtons((0, Chunk720452.Q)({
      ipCountryCode: "ALL",
      location: R
    }).countryPaymentMethods));
    else {
      let {
        countryPaymentMethods: e,
        remainingPaymentMethods: t
      } = (0, Chunk720452.Q)({
        ipCountryCode: Chunk442837,
        location: R
      });
      Chunk358085.push(...this.createPaymentButtons(module)), Chunk981631.push(...this.createPaymentButtons(exports))
    }
    let T = (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsxs)("div", {
        className: o()(Chunk727829.wrap, Chunk727829.horizontal, Chunk805521.container),
        children: [Chunk358085, Chunk351402]
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk981631.length > 0 ? Chunk727829.flex : Chunk805521.hidden,
        children: (0, Chunk54381.jsxs)(Chunk481060.P3F, {
          onClick: () => this.toggleAllPayments(),
          className: o()(Chunk727829.flex, Chunk805521.allPaymentsToggleButton),
          children: [Chunk388032.intl.string(Chunk388032.t["4uiQmz"]), (0, Chunk54381.jsx)(Chunk269128.Z, {
            open: exports
          })]
        })
      }), exports && (0, Chunk54381.jsx)("div", {
        className: o()(Chunk727829.wrap, Chunk727829.horizontal, Chunk805521.allPaymentsSection, Chunk805521.container, {
          [Chunk727829.flex]: exports
        }),
        children: Chunk981631
      })]
    });
    return S && !Chunk159691 && (T = (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk805521.hidden,
        children: Chunk351402
      }), (0, Chunk54381.jsx)(Chunk481060.$jN, {
        type: Chunk481060.$jN.Type.SPINNING_CIRCLE
      })]
    })), (0, Chunk54381.jsxs)("div", {
      children: [Chunk710845 && (0, Chunk54381.jsx)("hr", {
        className: Chunk805521.SeparatorUpper
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk473749,
        children: (0, Chunk54381.jsx)(Chunk481060.gNt, {
          label: Chunk710845 ? Chunk388032.intl.string(Chunk388032.t.tywMsW) : Chunk388032.intl.string(Chunk388032.t["8lqkf8"]),
          children: T
        })
      }), Chunk710845 && (0, Chunk54381.jsx)("hr", {
        className: Chunk805521.SeparatorLower
      })]
    })
  }
  constructor(e) {
    super(e), this.state = {
      showAllPaymentMethods: false,
      applePayLoaded: false,
      googlePayLoaded: false
    }
  }
}
let D = Chunk442837.ZP.connectStores([Chunk351402.Z], () => ({
  ipCountryCode: Chunk351402.Z.ipCountryCode,
  ipCountryCodeHasError: Chunk351402.Z.ipCountryCodeHasError
}))(w)