/** Chunk was on 47863 **/
/** chunk id: 152708, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var r, i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk600164 = require("./600164.jsx"),
  Chunk152573 = require("./152573.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var f = ((r = f || {}).WRAP = "wrap", r.STACK = "stack", r);
class p extends(i = Chunk647438.PureComponent) {
  renderChildren() {
    let e, {
      children: t,
      layout: n,
      columns: r
    } = this.props;
    switch (require) {
      case "stack":
        e = "100%";
        break;
      case "wrap":
        e = "".concat(1 / r * 100, "%")
    }
    return exports.map((t, n) => (0, l.jsx)(c.Z.Child, {
      className: d.tile,
      basis: e,
      grow: 0,
      children: t
    }, n))
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk600164.Z, {
      className: a()(module, Chunk152573.grid),
      wrap: Chunk600164.Z.Wrap.WRAP,
      children: this.renderChildren()
    })
  }
}
u(p, "Layout", f), u(p, "defaultProps", {
  children: [],
  layout: "wrap",
  columns: 4
});
let h = p