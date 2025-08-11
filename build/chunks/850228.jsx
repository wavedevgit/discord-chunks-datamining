/** Chunk was on web.js **/
/** chunk id: 850228, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk219929 = require("./219929.jsx"),
  Chunk975060 = require("./975060.js"),
  Chunk559725 = require("./559725.js"),
  Chunk439041 = require("./439041.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk261959 = require("./261959.js");
class _ extends Chunk73800.PureComponent {
  componentDidMount() {
    null == this.props.adyenPaymentData && null != this.props.cashAppPayComponent && Chunk559725.cp()
  }
  render() {
    var e, t;
    let {
      className: n,
      cashAppPayComponent: i
    } = this.props, o = this.props.adyenPaymentData, l = null != (t = null == Chunk442837 || null == (e = Chunk442837.paymentMethod) ? true : module.cashtag) ? exports : "", c = null != Chunk442837 && "" !== Chunk975060;
    return <div className={require}>{<Chunk219929.ZP type={Chunk219929.ZP.Types.CASH_APP} size={Chunk219929.Uy.MEDIUM} className={Chunk261959.icon} />}{Chunk559725 ? <Chunk255367.Fragment>{<Chunk481060.X6q variant={Chunk975060.length < 25 ? "heading-xl/bold" : "heading-lg/bold"} className={Chunk261959.connectionInstructions}>{Chunk388032.intl.format(Chunk388032.t["ze/1yM"], {
            cashtag: Chunk975060
          })}</Chunk481060.X6q>}{<Chunk481060.Text variant={"text-md/medium"} className={Chunk261959.connectionInstructions}>{Chunk388032.intl.string(Chunk388032.t.VPOx7O)}</Chunk481060.Text>}</Chunk255367.Fragment> : <Chunk481060.Text variant={"text-md/medium"} className={Chunk261959.connectionInstructions}>{null == Chunk73800 ? Chunk388032.intl.string(Chunk388032.t["CgVe//"]) : Chunk388032.intl.string(Chunk388032.t["1MqcjI"])}</Chunk481060.Text>}</div>
  }
}
let p = Chunk442837.ZP.connectStores([Chunk439041.Z, Chunk975060.Z], () => ({
  cashAppPayComponent: Chunk439041.Z.cashAppPayComponent,
  adyenPaymentData: Chunk975060.Z.adyenPaymentData
}))(_)