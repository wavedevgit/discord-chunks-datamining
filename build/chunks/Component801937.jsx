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
    (0, u.GE)(), (null != (e = this.props.paymentRequestWallets) ? e : []).length > 0 && setTimeout(() => {
      this.considerPaymentRequestWalletsLoaded()
    }, P)
  }
  considerPaymentRequestWalletsLoaded() {
    var e;
    let t = null != (e = this.props.paymentRequestWallets) ? e : [];
    if (0 === t.length || !this.arePaymentRequestWalletsLoading()) return;
    A.warn("Payment request wallets failed to load in time: ".concat(t.join(", "), ". Max time allowed: ").concat(P, " ms"));
    let n = t.reduce((e, t) => C(I({}, e), {
      ["".concat(t, "Loaded")]: true
    }), {});
    this.setState(n)
  }
  arePaymentRequestWalletsLoading() {
    var e;
    if ((0, E.isDesktop)()) returnfalse;
    let t = null != (e = this.props.paymentRequestWallets) ? e : [];
    if (0 === t.length) returnfalse;
    for (let e of t)
      if (!this.state["".concat(e, "Loaded")]) returntrue;
    returnfalse
  }
  toggleAllPayments() {
    let {
      showAllPaymentMethods: e
    } = this.state;
    this.setState({
      showAllPaymentMethods: !e
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
    } = this.props, m = null != (e = this.props.paymentRequestWallets) ? e : [], h = {
      iconClassName: O.buttonIcon,
      paymentLabel: y.intl.string(y.t.ZURqX0),
      onStripePaymentMethodReceived: a,
      onChooseType: n,
      paymentRequestPaymentContext: u
    }, g = m.map((e, t) => {
      let n = () => this.setState({
          ["".concat(e, "Loaded")]: true
        }),
        i = {
          onValidPaymentRequest: n,
          onPaymentRequestFailure: n
        },
        a = "".concat(e, "-").concat(t);
      return "applePay" === e ? (0, r.jsx)(p.Ch, I({}, h, i), a) : (0, r.jsx)(p.Tr, I({}, h, i), a)
    }), E = [], b = [], S = true === s || this.arePaymentRequestWalletsLoading();
    if (l) E.push(...this.createPaymentButtons((0, f.Q)({
      ipCountryCode: "ALL",
      location: R
    }).countryPaymentMethods));
    else {
      let {
        countryPaymentMethods: e,
        remainingPaymentMethods: t
      } = (0, f.Q)({
        ipCountryCode: s,
        location: R
      });
      E.push(...this.createPaymentButtons(e)), b.push(...this.createPaymentButtons(t))
    }
    let T = (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: o()(v.wrap, v.horizontal, O.container),
        children: [E, g]
      }), (0, r.jsx)("div", {
        className: b.length > 0 ? v.flex : O.hidden,
        children: (0, r.jsxs)(c.P3F, {
          onClick: () => this.toggleAllPayments(),
          className: o()(v.flex, O.allPaymentsToggleButton),
          children: [y.intl.string(y.t["4uiQmz"]), (0, r.jsx)(d.Z, {
            open: t
          })]
        })
      }), t && (0, r.jsx)("div", {
        className: o()(v.wrap, v.horizontal, O.allPaymentsSection, O.container, {
          [v.flex]: t
        }),
        children: b
      })]
    });
    return S && !l && (T = (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: O.hidden,
        children: g
      }), (0, r.jsx)(c.$jN, {
        type: c.$jN.Type.SPINNING_CIRCLE
      })]
    })), (0, r.jsxs)("div", {
      children: [_ && (0, r.jsx)("hr", {
        className: O.SeparatorUpper
      }), (0, r.jsx)("div", {
        className: i,
        children: (0, r.jsx)(c.gNt, {
          label: _ ? y.intl.string(y.t.tywMsW) : y.intl.string(y.t["8lqkf8"]),
          children: T
        })
      }), _ && (0, r.jsx)("hr", {
        className: O.SeparatorLower
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
  ipCountryCode: g.Z.ipCountryCode,
  ipCountryCodeHasError: g.Z.ipCountryCodeHasError
}))(w)