/** Chunk was on web.js **/
/** chunk id: 915271, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk873115 = require("./873115.js"),
  Chunk219929 = require("./219929.jsx"),
  Chunk618541 = require("./618541.js"),
  Chunk975060 = require("./975060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk422743 = require("./422743.js");
class _ extends Chunk73800.PureComponent {
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
    return <div className={exports}>{<Chunk219929.ZP type={Chunk219929.ZP.Types.VENMO} size={Chunk219929.Uy.MEDIUM} className={Chunk422743.venmoIcon} />}{Chunk73800 ? <Chunk255367.Fragment>{<Chunk481060.X6q variant={module.length < 25 ? "heading-xl/bold" : "heading-lg/bold"} className={Chunk422743.connectionInstructions}>{Chunk388032.intl.format(Chunk388032.t.DowIra, {
            venmoUsername: module
          })}</Chunk481060.X6q>}{<Chunk481060.Text variant={"text-md/medium"} className={Chunk422743.connectionInstructions}>{Chunk388032.intl.string(Chunk388032.t.kmEvnZ)}</Chunk481060.Text>}</Chunk255367.Fragment> : <Chunk481060.Text variant={"text-md/medium"} className={Chunk422743.connectionInstructions}>{null == require ? Chunk388032.intl.string(Chunk388032.t["2ouZDQ"]) : Chunk388032.intl.string(Chunk388032.t.mIL6JS)}</Chunk481060.Text>}</div>
  }
}
let p = Chunk442837.ZP.connectStores([Chunk618541.Z, Chunk975060.Z], () => ({
  venmoUsername: Chunk975060.Z.venmoUsername,
  venmoClient: Chunk618541.Z.getVenmoClient()
}))(_)