/** Chunk was on 45791 **/
n.d(t, {
  Z: () => m
});
var r, o, i = n(255367),
  c = n(73800),
  l = n(120356),
  a = n.n(l),
  s = n(481060),
  d = n(928086);
let u = {
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
  },
  f = {
    [u.UP]: d.up,
    [u.RIGHT]: d.right,
    [u.DOWN]: d.down,
    [u.LEFT]: d.left
  };
class p extends(o = c.PureComponent) {
  render() {
    let {
      direction: e,
      className: t
    } = this.props;
    return (0, i.jsx)(s.wj7, {
      size: "md",
      color: "currentColor",
      className: a()(d.__invalid_arrow, t, {
        [f[e]]: !0
      })
    })
  }
}(r = "Directions") in p ? Object.defineProperty(p, r, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : p[r] = u;
let m = p