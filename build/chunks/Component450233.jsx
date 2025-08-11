/** Chunk was on 1272 **/
/** chunk id: 450233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => f,
  Z: () => m
});
var r, i, l, a, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk16084 = require("./16084.js"),
  Chunk855775 = require("./855775.js"),
  Chunk388032 = require("./388032.jsx"),
  f = ((r = {}).SHORT = "SHORT", r.LONG = "LONG", r);
class g extends(a = Chunk73800.PureComponent) {
  getText(e, t) {
    if (429 === e.status) switch (t) {
      case "SHORT":
        return h.intl.string(h.t.T15lqq);
      case "LONG":
        return h.intl.string(h.t.XFShdH)
    }
    switch (t) {
      case "SHORT":
        return h.intl.string(h.t["+XstBw"]);
      case "LONG":
        return h.intl.string(h.t.epyCur)
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
    return null == exports ? null : (0, Chunk255367.jsx)("div", {
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