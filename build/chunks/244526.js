/** Chunk was on 1815 **/
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
  p = n(219929),
  g = n(46141),
  h = n(122289),
  f = n(624138),
  b = n(388032),
  N = n(579933);
class x extends(r = l.PureComponent) {
  get typeString() {
    let {
      paymentSource: e
    } = this.props;
    if (e instanceof g.qo) return p.ZP.Types.PAYPAL;
    if (e instanceof g.Sf) return p.ZP.Types.SOFORT;
    if (e instanceof g.dm) return p.ZP.getType(e.brand);
    if (e instanceof g.fv) return p.ZP.Types.GIROPAY;
    if (e instanceof g.Vg) return p.ZP.Types.PRZELEWY24;
    else if (e instanceof g.sn) return p.ZP.Types.PAYSAFECARD;
    else if (e instanceof g.o_) return p.ZP.Types.GCASH;
    else if (e instanceof g.kX) return p.ZP.Types.GRABPAY;
    else if (e instanceof g.z) return p.ZP.Types.MOMO_WALLET;
    else if (e instanceof g.Xc) return p.ZP.Types.VENMO;
    else if (e instanceof g.Om) return p.ZP.Types.KAKAOPAY;
    else if (e instanceof g.JC) return p.ZP.Types.GOPAY_WALLET;
    else if (e instanceof g.U4) return p.ZP.Types.BANCONTACT;
    else if (e instanceof g.D0) return p.ZP.Types.EPS;
    else if (e instanceof g.jc) return p.ZP.Types.IDEAL;
    else if (e instanceof g.u_) return p.ZP.Types.CASH_APP;
    else if (e instanceof g.$z) return p.ZP.Types.APPLE;
    return p.ZP.Types.UNKNOWN
  }
  getLabel(e) {
    return e instanceof g.dm ? b.NW.format(b.t["o/dsrK"], {
      brand: (0, f.De)(e.brand),
      last_4: e.last4
    }) : e instanceof g.qo ? b.NW.string(b.t["2dgEq6"]) : e instanceof g.Sf ? b.NW.string(b.t["edKX//"]) : e instanceof g.fv ? b.NW.string(b.t["y+0MQU"]) : e instanceof g.Vg ? b.NW.string(b.t.u25uLy) : e instanceof g.sn ? b.NW.string(b.t.boznHB) : e instanceof g.o_ ? b.NW.string(b.t.PjehcH) : e instanceof g.kX ? b.NW.string(b.t.T5davL) : e instanceof g.z ? b.NW.string(b.t.J0A1Vl) : e instanceof g.Xc ? b.NW.string(b.t.jYOezc) : e instanceof g.Om ? b.NW.string(b.t.CSVexs) : e instanceof g.JC ? b.NW.string(b.t["43J8JC"]) : e instanceof g.U4 ? b.NW.string(b.t["1ITkfn"]) : e instanceof g.jc ? b.NW.format(b.t["9kUlRU"], {
      bank: (0, u.YE)(e.bank)
    }) : e instanceof g.D0 ? b.NW.format(b.t.hSPoZ2, {
      bank: (0, u.Ul)(e.bank)
    }) : e instanceof g.u_ ? b.NW.string(b.t["+rbTmJ"]) : e instanceof g.$z ? b.NW.string(b.t.RFi12t) : b.NW.string(b.t.jdPblp)
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: t
    } = this.props;
    return (0, a.jsx)(d.Text, {
      className: c()(N.description, t),
      variant: "text-md/semibold",
      children: this.getLabel(e)
    })
  }
  renderSubText() {
    let {
      paymentSource: e,
      locale: t
    } = this.props, n = null;
    return e instanceof g.dm ? n = b.NW.formatToPlainString(b.t["8rTTub"], {
      month: (0, h.E2)(e.expiresMonth, t),
      year: e.expiresYear
    }) : e instanceof g.qo ? n = e.email : e instanceof g.Sf ? n = e.email : e instanceof g.Vg ? n = e.email : e instanceof g.Xc ? n = "@" + e.username : e instanceof g.u_ && (n = e.username), n
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
      children: [i && (0, a.jsx)(p.ZP, {
        type: this.typeString
      }), (0, a.jsxs)(m.Z, {
        direction: m.Z.Direction.VERTICAL,
        className: N.descriptionWrapper,
        children: [(0, a.jsxs)(m.Z, {
          align: m.Z.Align.CENTER,
          children: [this.renderDescription(), s && e ? (0, a.jsx)("div", {
            className: N.defaultIndicator,
            children: b.NW.string(b.t.bBvAEB)
          }) : null, r ? (0, a.jsx)("div", {
            className: N.premiumIndicator,
            children: b.NW.string(b.t.YCrcPD)
          }) : null, s && t.invalid ? (0, a.jsx)("div", {
            className: N.invalidIndicator,
            children: b.NW.string(b.t["851k9/"])
          }) : null]
        }), n && null != l ? (0, a.jsx)("div", {
          className: N.subText,
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