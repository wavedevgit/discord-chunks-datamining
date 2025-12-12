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
    null == this.props.adyenPaymentData && null != this.props.cashAppPayComponent && Chunk559725.cp()
  }
  render() {
    var e, t;
    let {
      className: n,
      cashAppPayComponent: i
    } = this.props, a = this.props.adyenPaymentData, l = null != (t = null == Chunk442837 || null == (e = Chunk442837.paymentMethod) ? true : module.cashtag) ? exports : "", c = null != Chunk442837 && "" !== Chunk975060;
    return (0, Chunk54381.jsxs)("div", {
      className: require,
      children: [(0, Chunk54381.jsx)(Chunk219929.ZP, {
        type: Chunk219929.ZP.Types.CASH_APP,
        size: Chunk219929.Uy.MEDIUM,
        className: Chunk379570.icon
      }), Chunk559725 ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: Chunk975060.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
          className: Chunk379570.connectionInstructions,
          children: Chunk388032.intl.format(Chunk388032.t["ze/1yE"], {
            cashtag: Chunk975060
          })
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          className: Chunk379570.connectionInstructions,
          children: Chunk388032.intl.string(Chunk388032.t.VPOx7N)
        })]
      }) : (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        className: Chunk379570.connectionInstructions,
        children: null == Chunk473749 ? Chunk388032.intl.string(Chunk388032.t["CgVe/w"]) : Chunk388032.intl.string(Chunk388032.t["1MqcjI"])
      })]
    })
  }
}
let _ = Chunk442837.ZP.connectStores([Chunk439041.Z, Chunk975060.Z], () => ({
  cashAppPayComponent: Chunk439041.Z.cashAppPayComponent,
  adyenPaymentData: Chunk975060.Z.adyenPaymentData
}))(p)