/** Chunk was on web.js **/
/** chunk id: 850228, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk219929 = require("./219929.jsx"),
  Chunk975060 = require("./975060.js"),
  Chunk559725 = require("./559725.js"),
  Chunk439041 = require("./439041.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk379570 = require("./379570.js");
class p extends Chunk473749.PureComponent {
  componentDidMount() {
    null == this.props.adyenPaymentData && null != this.props.cashAppPayComponent && c.cp()
  }
  render() {
    var e, t;
    let {
      className: n,
      cashAppPayComponent: i
    } = this.props, a = this.props.adyenPaymentData, l = null != (t = null == a || null == (e = a.paymentMethod) ? true : e.cashtag) ? t : "", c = null != a && "" !== l;
    return (0, r.jsxs)("div", {
      className: n,
      children: [(0, r.jsx)(s.ZP, {
        type: s.ZP.Types.CASH_APP,
        size: s.Uy.MEDIUM,
        className: f.icon
      }), c ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.Heading, {
          variant: l.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
          className: f.connectionInstructions,
          children: d.intl.format(d.t["ze/1yE"], {
            cashtag: l
          })
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          className: f.connectionInstructions,
          children: d.intl.string(d.t.VPOx7N)
        })]
      }) : (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        className: f.connectionInstructions,
        children: null == i ? d.intl.string(d.t["CgVe/w"]) : d.intl.string(d.t["1MqcjI"])
      })]
    })
  }
}
let _ = Chunk442837.ZP.connectStores([Chunk439041.Z, Chunk975060.Z], () => ({
  cashAppPayComponent: u.Z.cashAppPayComponent,
  adyenPaymentData: l.Z.adyenPaymentData
}))(p)