/** Chunk was on 43473 **/
n.d(t, {
  Z: () => m
});
var o, r, i = n(255367),
  c = n(73800),
  l = n(120356),
  a = n.n(l),
  s = n(481060),
  d = n(974393);
let u = {
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
  },
  f = {
    [u.UP]: "",
    [u.RIGHT]: d.right,
    [u.DOWN]: d.down,
    [u.LEFT]: d.left
  };
class p extends(r = c.PureComponent) {
  render() {
    let {
      direction: e,
      className: t
    } = this.props;
    return (0, i.jsx)(s.wj7, {
      size: "md",
      color: "currentColor",
      className: a()(t, {
        [f[e]]: !0
      })
    })
  }
}(o = "Directions") in p ? Object.defineProperty(p, o, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : p[o] = u;
let m = p