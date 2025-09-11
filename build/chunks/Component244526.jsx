/** Chunk was on web.js **/
/** chunk id: 244526, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./953529.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk987032 = require("./987032.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk219929 = require("./219929.jsx"),
  Chunk46141 = require("./46141.js"),
  Chunk122289 = require("./122289.js"),
  Chunk624138 = require("./624138.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk942957 = require("./942957.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class E extends(r = Chunk647438.PureComponent) {
  get typeString() {
    let {
      paymentSource: e
    } = this.props;
    if (module instanceof Chunk46141.qo) return Chunk219929.ZP.Types.PAYPAL;
    if (module instanceof Chunk46141.Sf) return Chunk219929.ZP.Types.SOFORT;
    if (module instanceof Chunk46141.dm) return Chunk219929.ZP.getType(module.brand);
    if (module instanceof Chunk46141.fv) return Chunk219929.ZP.Types.GIROPAY;
    if (module instanceof Chunk46141.Vg) return Chunk219929.ZP.Types.PRZELEWY24;
    else if (module instanceof Chunk46141.sn) return Chunk219929.ZP.Types.PAYSAFECARD;
    else if (module instanceof Chunk46141.o_) return Chunk219929.ZP.Types.GCASH;
    else if (module instanceof Chunk46141.kX) return Chunk219929.ZP.Types.GRABPAY;
    else if (module instanceof Chunk46141.z) return Chunk219929.ZP.Types.MOMO_WALLET;
    else if (module instanceof Chunk46141.Xc) return Chunk219929.ZP.Types.VENMO;
    else if (module instanceof Chunk46141.Om) return Chunk219929.ZP.Types.KAKAOPAY;
    else if (module instanceof Chunk46141.JC) return Chunk219929.ZP.Types.GOPAY_WALLET;
    else if (module instanceof Chunk46141.U4) return Chunk219929.ZP.Types.BANCONTACT;
    else if (module instanceof Chunk46141.D0) return Chunk219929.ZP.Types.EPS;
    else if (module instanceof Chunk46141.jc) return Chunk219929.ZP.Types.IDEAL;
    else if (module instanceof Chunk46141.u_) return Chunk219929.ZP.Types.CASH_APP;
    else if (module instanceof Chunk46141.$z) return Chunk219929.ZP.Types.APPLE;
    return Chunk219929.ZP.Types.UNKNOWN
  }
  getLabel(e) {
    return e instanceof f.dm ? h.intl.format(h.t["o/dsrK"], {
      brand: (0, p.De)(e.brand),
      last_4: e.last4
    }) : e instanceof f.qo ? h.intl.string(h.t["2dgEq6"]) : e instanceof f.Sf ? h.intl.string(h.t["edKX//"]) : e instanceof f.fv ? h.intl.string(h.t["y+0MQU"]) : e instanceof f.Vg ? h.intl.string(h.t.u25uLy) : e instanceof f.sn ? h.intl.string(h.t.boznHB) : e instanceof f.o_ ? h.intl.string(h.t.PjehcH) : e instanceof f.kX ? h.intl.string(h.t.T5davL) : e instanceof f.z ? h.intl.string(h.t.J0A1Vl) : e instanceof f.Xc ? h.intl.string(h.t.jYOezc) : e instanceof f.Om ? h.intl.string(h.t.CSVexs) : e instanceof f.JC ? h.intl.string(h.t["43J8JC"]) : e instanceof f.U4 ? h.intl.string(h.t["1ITkfn"]) : e instanceof f.jc ? null == e.bank ? h.intl.string(h.t.nSbwqK) : h.intl.format(h.t["9kUlRU"], {
      bank: (0, c.YE)(e.bank)
    }) : e instanceof f.D0 ? h.intl.format(h.t.hSPoZ2, {
      bank: (0, c.Ul)(e.bank)
    }) : e instanceof f.u_ ? h.intl.string(h.t["+rbTmJ"]) : e instanceof f.$z ? h.intl.string(h.t.RFi12t) : h.intl.string(h.t.jdPblp)
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: t
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: s()(Chunk942957.description, exports),
      variant: "text-md/semibold",
      children: this.getLabel(module)
    })
  }
  renderSubText() {
    let {
      paymentSource: e,
      locale: t
    } = this.props, n = null;
    return module instanceof Chunk46141.dm ? n = Chunk388032.intl.formatToPlainString(Chunk388032.t["8rTTub"], {
      month: (0, Chunk122289.E2)(module.expiresMonth, exports),
      year: module.expiresYear
    }) : module instanceof Chunk46141.qo || module instanceof Chunk46141.Sf || module instanceof Chunk46141.Vg ? n = module.email : module instanceof Chunk46141.Xc ? n = "@" + module.username : module instanceof Chunk46141.u_ && (n = module.username), require
  }
  render() {
    let {
      isDefault: e,
      paymentSource: t,
      showSubtext: n,
      isForSubscription: r,
      showPaymentSourceIcon: a,
      showLabels: o
    } = this.props, s = this.renderSubText();
    return (0, Chunk951288.jsxs)(Chunk600164.Z, {
      children: [Chunk647438 && (0, Chunk951288.jsx)(Chunk219929.ZP, {
        type: this.typeString
      }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        className: Chunk942957.descriptionWrapper,
        children: [(0, Chunk951288.jsxs)(Chunk600164.Z, {
          align: Chunk600164.Z.Align.CENTER,
          children: [this.renderDescription(), Chunk120356 && module ? (0, Chunk951288.jsx)("div", {
            className: Chunk942957.defaultIndicator,
            children: Chunk388032.intl.string(Chunk388032.t.bBvAEB)
          }) : null, r ? (0, Chunk951288.jsx)("div", {
            className: Chunk942957.premiumIndicator,
            children: Chunk388032.intl.string(Chunk388032.t.YCrcPD)
          }) : null, Chunk120356 && exports.invalid ? (0, Chunk951288.jsx)("div", {
            className: Chunk942957.invalidIndicator,
            children: Chunk388032.intl.string(Chunk388032.t["851k9/"])
          }) : null]
        }), require && null != s ? (0, Chunk951288.jsx)("div", {
          className: Chunk942957.subText,
          children: s
        }) : null]
      })]
    })
  }
}
g(E, "defaultProps", {
  isForSubscription: false,
  isDefault: false,
  showSubtext: false,
  showPaymentSourceIcon: false,
  showLabels: false
})