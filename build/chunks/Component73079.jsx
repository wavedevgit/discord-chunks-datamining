/** Chunk was on web.js **/
/** chunk id: 73079, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk551262 = require("./551262.jsx"),
  Chunk550238 = require("./550238.js"),
  Chunk405139 = require("./405139.jsx"),
  Chunk626584 = require("./626584.js"),
  Chunk812745 = require("./812745.jsx"),
  Chunk192087 = require("./192087.js"),
  Chunk615405 = require("./615405.js"),
  Chunk723702 = require("./723702.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk577991 = require("./577991.js"),
  Chunk20976 = require("./20976.js");

function A(e, t, n) {
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
      A(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = new Chunk626584.A("ChoosePaymentSourceType"),
  N = {
    [Chunk652215.hes.CARD]: Chunk812745.Ay.Types.UNKNOWN,
    [Chunk652215.hes.PAYPAL]: Chunk812745.Ay.Types.PAYPAL,
    [Chunk652215.hes.SOFORT]: Chunk812745.Ay.Types.SOFORT,
    [Chunk652215.hes.GIROPAY]: Chunk812745.Ay.Types.GIROPAY,
    [Chunk652215.hes.PRZELEWY24]: Chunk812745.Ay.Types.PRZELEWY24,
    [Chunk652215.hes.PAYSAFE_CARD]: Chunk812745.Ay.Types.PAYSAFECARD,
    [Chunk652215.hes.GCASH]: Chunk812745.Ay.Types.GCASH,
    [Chunk652215.hes.GRABPAY_MY]: Chunk812745.Ay.Types.GRABPAY,
    [Chunk652215.hes.MOMO_WALLET]: Chunk812745.Ay.Types.MOMO_WALLET,
    [Chunk652215.hes.VENMO]: Chunk812745.Ay.Types.VENMO,
    [Chunk652215.hes.KAKAOPAY]: Chunk812745.Ay.Types.KAKAOPAY,
    [Chunk652215.hes.GOPAY_WALLET]: Chunk812745.Ay.Types.GOPAY_WALLET,
    [Chunk652215.hes.BANCONTACT]: Chunk812745.Ay.Types.BANCONTACT,
    [Chunk652215.hes.EPS]: Chunk812745.Ay.Types.EPS,
    [Chunk652215.hes.IDEAL]: Chunk812745.Ay.Types.IDEAL,
    [Chunk652215.hes.CASH_APP]: Chunk812745.Ay.Types.CASH_APP
  },
  w = 1e3,
  R = "40c266_1";
class P extends Chunk64700.PureComponent {
  componentDidMount() {
    var e;
    (0, u.xe)(), (null != (e = this.props.paymentRequestWallets) ? e : []).length > 0 && setTimeout(() => {
      this.considerPaymentRequestWalletsLoaded()
    }, w)
  }
  considerPaymentRequestWalletsLoaded() {
    var e;
    let t = null != (e = this.props.paymentRequestWallets) ? e : [];
    if (0 === t.length || !this.arePaymentRequestWalletsLoading()) return;
    C.warn("Payment request wallets failed to load in time: ".concat(t.join(", "), ". Max time allowed: ").concat(w, " ms"));
    let n = t.reduce((e, t) => T(I({}, e), {
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
        i = m.w[e](),
        a = null == this.props.paymentSourceTypeRestrictions || (null == (t = this.props.paymentSourceTypeRestrictions) ? true : t.includes(e));
      return (0, r.jsx)(l.$nd, {
        onClick: () => this.props.onChooseType(e),
        disabled: !a,
        fullWidth: true,
        text: i,
        icon: () => (0, r.jsx)(h.Ay, {
          className: O.iA,
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
    } = this.props, h = null != (e = this.props.paymentRequestWallets) ? e : [], m = {
      iconClassName: O.iA,
      paymentLabel: b.intl.string(b.t.ZURqX0),
      onStripePaymentMethodReceived: a,
      onChooseType: n,
      paymentRequestPaymentContext: u
    }, g = h.map((e, t) => {
      let n = () => this.setState({
          ["".concat(e, "Loaded")]: true
        }),
        i = {
          onValidPaymentRequest: n,
          onPaymentRequestFailure: n
        },
        a = "".concat(e, "-").concat(t);
      return "applePay" === e ? (0, r.jsx)(p.Mv, I({}, m, i), a) : (0, r.jsx)(p.dP, I({}, m, i), a)
    }), E = [], y = [], A = true === s || this.arePaymentRequestWalletsLoading();
    if (l) E.push(...this.createPaymentButtons((0, f.J)({
      ipCountryCode: "ALL",
      location: R
    }).countryPaymentMethods));
    else {
      let {
        countryPaymentMethods: e,
        remainingPaymentMethods: t
      } = (0, f.J)({
        ipCountryCode: s,
        location: R
      });
      E.push(...this.createPaymentButtons(e)), y.push(...this.createPaymentButtons(t))
    }
    let S = (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: o()(v.LV, v.xM, O.kL),
        children: [E, g]
      }), (0, r.jsx)("div", {
        className: y.length > 0 ? v.Uu : O.R,
        children: (0, r.jsxs)(c.DUT, {
          onClick: () => this.toggleAllPayments(),
          className: o()(v.Uu, O.pn),
          children: [b.intl.string(b.t["4uiQmz"]), (0, r.jsx)(d.A, {
            open: t
          })]
        })
      }), t && (0, r.jsx)("div", {
        className: o()(v.LV, v.xM, O.eH, O.kL, {
          [v.Uu]: t
        }),
        children: y
      })]
    });
    return A && !l && (S = (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: O.R,
        children: g
      }), (0, r.jsx)(c.y$y, {
        type: c.y$y.Type.SPINNING_CIRCLE
      })]
    })), (0, r.jsxs)("div", {
      children: [_ && (0, r.jsx)("hr", {
        className: O.cL
      }), (0, r.jsx)("div", {
        className: i,
        children: (0, r.jsx)(c.D0$, {
          label: _ ? b.intl.string(b.t.tywMsW) : b.intl.string(b.t["8lqkf8"]),
          children: S
        })
      }), _ && (0, r.jsx)("hr", {
        className: O.nD
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
let D = Chunk311907.Ay.connectStores([Chunk615405.A], () => ({
  ipCountryCode: g.A.ipCountryCode,
  ipCountryCodeHasError: g.A.ipCountryCodeHasError
}))(P)