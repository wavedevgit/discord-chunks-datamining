/** Chunk was on 72762 **/
n.d(t, {
  Z: () => b
});
var r, i, l = n(255367),
  s = n(73800),
  o = n(120356),
  a = n.n(o),
  c = n(481060),
  u = n(974393);
let d = {
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
  },
  f = {
    [d.UP]: "",
    [d.RIGHT]: u.right,
    [d.DOWN]: u.down,
    [d.LEFT]: u.left
  };
class p extends(i = s.PureComponent) {
  render() {
    let {
      direction: e,
      className: t
    } = this.props;
    return (0, l.jsx)(c.wj7, {
      size: "md",
      color: "currentColor",
      className: a()(t, {
        [f[e]]: !0
      })
    })
  }
}(r = "Directions") in p ? Object.defineProperty(p, r, {
  value: d,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : p[r] = d;
let b = p