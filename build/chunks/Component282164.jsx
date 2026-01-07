/** Chunk was on web.js **/
/** chunk id: 282164, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk873115 = require("./873115.js"),
  Chunk219929 = require("./219929.jsx"),
  Chunk618541 = require("./618541.js"),
  Chunk975060 = require("./975060.js"),
  Chunk388032 = require("./388032.jsx");
class f extends Chunk473749.PureComponent {
  componentDidMount() {
    null != this.props.paypalClient && s.f6()
  }
  componentWillUnmount() {
    s.Nj().then(() => s.Dz())
  }
  render() {
    let {
      braintreeEmail: e,
      paypalClient: t
    } = this.props;
    return (0, r.jsx)(o.oil, {
      label: d.intl.string(d.t.QQBAos),
      leading: {
        type: "image",
        src: (0, l.hx)(l.ZP.Types.PAYPAL)
      },
      value: e,
      readOnly: true,
      placeholder: null == t ? d.intl.string(d.t.dte2M9) : d.intl.string(d.t.hopw7X)
    })
  }
}
let p = Chunk442837.ZP.connectStores([Chunk618541.Z, Chunk975060.Z], () => ({
  braintreeEmail: u.Z.braintreeEmail,
  paypalClient: c.Z.getPayPalClient()
}))(f)