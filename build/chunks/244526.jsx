/** Chunk was on 75708 **/
/** chunk id: 244526, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./953529.js");
var i, r, s, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk987032 = require("./987032.js"),
  Chunk600164 = require("./600164.js"),
  Chunk219929 = require("./219929.jsx"),
  Chunk46141 = require("./46141.js"),
  Chunk122289 = require("./122289.js"),
  Chunk624138 = require("./624138.js"),
  Chunk388032 = require("./388032.js"),
  Chunk943617 = require("./943617.js");
class _ extends(i = Chunk73800.PureComponent) {
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
    return e instanceof g.dm ? b.intl.format(b.t["o/dsrK"], {
      brand: (0, f.De)(e.brand),
      last_4: e.last4
    }) : e instanceof g.qo ? b.intl.string(b.t["2dgEq6"]) : e instanceof g.Sf ? b.intl.string(b.t["edKX//"]) : e instanceof g.fv ? b.intl.string(b.t["y+0MQU"]) : e instanceof g.Vg ? b.intl.string(b.t.u25uLy) : e instanceof g.sn ? b.intl.string(b.t.boznHB) : e instanceof g.o_ ? b.intl.string(b.t.PjehcH) : e instanceof g.kX ? b.intl.string(b.t.T5davL) : e instanceof g.z ? b.intl.string(b.t.J0A1Vl) : e instanceof g.Xc ? b.intl.string(b.t.jYOezc) : e instanceof g.Om ? b.intl.string(b.t.CSVexs) : e instanceof g.JC ? b.intl.string(b.t["43J8JC"]) : e instanceof g.U4 ? b.intl.string(b.t["1ITkfn"]) : e instanceof g.jc ? null == e.bank ? b.intl.string(b.t.nSbwqK) : b.intl.format(b.t["9kUlRU"], {
      bank: (0, u.YE)(e.bank)
    }) : e instanceof g.D0 ? b.intl.format(b.t.hSPoZ2, {
      bank: (0, u.Ul)(e.bank)
    }) : e instanceof g.u_ ? b.intl.string(b.t["+rbTmJ"]) : e instanceof g.$z ? b.intl.string(b.t.RFi12t) : b.intl.string(b.t.jdPblp)
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: t
    } = this.props;
    return <Chunk481060.Text className={c()(Chunk943617.description, exports)} variant={"text-md/semibold"}>{this.getLabel(module)}</Chunk481060.Text>
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
      isForSubscription: i,
      showPaymentSourceIcon: r,
      showLabels: s
    } = this.props, l = this.renderSubText();
    return <Chunk600164.Z>{r && <Chunk219929.ZP type={this.typeString} />}{<Chunk600164.Z direction={Chunk600164.Z.Direction.VERTICAL} className={Chunk943617.descriptionWrapper}>{<Chunk600164.Z align={Chunk600164.Z.Align.CENTER}>{this.renderDescription()}{s && module ? <div className={Chunk943617.defaultIndicator}>{Chunk388032.intl.string(Chunk388032.t.bBvAEB)}</div> : null}{i ? <div className={Chunk943617.premiumIndicator}>{Chunk388032.intl.string(Chunk388032.t.YCrcPD)}</div> : null}{s && exports.invalid ? <div className={Chunk943617.invalidIndicator}>{Chunk388032.intl.string(Chunk388032.t["851k9/"])}</div> : null}</Chunk600164.Z>}{require && null != Chunk73800 ? <div className={Chunk943617.subText}>{Chunk73800}</div> : null}</Chunk600164.Z>}</Chunk600164.Z>
  }
}
s = {
  isForSubscription: false,
  isDefault: false,
  showSubtext: false,
  showPaymentSourceIcon: false,
  showLabels: false
}, (r = "defaultProps") in _ ? Object.defineProperty(_, r, {
  value: s,
  enumerable: true,
  configurable: true,
  writable: true
}) : _[r] = s