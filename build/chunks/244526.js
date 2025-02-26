/** Chunk was on 53485 **/
n.d(t, {
  Z: () => x
}), n(266796);
var r, i, s, a = n(200651),
  l = n(192379),
  o = n(120356),
  c = n.n(o),
  d = n(481060),
  u = n(987032),
  m = n(600164),
  g = n(219929),
  p = n(46141),
  h = n(122289),
  f = n(624138),
  N = n(388032),
  b = n(722293);
class x extends(r = l.PureComponent) {
  get typeString() {
    let {
      paymentSource: e
    } = this.props;
    if (e instanceof p.qo) return g.ZP.Types.PAYPAL;
    if (e instanceof p.Sf) return g.ZP.Types.SOFORT;
    if (e instanceof p.dm) return g.ZP.getType(e.brand);
    if (e instanceof p.fv) return g.ZP.Types.GIROPAY;
    if (e instanceof p.Vg) return g.ZP.Types.PRZELEWY24;
    else if (e instanceof p.sn) return g.ZP.Types.PAYSAFECARD;
    else if (e instanceof p.o_) return g.ZP.Types.GCASH;
    else if (e instanceof p.kX) return g.ZP.Types.GRABPAY;
    else if (e instanceof p.z) return g.ZP.Types.MOMO_WALLET;
    else if (e instanceof p.Xc) return g.ZP.Types.VENMO;
    else if (e instanceof p.Om) return g.ZP.Types.KAKAOPAY;
    else if (e instanceof p.JC) return g.ZP.Types.GOPAY_WALLET;
    else if (e instanceof p.U4) return g.ZP.Types.BANCONTACT;
    else if (e instanceof p.D0) return g.ZP.Types.EPS;
    else if (e instanceof p.jc) return g.ZP.Types.IDEAL;
    else if (e instanceof p.u_) return g.ZP.Types.CASH_APP;
    else if (e instanceof p.$z) return g.ZP.Types.APPLE;
    return g.ZP.Types.UNKNOWN
  }
  getLabel(e) {
    return e instanceof p.dm ? N.NW.format(N.t["o/dsrK"], {
      brand: (0, f.De)(e.brand),
      last_4: e.last4
    }) : e instanceof p.qo ? N.NW.string(N.t["2dgEq6"]) : e instanceof p.Sf ? N.NW.string(N.t["edKX//"]) : e instanceof p.fv ? N.NW.string(N.t["y+0MQU"]) : e instanceof p.Vg ? N.NW.string(N.t.u25uLy) : e instanceof p.sn ? N.NW.string(N.t.boznHB) : e instanceof p.o_ ? N.NW.string(N.t.PjehcH) : e instanceof p.kX ? N.NW.string(N.t.T5davL) : e instanceof p.z ? N.NW.string(N.t.J0A1Vl) : e instanceof p.Xc ? N.NW.string(N.t.jYOezc) : e instanceof p.Om ? N.NW.string(N.t.CSVexs) : e instanceof p.JC ? N.NW.string(N.t["43J8JC"]) : e instanceof p.U4 ? N.NW.string(N.t["1ITkfn"]) : e instanceof p.jc ? N.NW.format(N.t["9kUlRU"], {
      bank: (0, u.YE)(e.bank)
    }) : e instanceof p.D0 ? N.NW.format(N.t.hSPoZ2, {
      bank: (0, u.Ul)(e.bank)
    }) : e instanceof p.u_ ? N.NW.string(N.t["+rbTmJ"]) : e instanceof p.$z ? N.NW.string(N.t.RFi12t) : N.NW.string(N.t.jdPblp)
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: t
    } = this.props;
    return (0, a.jsx)(d.Text, {
      className: c()(b.description, t),
      variant: "text-md/semibold",
      children: this.getLabel(e)
    })
  }
  renderSubText() {
    let {
      paymentSource: e,
      locale: t
    } = this.props, n = null;
    return e instanceof p.dm ? n = N.NW.formatToPlainString(N.t["8rTTub"], {
      month: (0, h.E2)(e.expiresMonth, t),
      year: e.expiresYear
    }) : e instanceof p.qo ? n = e.email : e instanceof p.Sf ? n = e.email : e instanceof p.Vg ? n = e.email : e instanceof p.Xc ? n = "@" + e.username : e instanceof p.u_ && (n = e.username), n
  }
  render() {
    let {
      isDefault: e,
      paymentSource: t,
      showSubtext: n,
      isForSubscription: r,
      showPaymentSourceIcon: i,
      showLabels: s
    } = this.props, l = this.renderSubText();
    return (0, a.jsxs)(m.Z, {
      children: [i && (0, a.jsx)(g.ZP, {
        type: this.typeString
      }), (0, a.jsxs)(m.Z, {
        direction: m.Z.Direction.VERTICAL,
        className: b.descriptionWrapper,
        children: [(0, a.jsxs)(m.Z, {
          align: m.Z.Align.CENTER,
          children: [this.renderDescription(), s && e ? (0, a.jsx)("div", {
            className: b.defaultIndicator,
            children: N.NW.string(N.t.bBvAEB)
          }) : null, r ? (0, a.jsx)("div", {
            className: b.premiumIndicator,
            children: N.NW.string(N.t.YCrcPD)
          }) : null, s && t.invalid ? (0, a.jsx)("div", {
            className: b.invalidIndicator,
            children: N.NW.string(N.t["851k9/"])
          }) : null]
        }), n && null != l ? (0, a.jsx)("div", {
          className: b.subText,
          children: l
        }) : null]
      })]
    })
  }
}
s = {
  isForSubscription: !1,
  isDefault: !1,
  showSubtext: !1,
  showPaymentSourceIcon: !1,
  showLabels: !1
}, (i = "defaultProps") in x ? Object.defineProperty(x, i, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : x[i] = s