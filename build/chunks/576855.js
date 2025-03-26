/** Chunk was on 52272 **/
n.d(t, {
  Z: () => f
});
var r, i, o = n(200651),
  a = n(192379),
  l = n(120356),
  s = n.n(l),
  c = n(481060),
  u = n(388032),
  d = n(741715);
let p = {
  BLOCK: d.block,
  INLINE: d.inline
};
class m extends(i = a.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: r = p.BLOCK,
      style: i
    } = this.props;
    return (0, o.jsxs)("div", {
      className: s()(t, r),
      style: i,
      children: [(0, o.jsxs)(c.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-positive",
        className: d.pro,
        children: [u.NW.string(u.t["8tvIiI"]), ":"]
      }), (0, o.jsx)(c.Text, {
        className: s()(d.tip, n),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}(r = "Types") in m ? Object.defineProperty(m, r, {
  value: p,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : m[r] = p;
let f = m