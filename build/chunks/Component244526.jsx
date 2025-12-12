/** Chunk was on web.js **/
/** chunk id: 244526, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk987032 = require("./987032.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk219929 = require("./219929.jsx"),
  Chunk46141 = require("./46141.js"),
  Chunk122289 = require("./122289.js"),
  Chunk624138 = require("./624138.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk634499 = require("./634499.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class h extends(r = Chunk473749.PureComponent) {
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
    return e instanceof u.dm ? p.intl.format(p.t["o/dsrL"], {
      brand: (0, f.De)(e.brand),
      last_4: e.last4
    }) : e instanceof u.qo ? p.intl.string(p.t["2dgEq+"]) : e instanceof u.Sf ? p.intl.string(p.t["edKX/1"]) : e instanceof u.fv ? p.intl.string(p.t["y+0MQZ"]) : e instanceof u.Vg ? p.intl.string(p.t.u25uL0) : e instanceof u.sn ? p.intl.string(p.t.boznHN) : e instanceof u.o_ ? p.intl.string(p.t.PjehcF) : e instanceof u.kX ? p.intl.string(p.t.T5davE) : e instanceof u.z ? p.intl.string(p.t.J0A1Vk) : e instanceof u.Xc ? p.intl.string(p.t.jYOezc) : e instanceof u.Om ? p.intl.string(p.t.CSVexi) : e instanceof u.JC ? p.intl.string(p.t["43J8JK"]) : e instanceof u.U4 ? p.intl.string(p.t["1ITkfq"]) : e instanceof u.jc ? null == e.bank ? p.intl.string(p.t.nSbwqC) : p.intl.format(p.t["9kUlRU"], {
      bank: (0, s.YE)(e.bank)
    }) : e instanceof u.D0 ? p.intl.format(p.t.hSPoZw, {
      bank: (0, s.Ul)(e.bank)
    }) : e instanceof u.u_ ? p.intl.string(p.t["+rbTmL"]) : e instanceof u.$z ? p.intl.string(p.t.RFi12i) : p.intl.string(p.t.jdPblk)
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: t
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk481060.Text, {
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
    return module instanceof Chunk46141.dm ? n = Chunk388032.intl.formatToPlainString(Chunk388032.t["8rTTuf"], {
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
    return (0, Chunk54381.jsxs)(Chunk600164.Z, {
      children: [Chunk473749 && (0, Chunk54381.jsx)(Chunk219929.ZP, {
        type: this.typeString
      }), (0, Chunk54381.jsxs)(Chunk600164.Z, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        className: Chunk634499.descriptionWrapper,
        children: [(0, Chunk54381.jsxs)(Chunk600164.Z, {
          align: Chunk600164.Z.Align.CENTER,
          children: [this.renderDescription(), Chunk987032 && module ? (0, Chunk54381.jsx)("div", {
            className: Chunk634499.defaultIndicator,
            children: Chunk388032.intl.string(Chunk388032.t.bBvAEH)
          }) : null, r ? (0, Chunk54381.jsx)("div", {
            className: Chunk634499.premiumIndicator,
            children: Chunk388032.intl.string(Chunk388032.t.YCrcPL)
          }) : null, Chunk987032 && exports.invalid ? (0, Chunk54381.jsx)("div", {
            className: Chunk634499.invalidIndicator,
            children: Chunk388032.intl.string(Chunk388032.t["851k93"])
          }) : null]
        }), require && null != Chunk46141 ? (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          className: Chunk634499.subText,
          children: Chunk46141
        }) : null]
      })]
    })
  }
}
m(h, "defaultProps", {
  isForSubscription: false,
  isDefault: false,
  showSubtext: false,
  showPaymentSourceIcon: false,
  showLabels: false
})