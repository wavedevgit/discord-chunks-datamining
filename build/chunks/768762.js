/** Chunk was on 43473 **/
n.d(t, {
  Z: () => m
});
var r, o, i = n(255367),
  c = n(73800),
  a = n(120356),
  l = n.n(a),
  s = n(481060),
  d = n(974393);
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
      className: l()(d.__invalid_arrow, t, {
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