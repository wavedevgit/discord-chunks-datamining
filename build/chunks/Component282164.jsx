/** Chunk was on web.js **/
/** chunk id: 282164, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk873115 = require("./873115.js"),
  Chunk219929 = require("./219929.jsx"),
  Chunk618541 = require("./618541.js"),
  Chunk975060 = require("./975060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk632236 = require("./632236.js");
class _ extends Chunk647438.PureComponent {
  componentDidMount() {
    null != this.props.paypalClient && Chunk873115.f6()
  }
  componentWillUnmount() {
    Chunk873115.Nj().then(() => Chunk873115.Dz())
  }
  render() {
    let {
      braintreeEmail: e,
      className: t,
      paypalClient: n
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk481060.hjN, {
      className: exports,
      title: Chunk388032.intl.string(Chunk388032.t.QQBAoq),
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk632236.inputWrapper,
        children: (0, Chunk951288.jsx)(Chunk481060.oil, {
          leading: {
            type: "image",
            src: (0, Chunk219929.hx)(Chunk219929.ZP.Types.PAYPAL)
          },
          value: module,
          readOnly: true,
          placeholder: null == require ? Chunk388032.intl.string(Chunk388032.t.dte2Mz) : Chunk388032.intl.string(Chunk388032.t.hopw7e)
        })
      })
    })
  }
}
let p = Chunk442837.ZP.connectStores([Chunk618541.Z, Chunk975060.Z], () => ({
  braintreeEmail: Chunk975060.Z.braintreeEmail,
  paypalClient: Chunk618541.Z.getPayPalClient()
}))(_)