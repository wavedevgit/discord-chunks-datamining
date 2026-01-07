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
    null != this.props.venmoClient && s.by()
  }
  componentWillUnmount() {
    s.RS().then(() => s.ib())
  }
  render() {
    let {
      venmoUsername: e,
      className: t,
      venmoClient: n
    } = this.props, i = null != e && "" !== e;
    return (0, r.jsxs)("div", {
      className: t,
      children: [(0, r.jsx)(l.ZP, {
        type: l.ZP.Types.VENMO,
        size: l.Uy.MEDIUM,
        className: f.venmoIcon
      }), i ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.Heading, {
          variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
          className: f.connectionInstructions,
          children: d.intl.format(d.t.DowIre, {
            venmoUsername: e
          })
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          className: f.connectionInstructions,
          children: d.intl.string(d.t.kmEvnR)
        })]
      }) : (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        className: f.connectionInstructions,
        children: null == n ? d.intl.string(d.t["2ouZDU"]) : d.intl.string(d.t.mIL6Jb)
      })]
    })
  }
}
let _ = Chunk442837.ZP.connectStores([Chunk618541.Z, Chunk975060.Z], () => ({
  venmoUsername: u.Z.venmoUsername,
  venmoClient: c.Z.getVenmoClient()
}))(p)