/** Chunk was on 46746 **/
/** chunk id: 152708, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var r, i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk600164 = require("./600164.js"),
  Chunk243676 = require("./243676.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var f = ((r = f || {}).WRAP = "wrap", r.STACK = "stack", r);
class m extends(i = Chunk73800.PureComponent) {
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
    return exports.map((t, n) => <c.Z.Child className={d.tile} basis={e} grow={0}>{t}</c.Z.Child>)
  }
  render() {
    let {
      className: e
    } = this.props;
    return <Chunk600164.Z className={a()(module, Chunk243676.grid)} wrap={Chunk600164.Z.Wrap.WRAP}>{this.renderChildren()}</Chunk600164.Z>
  }
}
u(m, "Layout", f), u(m, "defaultProps", {
  children: [],
  layout: "wrap",
  columns: 4
});
let h = m