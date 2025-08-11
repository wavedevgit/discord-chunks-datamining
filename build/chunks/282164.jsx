/** Chunk was on web.js **/
/** chunk id: 282164, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk873115 = require("./873115.js"),
  Chunk219929 = require("./219929.jsx"),
  Chunk618541 = require("./618541.js"),
  Chunk975060 = require("./975060.js"),
  Chunk388032 = require("./388032.js"),
  Chunk912296 = require("./912296.js");
class p extends Chunk73800.PureComponent {
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
    return <Chunk481060.hjN className={exports} title={Chunk388032.intl.string(Chunk388032.t.QQBAoq)}><div className={Chunk912296.inputWrapper}>{<Chunk219929.ZP type={Chunk219929.ZP.Types.PAYPAL} className={Chunk912296.paypalIcon} />}{<Chunk755721.Is value={module} editable={false} readOnly={true} placeholder={null == require ? Chunk388032.intl.string(Chunk388032.t.dte2Mz) : Chunk388032.intl.string(Chunk388032.t.hopw7e)} inputClassName={Chunk912296.paypalInput} />}</div></Chunk481060.hjN>
  }
}
let h = Chunk442837.ZP.connectStores([Chunk618541.Z, Chunk975060.Z], () => ({
  braintreeEmail: Chunk975060.Z.braintreeEmail,
  paypalClient: Chunk618541.Z.getPayPalClient()
}))(p)