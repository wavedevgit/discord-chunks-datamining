/** Chunk was on 13368 **/
n.d(t, {
  Z: () => m
});
var r, a, i = n(255367),
  o = n(73800),
  l = n(120356),
  c = n.n(l),
  s = n(481060),
  u = n(388032),
  _ = n(108921);
let d = {
  BLOCK: _.block,
  INLINE: _.inline
};
class f extends(a = o.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: r = d.BLOCK,
      style: a
    } = this.props;
    return (0, i.jsxs)("div", {
      className: c()(t, r),
      style: a,
      children: [(0, i.jsxs)(s.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-positive",
        className: _.pro,
        children: [u.intl.string(u.t["8tvIiI"]), ":"]
      }), (0, i.jsx)(s.Text, {
        className: c()(_.tip, n),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}(r = "Types") in f ? Object.defineProperty(f, r, {
  value: d,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : f[r] = d;
let m = f