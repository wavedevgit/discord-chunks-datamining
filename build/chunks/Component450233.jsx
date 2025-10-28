/** Chunk was on 1272 **/
/** chunk id: 450233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => m,
  Z: () => g
});
var r, i, l, a, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk16084 = require("./16084.js"),
  Chunk855775 = require("./855775.js"),
  Chunk388032 = require("./388032.jsx"),
  m = ((r = {}).SHORT = "SHORT", r.LONG = "LONG", r);
class h extends(a = Chunk647438.PureComponent) {
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
    return null == exports ? null : (0, Chunk951288.jsx)("div", {
      className: module,
      children: this.getText(exports, require)
    })
  }
}
l = {
  messageStyle: "LONG"
}, (i = "defaultProps") in h ? Object.defineProperty(h, i, {
  value: l,
  enumerable: true,
  configurable: true,
  writable: true
}) : h[i] = l;
let g = Chunk442837.ZP.connectStores([Chunk855775.Z], () => ({
  purchaseError: Chunk855775.Z.error
}))(h)