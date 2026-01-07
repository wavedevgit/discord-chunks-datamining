/** Chunk was on 1272 **/
/** chunk id: 450233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => g,
  Z: () => h
});
var r, i, l, a, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk16084 = require("./16084.js"),
  Chunk855775 = require("./855775.js"),
  Chunk388032 = require("./388032.jsx"),
  g = ((r = {}).SHORT = "SHORT", r.LONG = "LONG", r);
class m extends(a = Chunk473749.PureComponent) {
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
    null != this.props.purchaseError && u.Z.wait(() => d.pB())
  }
  render() {
    let {
      className: e,
      purchaseError: t,
      messageStyle: n
    } = this.props;
    return null == t ? null : (0, o.jsx)("div", {
      className: e,
      children: this.getText(t, n)
    })
  }
}
l = {
  messageStyle: "LONG"
}, (i = "defaultProps") in m ? Object.defineProperty(m, i, {
  value: l,
  enumerable: true,
  configurable: true,
  writable: true
}) : m[i] = l;
let h = Chunk442837.ZP.connectStores([Chunk855775.Z], () => ({
  purchaseError: p.Z.error
}))(m)