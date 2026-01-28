/** Chunk was on 5606 **/
/** chunk id: 219887, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var r, i, l, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk887555 = require("./887555.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk812745 = require("./812745.jsx"),
  Chunk202613 = require("./202613.js"),
  Chunk739508 = require("./739508.js"),
  Chunk240248 = require("./240248.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk789863 = require("./789863.js");
class b extends(l = Chunk64700.PureComponent) {
  get typeString() {
    let {
      paymentSource: e
    } = this.props;
    if (e instanceof p.SJ) return u.Ay.Types.PAYPAL;
    if (e instanceof p.A0) return u.Ay.Types.SOFORT;
    if (e instanceof p.YS) return u.Ay.getType(e.brand);
    if (e instanceof p.Qh) return u.Ay.Types.GIROPAY;
    if (e instanceof p.Tu) return u.Ay.Types.PRZELEWY24;
    else if (e instanceof p.Ux) return u.Ay.Types.PAYSAFECARD;
    else if (e instanceof p.F_) return u.Ay.Types.GCASH;
    else if (e instanceof p.Xj) return u.Ay.Types.GRABPAY;
    else if (e instanceof p.am) return u.Ay.Types.MOMO_WALLET;
    else if (e instanceof p._1) return u.Ay.Types.VENMO;
    else if (e instanceof p.i6) return u.Ay.Types.KAKAOPAY;
    else if (e instanceof p.cg) return u.Ay.Types.GOPAY_WALLET;
    else if (e instanceof p.UG) return u.Ay.Types.BANCONTACT;
    else if (e instanceof p.rJ) return u.Ay.Types.EPS;
    else if (e instanceof p.EE) return u.Ay.Types.IDEAL;
    else if (e instanceof p.FQ) return u.Ay.Types.CASH_APP;
    else if (e instanceof p.Pw) return u.Ay.Types.APPLE;
    return u.Ay.Types.UNKNOWN
  }
  getLabel(e) {
    return e instanceof p.YS ? g.intl.format(g.t["o/dsrL"], {
      brand: (0, m.$G)(e.brand),
      last_4: e.last4
    }) : e instanceof p.SJ ? g.intl.string(g.t["2dgEq+"]) : e instanceof p.A0 ? g.intl.string(g.t["edKX/1"]) : e instanceof p.Qh ? g.intl.string(g.t["y+0MQZ"]) : e instanceof p.Tu ? g.intl.string(g.t.u25uL0) : e instanceof p.Ux ? g.intl.string(g.t.boznHN) : e instanceof p.F_ ? g.intl.string(g.t.PjehcF) : e instanceof p.Xj ? g.intl.string(g.t.T5davE) : e instanceof p.am ? g.intl.string(g.t.J0A1Vk) : e instanceof p._1 ? g.intl.string(g.t.jYOezc) : e instanceof p.i6 ? g.intl.string(g.t.CSVexi) : e instanceof p.cg ? g.intl.string(g.t["43J8JK"]) : e instanceof p.UG ? g.intl.string(g.t["1ITkfq"]) : e instanceof p.EE ? null == e.bank ? g.intl.string(g.t.nSbwqC) : g.intl.format(g.t["9kUlRU"], {
      bank: (0, c.o0)(e.bank)
    }) : e instanceof p.rJ ? g.intl.format(g.t.hSPoZw, {
      bank: (0, c.jK)(e.bank)
    }) : e instanceof p.FQ ? g.intl.string(g.t["+rbTmL"]) : e instanceof p.Pw ? g.intl.string(g.t.RFi12i) : g.intl.string(g.t.jdPblk)
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: t
    } = this.props;
    return (0, s.jsx)(o.Text, {
      className: t,
      variant: "text-md/semibold",
      children: this.getLabel(e)
    })
  }
  renderSubText() {
    let {
      paymentSource: e,
      locale: t
    } = this.props, n = null;
    return e instanceof p.YS ? n = g.intl.formatToPlainString(g.t["8rTTuf"], {
      month: (0, _.eS)(e.expiresMonth, t),
      year: e.expiresYear
    }) : e instanceof p.SJ || e instanceof p.A0 || e instanceof p.Tu ? n = e.email : e instanceof p._1 ? n = "@" + e.username : e instanceof p.FQ && (n = e.username), n
  }
  render() {
    let {
      isDefault: e,
      paymentSource: t,
      showSubtext: n,
      isForSubscription: r,
      showPaymentSourceIcon: i,
      showLabels: l
    } = this.props, a = this.renderSubText();
    return (0, s.jsxs)(d.A, {
      children: [i && (0, s.jsx)(u.Ay, {
        type: this.typeString
      }), (0, s.jsxs)(d.A, {
        direction: d.A.Direction.VERTICAL,
        className: f.Wi,
        children: [(0, s.jsxs)(d.A, {
          align: d.A.Align.CENTER,
          children: [this.renderDescription(), l && e ? (0, s.jsx)("div", {
            className: f.Zn,
            children: g.intl.string(g.t.bBvAEH)
          }) : null, r ? (0, s.jsx)("div", {
            className: f.NV,
            children: g.intl.string(g.t.YCrcPL)
          }) : null, l && t.invalid ? (0, s.jsx)("div", {
            className: f.tG,
            children: g.intl.string(g.t["851k93"])
          }) : null]
        }), n && null != a ? (0, s.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          className: f.Sv,
          children: a
        }) : null]
      })]
    })
  }
}
i = {
  isForSubscription: false,
  isDefault: false,
  showSubtext: false,
  showPaymentSourceIcon: false,
  showLabels: false
}, (r = "defaultProps") in b ? Object.defineProperty(b, r, {
  value: i,
  enumerable: true,
  configurable: true,
  writable: true
}) : b[r] = i