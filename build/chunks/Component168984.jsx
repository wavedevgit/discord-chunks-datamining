/** Chunk was on web.js **/
/** chunk id: 168984, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk812745 = require("./812745.jsx"),
  Chunk825755 = require("./825755.js"),
  Chunk682449 = require("./682449.js"),
  Chunk490581 = require("./490581.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk985022 = require("./985022.js");
class p extends Chunk64700.PureComponent {
  componentDidMount() {
    null == this.props.adyenPaymentData && null != this.props.cashAppPayComponent && c.uy()
  }
  render() {
    var e, t;
    let {
      className: n,
      cashAppPayComponent: i
    } = this.props, a = this.props.adyenPaymentData, l = null != (e = null == a || null == (t = a.paymentMethod) ? true : t.cashtag) ? e : "", c = null != a && "" !== l;
    return (0, r.jsxs)("div", {
      className: n,
      children: [(0, r.jsx)(o.Ay, {
        type: o.Ay.Types.CASH_APP,
        size: o.y3.MEDIUM,
        className: f.K
      }), c ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.Heading, {
          variant: l.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
          className: f.y,
          children: d.intl.format(d.t["ze/1yE"], {
            cashtag: l
          })
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/medium",
          className: f.y,
          children: d.intl.string(d.t.VPOx7N)
        })]
      }) : (0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        className: f.y,
        children: null == i ? d.intl.string(d.t["CgVe/w"]) : d.intl.string(d.t["1MqcjI"])
      })]
    })
  }
}
let _ = Chunk311907.Ay.connectStores([Chunk490581.A, Chunk825755.A], () => ({
  cashAppPayComponent: u.A.cashAppPayComponent,
  adyenPaymentData: l.A.adyenPaymentData
}))(p)