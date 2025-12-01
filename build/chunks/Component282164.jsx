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
    null != this.props.paypalClient && Chunk873115.f6()
  }
  componentWillUnmount() {
    Chunk873115.Nj().then(() => Chunk873115.Dz())
  }
  render() {
    let {
      braintreeEmail: e,
      paypalClient: t
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk481060.oil, {
      label: Chunk388032.intl.string(Chunk388032.t.QQBAos),
      leading: {
        type: "image",
        src: (0, Chunk219929.hx)(Chunk219929.ZP.Types.PAYPAL)
      },
      value: module,
      readOnly: true,
      placeholder: null == exports ? Chunk388032.intl.string(Chunk388032.t.dte2M9) : Chunk388032.intl.string(Chunk388032.t.hopw7X)
    })
  }
}
let p = Chunk442837.ZP.connectStores([Chunk618541.Z, Chunk975060.Z], () => ({
  braintreeEmail: Chunk975060.Z.braintreeEmail,
  paypalClient: Chunk618541.Z.getPayPalClient()
}))(f)