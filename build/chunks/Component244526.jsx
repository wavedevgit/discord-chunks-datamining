/** Chunk was on web.js **/
/** chunk id: 244526, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk987032 = require("./987032.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk219929 = require("./219929.jsx"),
  Chunk46141 = require("./46141.js"),
  Chunk122289 = require("./122289.js"),
  Chunk624138 = require("./624138.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk942957 = require("./942957.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class m extends(r = Chunk647438.PureComponent) {
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
    return e instanceof u.dm ? _.intl.format(_.t["o/dsrK"], {
      brand: (0, f.De)(e.brand),
      last_4: e.last4
    }) : e instanceof u.qo ? _.intl.string(_.t["2dgEq6"]) : e instanceof u.Sf ? _.intl.string(_.t["edKX//"]) : e instanceof u.fv ? _.intl.string(_.t["y+0MQU"]) : e instanceof u.Vg ? _.intl.string(_.t.u25uLy) : e instanceof u.sn ? _.intl.string(_.t.boznHB) : e instanceof u.o_ ? _.intl.string(_.t.PjehcH) : e instanceof u.kX ? _.intl.string(_.t.T5davL) : e instanceof u.z ? _.intl.string(_.t.J0A1Vl) : e instanceof u.Xc ? _.intl.string(_.t.jYOezc) : e instanceof u.Om ? _.intl.string(_.t.CSVexs) : e instanceof u.JC ? _.intl.string(_.t["43J8JC"]) : e instanceof u.U4 ? _.intl.string(_.t["1ITkfn"]) : e instanceof u.jc ? null == e.bank ? _.intl.string(_.t.nSbwqK) : _.intl.format(_.t["9kUlRU"], {
      bank: (0, s.YE)(e.bank)
    }) : e instanceof u.D0 ? _.intl.format(_.t.hSPoZ2, {
      bank: (0, s.Ul)(e.bank)
    }) : e instanceof u.u_ ? _.intl.string(_.t["+rbTmJ"]) : e instanceof u.$z ? _.intl.string(_.t.RFi12t) : _.intl.string(_.t.jdPblp)
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: t
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: exports,
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
      showLabels: s
    } = this.props, u = this.renderSubText();
    return (0, Chunk951288.jsxs)(Chunk600164.Z, {
      children: [Chunk647438 && (0, Chunk951288.jsx)(Chunk219929.ZP, {
        type: this.typeString
      }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        className: Chunk942957.descriptionWrapper,
        children: [(0, Chunk951288.jsxs)(Chunk600164.Z, {
          align: Chunk600164.Z.Align.CENTER,
          children: [this.renderDescription(), Chunk987032 && module ? (0, Chunk951288.jsx)("div", {
            className: Chunk942957.defaultIndicator,
            children: Chunk388032.intl.string(Chunk388032.t.bBvAEB)
          }) : null, r ? (0, Chunk951288.jsx)("div", {
            className: Chunk942957.premiumIndicator,
            children: Chunk388032.intl.string(Chunk388032.t.YCrcPD)
          }) : null, Chunk987032 && exports.invalid ? (0, Chunk951288.jsx)("div", {
            className: Chunk942957.invalidIndicator,
            children: Chunk388032.intl.string(Chunk388032.t["851k9/"])
          }) : null]
        }), require && null != Chunk46141 ? (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          className: Chunk942957.subText,
          children: Chunk46141
        }) : null]
      })]
    })
  }
}
h(m, "defaultProps", {
  isForSubscription: false,
  isDefault: false,
  showSubtext: false,
  showPaymentSourceIcon: false,
  showLabels: false
})