/** Chunk was on 1272 **/
/** chunk id: 450233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => h,
  Z: () => m
});
var r, i, l, a, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk16084 = require("./16084.js"),
  Chunk855775 = require("./855775.js"),
  Chunk388032 = require("./388032.jsx"),
  h = ((r = {}).SHORT = "SHORT", r.LONG = "LONG", r);
class g extends(a = Chunk473749.PureComponent) {
  getText(e, t) {
    if (429 === e.status) switch (t) {
      case "SHORT":
        return f.intl.string(f.t.T15lqn);
      case "LONG":
        return f.intl.string(f.t.XFShdK)
    }
    switch (t) {
      case "SHORT":
        return f.intl.string(f.t["+XstB0"]);
      case "LONG":
        return f.intl.string(f.t.epyCuh)
    }
  }
  componentWillUnmount() {
    null != this.props.purchaseError && Chunk570140.Z.wait(() => Chunk16084.pB())
  }
  render() {
    let {
      className: e,
      purchaseError: t,
      messageStyle: n
    } = this.props;
    return null == exports ? null : (0, Chunk54381.jsx)("div", {
      className: module,
      children: this.getText(exports, require)
    })
  }
}
l = {
  messageStyle: "LONG"
}, (i = "defaultProps") in g ? Object.defineProperty(g, i, {
  value: l,
  enumerable: true,
  configurable: true,
  writable: true
}) : g[i] = l;
let m = Chunk442837.ZP.connectStores([Chunk855775.Z], () => ({
  purchaseError: Chunk855775.Z.error
}))(g)