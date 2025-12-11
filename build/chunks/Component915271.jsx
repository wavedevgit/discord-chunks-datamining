/** Chunk was on web.js **/
/** chunk id: 915271, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk873115 = require("./873115.js"),
  Chunk219929 = require("./219929.jsx"),
  Chunk618541 = require("./618541.js"),
  Chunk975060 = require("./975060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk867182 = require("./867182.js");
class p extends Chunk473749.PureComponent {
  componentDidMount() {
    null != this.props.venmoClient && Chunk873115.by()
  }
  componentWillUnmount() {
    Chunk873115.RS().then(() => Chunk873115.ib())
  }
  render() {
    let {
      venmoUsername: e,
      className: t,
      venmoClient: n
    } = this.props, i = null != module && "" !== module;
    return (0, Chunk54381.jsxs)("div", {
      className: exports,
      children: [(0, Chunk54381.jsx)(Chunk219929.ZP, {
        type: Chunk219929.ZP.Types.VENMO,
        size: Chunk219929.Uy.MEDIUM,
        className: Chunk867182.venmoIcon
      }), Chunk473749 ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: module.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
          className: Chunk867182.connectionInstructions,
          children: Chunk388032.intl.format(Chunk388032.t.DowIre, {
            venmoUsername: module
          })
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          className: Chunk867182.connectionInstructions,
          children: Chunk388032.intl.string(Chunk388032.t.kmEvnR)
        })]
      }) : (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        className: Chunk867182.connectionInstructions,
        children: null == require ? Chunk388032.intl.string(Chunk388032.t["2ouZDU"]) : Chunk388032.intl.string(Chunk388032.t.mIL6Jb)
      })]
    })
  }
}
let _ = Chunk442837.ZP.connectStores([Chunk618541.Z, Chunk975060.Z], () => ({
  venmoUsername: Chunk975060.Z.venmoUsername,
  venmoClient: Chunk618541.Z.getVenmoClient()
}))(p)