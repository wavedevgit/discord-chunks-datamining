/** Chunk was on 88936 **/
n.d(t, {
  Z: () => m
});
var r, l, i = n(200651),
  o = n(192379),
  a = n(120356),
  s = n.n(a),
  c = n(481060),
  u = n(388032),
  d = n(741715);
let f = {
  BLOCK: d.block,
  INLINE: d.inline
};
class p extends(l = o.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: r = f.BLOCK,
      style: l
    } = this.props;
    return (0, i.jsxs)("div", {
      className: s()(t, r),
      style: l,
      children: [(0, i.jsxs)(c.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-positive",
        className: d.pro,
        children: [u.NW.string(u.t["8tvIiI"]), ":"]
      }), (0, i.jsx)(c.Text, {
        className: s()(d.tip, n),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}(r = "Types") in p ? Object.defineProperty(p, r, {
  value: f,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : p[r] = f;
let m = p