/** Chunk was on 46746 **/
n.d(t, {
  Z: () => m
});
var r, l, i = n(200651),
  s = n(192379),
  o = n(120356),
  a = n.n(o),
  c = n(600164),
  d = n(993127);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var f = ((r = f || {}).WRAP = "wrap", r.STACK = "stack", r);
class h extends(l = s.PureComponent) {
  renderChildren() {
    let e;
    let {
      children: t,
      layout: n,
      columns: r
    } = this.props;
    switch (n) {
      case "stack":
        e = "100%";
        break;
      case "wrap":
        e = "".concat(1 / r * 100, "%")
    }
    return t.map((t, n) => (0, i.jsx)(c.Z.Child, {
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
    return (0, i.jsx)(c.Z, {
      className: a()(e, d.grid),
      wrap: c.Z.Wrap.WRAP,
      children: this.renderChildren()
    })
  }
}
u(h, "Layout", f), u(h, "defaultProps", {
  children: [],
  layout: "wrap",
  columns: 4
});
let m = h