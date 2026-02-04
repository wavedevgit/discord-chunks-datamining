/** Chunk was on 21738 **/
/** chunk id: 612391, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m,
  g: () => f
});
var r, i, l, a, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk830382 = require("./830382.js"),
  Chunk79387 = require("./79387.js"),
  Chunk985018 = require("./985018.jsx"),
  f = ((r = {}).SHORT = "SHORT", r.LONG = "LONG", r);
class g extends(a = Chunk64700.PureComponent) {
  getText(e, t) {
    if (429 === e.status) switch (t) {
      case "SHORT":
        return h.intl.string(h.t.T15lqn);
      case "LONG":
        return h.intl.string(h.t.XFShdK)
    }
    switch (t) {
      case "SHORT":
        return h.intl.string(h.t["+XstB0"]);
      case "LONG":
        return h.intl.string(h.t.epyCuh)
    }
  }
  componentWillUnmount() {
    null != this.props.purchaseError && u.h.wait(() => d.T3())
  }
  render() {
    let {
      className: e,
      purchaseError: t,
      messageStyle: n
    } = this.props;
    return null == t ? null : (0, s.jsx)("div", {
      className: e,
      children: this.getText(t, n)
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
let m = Chunk311907.Ay.connectStores([Chunk79387.A], () => ({
  purchaseError: p.A.error
}))(g)